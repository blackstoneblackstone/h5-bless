import {$container, $tweenManager, $easing, $spine} from "../../utils/pixi"
import {Sprite} from "../../utils"

export default class P2 {
    constructor(res) {
        this.app = new $container()
        this.elements = {}
        this.res = res
        this.init()
    }

    init() {
        l('p2 start .....')
        this.initEl()
        this.mount()
        return this.app
    }

// .add("p2_bg", p2_bg)
// .add("p2_bless", p2_bless)
// .add("p2_grandpa", p2_grandpa)
// .add("p2_tie", p2_tie)
// .add("p2_boy", p2_boy)
// .add("p2_desk", p2_desk)
// .add("p2_girl", p2_girl)
    initEl() {
        const {p2_bg, p2_bless, p2_grandpa, p2_tie, p2_boy, p2_desk, p2_girl} = this.res
        this.elements = {
            bg: Sprite(p2_bg),
            bless: Sprite(p2_bless),
            tie: Sprite(p2_tie),
            grandpa: Sprite(p2_grandpa),
            boy: Sprite(p2_boy),
            desk: Sprite(p2_desk),
            girl: Sprite(p2_girl),
        }
        const {bless, grandpa, tie, boy, desk, girl} = this.elements

        bless.x = 244
        bless.y = 78

        grandpa.x = 172
        grandpa.y = 263

        tie.x = 184
        tie.y = 109

        boy.x = 168
        boy.y = 495

        desk.x = 0
        desk.y = 402

        girl.x = 8
        girl.y = 469

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
        console.log('p2 next')
        APP.stage.removeChild(this.app)
        r()
    }

    render() {
        APP.ticker.add(function (delta) {

        })
    }
}