import {Sprite} from "./util";

export default class P1 {
    constructor() {
        this.container = new SINT.Container();
        const bg = new SINT.SpriteClip(0, 0, 'p1bg');
        bg.width = 480
        bg.height = 854
        this.container.addChild(bg);
        GAME.add(this.container)
        this.light()
        return this.container
    }

    light() {
        const elements = {
            bless: Sprite('p1_bless'),
            l1: Sprite('p1_1'),
            l2: Sprite('p1_2'),
            l3: Sprite('p1_3'),
            l4: Sprite('p1_4'),
            l5: Sprite('p1_5'),
            l6: Sprite('p1_6'),
            l7: Sprite('p1_7'),
            l8: Sprite('p1_8')
        };
        const {bless, l1, l2, l3, l4, l5, l6, l7, l8} = elements;
        bless.x = 180 + 22;
        bless.y = 599 + 22;

        l1.x = 420;
        l1.y = 132;

        l2.x = 126;
        l2.y = 547;

        l3.x = 311;
        l3.y = 534;

        l4.x = 173;
        l4.y = 399;

        l5.x = 61;
        l5.y = 244;

        l6.x = 279;
        l6.y = 107;

        l7.x = 310;
        l7.y = 187;

        l8.x = 72;
        l8.y = 53;

        Object.values(elements).map((element) => {
            this.container.addChild(element);
            // SINT.Tween.to(element, 0.5, {alpha: 0.1, repeat: -1});
        });

        bless.anchor.set(0.5);
        bless.interactive = true;
        bless.on('pointerdown', function () {
            SINT.Tween.to(bless.scale, 0.3, {
                ease: Elastic.easeOut,
                x: 1.5,
                y: 1.5,
                onComplete: function () {
                    SINT.magic.doTwist(GAME.stage, [bless.x, bless.y], 300, 1, false);
                }
            });
        })
    }
}
