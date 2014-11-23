@extends('layouts.default')

@section('content')
<header data-behaviour="particles" data-particles-count="30">
    <h1>Podcasts</h1>
</header>
<section data-behaviour="podcasts" data-podcasts-url="/assets/podcasts.opml" class="podcasts-list container">
    <p class="centre">loading...</p>
</section>
@endsection
