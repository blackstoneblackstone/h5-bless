import {$container, $tweenManager, $easing, $spine, $displacementFilter, $rope, $point} from "../../utils/pixi"
import {Sprite} from "../../utils"
import starAction from "../common/starAction";
import displacement from "../common/displacement";

// 国贸
export default class P0 {
    constructor(res) {
        this.app = new $container()
        this.elements = {}
        this.res = res
        this.init()
    }

    init() {
        l('p0 start .....')
        this.initEl()
        this.mount()
        return this.app
    }

    initEl() {
        const {p0_bg, p0_flower, p0_glass, p0_bless, p0_women, p0_man, p0_displacement} = this.res
        this.elements = {
            bg: Sprite(p0_bg),
            man: Sprite(p0_man),
            women: new $spine(p0_women.spineData),
            glass: Sprite(p0_glass),
            flower: Sprite(p0_flower),
            bless: Sprite(p0_bless),
            // displacement: Sprite(p0_displacement),
        }
        const {women, man, bless} = this.elements
        women.skeleton.setToSetupPose()
        women.update(0)
        women.autoUpdate = false
        women.x = 250
        women.y = APP_HEIGHT - 420

        bless.x = 200
        bless.y = 26
        bless.zOrder = 100

        man.x = 34
        man.y = 135

    }

    manAction() {
        const {displacement, glass} = this.elements
        displacement.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        const displacementFilter = new $displacementFilter(displacement);
        displacementFilter.padding = 10;
        displacement.position = glass.position;
        glass.filters = [displacementFilter];
        displacementFilter.scale.x = 30;
        displacementFilter.scale.y = 60;
    }

    mount() {
        Object.values(this.elements).map((element) => {
            this.app.addChild(element)
        })
    }

    action() {
        APP.stage.addChild(this.app)
        const {women, bless} = this.elements
        women.state.setAnimation(0, 'hand', true)

        bless.interactive = true
        bless.on("tap", () => this.next())
        this.render()
        starAction()
        // displacement()
    }

    next() {
        var points = []
        var count = 0
        var ropeLength = 918 / 20
        for (var i = 0; i < 20; i++) {
            points.push(new $point(i * ropeLength, 0))
        }
        var strip = new $rope(this.elements.bless, points)
        APP.ticker.add(function () {
            count += 0.1;
            for (var i = 0; i < points.length; i++) {
                points[i].y = Math.sin((i * 0.5) + count) * 30
                points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20
            }
        });
    }

    render() {
        const {women, displacement} = this.elements
        APP.ticker.add(function (delta) {
            women.update(0.01666666666667)
            // displacement.x++
            // if (displacement.x > displacement.width) {
            //             //     displacement.x = 0
            //             // }
        })
    }
}
