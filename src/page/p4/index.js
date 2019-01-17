import {$container, $tweenManager, $easing, $spine} from "../../utils/pixi"
import {Sprite} from "../../utils"
// 拜年
export default class P4 {
    constructor(res) {
        this.app = new $container()
        this.elements = {}
        this.res = res
        this.init()
    }

    init() {
        l('P4 start .....')
        this.initEl()
        this.mount()
        return this.app
    }

    initEl() {
        const {p4_bg, p4_bless, p4_baby, p4_desk, p4_children, p4_grandpa, p4_hi, p4_house, p4_light, p4_photo, p4_wall} = this.res
        this.elements = {
            bg: Sprite(p4_bg),
            house: Sprite(p4_house),
            photo: Sprite(p4_photo),
            wall: Sprite(p4_wall),
            desk: Sprite(p4_desk),
            children: Sprite(p4_children),
            grandpa: Sprite(p4_grandpa),
            hi: Sprite(p4_hi),
            light: Sprite(p4_light),
            baby: Sprite(p4_baby),
            bless: Sprite(p4_bless),
        }
        const {bg, bless, baby, desk, children, grandpa, hi, house, light, photo, wall} = this.elements

        bg.y =147

        wall.x = -15
        wall.y = -9

        photo.x = 135
        photo.y = 103

        bless.x = 8
        bless.y = 41

        baby.x = 127
        baby.y = 605

        children.x = 297
        children.y = 128

        desk.x = 0
        desk.y = 411

        grandpa.x = 0
        grandpa.y = 241

        hi.x = 264
        hi.y = 74

        light.x = 410
        light.y = 13


    }


    mount() {
        Object.values(this.elements).map((element) => {
            this.app.addChild(element)
        })
    }

    action() {
        return () => new Promise((r, j) => {
            APP.stage.addChild(this.app)
            this.render()
            const {bless} = this.elements
            bless.interactive = true
            bless.on("tap", () => this.next(r))
        })
    }

    next(r) {
        APP.stage.removeChild(this.app)
        r()
    }

    render() {
        APP.ticker.add(function (delta) {

        })
    }
}