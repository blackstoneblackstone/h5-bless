import {
  $container
} from '../../utils/pixi';
import { Sprite } from '../../utils';
import circleNext from '../common/cricleNext';
import waterAction from '../common/waterAction';
import say from '../common/say';

// 国贸
export default class P0 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
    this.init();
  }

  init() {
    l('p0 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    const { p0_bg, p0_bless, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p0_7, p0_8, p0_t1, p0_t2, p0_t3 } = this.res;
    this.elements = {
      bg: Sprite(p0_bg),
      bless: Sprite(p0_bless),
      l1: Sprite(p0_1),
      l2: Sprite(p0_2),
      l3: Sprite(p0_3),
      l4: Sprite(p0_4),
      l5: Sprite(p0_5),
      l6: Sprite(p0_6),
      l7: Sprite(p0_7),
      l8: Sprite(p0_8),
      t1: Sprite(p0_t1),
      t2: Sprite(p0_t2),
      t3: Sprite(p0_t3)
    };
    const { bless, bg, l1, l2, l3, l4, l5, l6, l7, l8, t1, t2, t3 } = this.elements;
    bless.x = 180;
    bless.y = 587;

    bg.y = 100;
    bg.x = 33;
    bg.width = 414;
    bg.height = 714;

    l1.x = 400;
    l1.y = 180;

    l2.x = 140;
    l2.y = 543;

    l3.x = 302;
    l3.y = 533;

    l4.x = 180;
    l4.y = 414;

    l5.x = 85;
    l5.y = 279;

    l6.x = 273;
    l6.y = 162;

    l7.x = 300;
    l7.y = 230;

    l8.x = 92;
    l8.y = 114;

    t1.x = 61;
    t1.y = 10;

    t2.x = 150;
    t2.y = 40;

    t3.x = 118;
    t3.y = 70;

  }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
  }

  action() {
    const self = this;
    return new Promise((r, j) => {
      console.log('p0 action');
      const { bless, l1, l2, l3, l4, l5, l6, l7, l8, t1, t2, t3 } = this.elements;

      APP.stage.addChild(this.app);
      TweenMax.to(l1, 0.5, { alpha: 0.1, repeat: -1 });
      TweenMax.to(l2, 0.5, { alpha: 0.1, repeat: -1, delay: 0.1 });
      TweenMax.to(l3, 0.5, { alpha: 0.1, repeat: -1, delay: 0.2 });
      TweenMax.to(l4, 0.5, { alpha: 0.1, repeat: -1, delay: 0.3 });
      TweenMax.to(l5, 0.5, { alpha: 0.1, repeat: -1, delay: 0.4 });
      TweenMax.to(l6, 0.5, { alpha: 0.1, repeat: -1 });
      TweenMax.to(l7, 0.5, { alpha: 0.1, repeat: -1, delay: 0.5 });
      TweenMax.to(l8, 0.5, { alpha: 0.1, repeat: -1, delay: 0.6 });

      TweenMax.fromTo(this.app, 0.8, {
          alpha: 0
        },
        {
          alpha: 1,
          ease: Power1.easeIn
        });
      TweenMax.from(t1, 1, { alpha: 0, x: -300, delay: 0.5 });
      TweenMax.from(t2, 1, { alpha: 0, x: -300, delay: 1 });
      TweenMax.from(t3, 1, { alpha: 0, x: -300, delay: 1.5 });
      this.render();
      circleNext(bless.x + bless.width / 2, bless.y + bless.height / 2, this.app);
      bless.interactive = true;
      bless.on('tap', function (e) {
          self.next(r, this);
        }
      );
      say.play('p0')
    });
  }

  next(r, self) {
    console.log('p0 next');
    waterAction(r, self, this.app);
  }

  render() {

  }
}
