<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>GTF</title>

    <!--{STYLES}-->
    @if(App::environment('dev'))
    <link rel="stylesheet" href="/assets/dist/styles.dev.css" media="screen" charset="utf-8">
    @else
    <link rel="stylesheet" href="/assets/dist/styles.css" media="screen" charset="utf-8">
    @endif
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700|Lily+Script+One' rel='stylesheet' type='text/css'>
    <!--{END}-->

    <link rel="shortcut icon" href="//www.gideonfarrell.co.uk/favicon.ico">
</head>

<body class="page-{{ $view_name }}">
    <div id="PageContent">
        @yield('content')
    </div>

    <!--{SCRIPTS}-->
    @if(App::environment('dev'))
    <script language="javascript" type="text/javascript" src="assets/js/config.js"></script>
    <script
    language="javascript"
    type="text/javascript"
    src="/lib/requirejs/require.js"
    data-main="/assets/js/main.js"
    ></script>
    @else
    <script language="javascript" type="text/javascript" src="/assets/dist/main.js"></script>
    @endif
    @if(App::environment('production'))
    <script language="javascript" type="text/javascript">
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-11596581-1', 'auto');
    ga('send', 'pageview');
    </script>
    @endif
    <!--{END}-->
</body>
</html>
