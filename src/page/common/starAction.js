import c_star from '@static/common/star.png'
import {$container, $loadingImg, $particles} from '../../utils/pixi'

const container = new $container()

export default (app) => {
    const emitter = new $particles.Emitter(
        container,
        [$loadingImg(c_star)],
        {
            "alpha": {
                "start": 0.5,
                "end": 0.2
            },
            "scale": {
                "start": 0.15,
                "end": 0.2,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "ffffff",
                "end": "ffffff"
            },
            "speed": {
                "start": 100,
                "end": 50
            },
            "startRotation": {
                "min": 50,
                "max": 70
            },
            "rotationSpeed": {
                "min": 0,
                "max": 200
            },
            "lifetime": {
                "min": 4,
                "max": 10
            },
            "blendMode": "normal",
            "ease": [
                {
                    "s": 0,
                    "cp": 0.379,
                    "e": 0.548
                },
                {
                    "s": 0.548,
                    "cp": 0.717,
                    "e": 0.676
                },
                {
                    "s": 0.676,
                    "cp": 0.635,
                    "e": 1
                }
            ],
            "frequency": 0.004,
            "emitterLifetime": 0,
            "maxParticles": 20,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "rect",
            "spawnRect": {
                "x": -200,
                "y": -300,
                "w": 480,
                "h": 500
            }
        }
    );

    app.addChild(container)
    let elapsed = Date.now();
    const update = function () {
        requestAnimationFrame(update);
        var now = Date.now();
        emitter.update((now - elapsed) * 0.001);
        elapsed = now;
    };
    emitter.emit = true;
    update();
}

