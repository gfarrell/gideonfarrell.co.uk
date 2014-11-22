define(['jave', 'particles'], function(Jave, Particles) {
    Jave.define('particles', function($el, api) {
        var id = $el.attr('id');
        if(!id) {
            id = 'particles-' + Math.round(Math.random() * 1000) + '-' + Date.now();
            $el.attr('id', id);
        }

        Particles(id, {
            particles: {
                color: '#fff',
                shape: 'circle',
                opacity: 0.5,
                size: 2,
                size_random: true,
                nb: api.getAs('count', 'integer', 75),
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
                detect_on: 'canvas', // "canvas" or "window"
                mode: 'grab'
            },
            /* Retina Display Support */
            retina_detect: true
        });
    });
});
