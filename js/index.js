require(['jquery', 'particles'], function($, particles) {
    particles('header', {
        particles: {
            color: '#fff',
            shape: 'circle',
            opacity: 0.5,
            size: 2,
            size_random: true,
            nb: 75,
            line_linked: {
                enable_auto: true,
                distance: 250,
                color: '#fff',
                opacity: 0.5,
                width: 1,
                condensed_mode: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 1
            }
        },
        interactivity: {
            enable: true,
            mouse: {
                distance: 250
            },
            detect_on: 'window', // "canvas" or "window"
            mode: 'grab'
        },
        /* Retina Display Support */
        retina_detect: true
    });

    var parts = ['me', 'gideonfarrell', 'co.uk'];
    $('.mailto').attr('href', 'mailto://' + parts[0] + '@' + parts[1] + '.' + parts[2]);
});
