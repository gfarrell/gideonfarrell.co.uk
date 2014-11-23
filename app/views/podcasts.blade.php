@extends('layouts.default')

@section('content')
<header data-behaviour="particles" data-particles-count="30">
    <h1>Podcasts</h1>
</header>
<section data-behaviour="podcasts" data-podcasts-url="/assets/podcasts.opml" class="podcasts-list container">
    <div class="row podcast">
        <div class="podcast__inner">
            <div class="col-xs-2">
                <img class="podcast__image" src="http://www.bbc.co.uk/podcasts/assets/artwork/docarchive.jpg" alt="cover image">
            </div>
            <div class="col-xs-10">
                <div class="row">
                    <h2 class="podcast__title"><a href="http://www.bbc.co.uk/podcasts/series/docarchive" title="website">Documentaries</a></h2>
                    <p class="podcast__description">An indepth look at stories and issues from around the world. This podcast offers you the chance to access landmark series from our archive.</p>
                </div>
                <div class="row">
                    <p class="podcast__meta">
                        In <span class="podcast__meta__category">News &amp; Politics</span>. Last updated <span class="podcast__meta__updated">two days ago</span>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
