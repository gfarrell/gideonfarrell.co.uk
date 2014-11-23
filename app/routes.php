<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('/podcasts', function() {
	return View::make('podcasts');
});

Route::get('/podcast/fetch', function() {
	$url = Input::get('url');
	$validator = Validator::make(['url' => $url], ['url' => ['required', 'url']]);

	// Never trust user input
	if($validator->passes()) {
		$data = Cache::remember('podcast:'.base64_encode($url), Carbon\Carbon::now()->addDay(), function() use ($url) {
			$curl = new Curl\Curl();
			$curl->get($url);

			if($curl->error) {
				return ['error', $curl->error_code];
			} else {
				return $curl->response;
			}
		});

		if(is_array($data) && $data[0] == 'error') {
			App::abort(500, 'cURL error: ' . $data[1]);
		} else {
			$response = Response::make($data, 200);
			$response->header('Content-Type', 'text/xml');
			$response->header('Access-Control-Allow-Origin', $_SERVER['HTTP_HOST']);

			return $response;
		}
	} else {
		App::abort(400, 'Invalid URL');
	}
});
