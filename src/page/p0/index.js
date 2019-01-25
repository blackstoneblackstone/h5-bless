import {
  $container, $loadingSprite
} from '../../utils/pixi';
import { Sprite } from '../../utils';
import circleNext from '../common/cricleNext';
import waterAction from '../common/waterAction';
import say from '../common/say';
import { star } from '../common/starAction';
import tImg from '@static/p0/t.png';

import textmack from '@static/common/textmack.png';

// 国贸
export default class P0 {
  constructor(res) {
    this.app = new $container();
    this.app.scale.y = RADIO;
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
    const { p0_bg, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p0_7, p0_8 } = this.res;
    this.elements = {
      bg: Sprite(p0_bg),
      l1: Sprite(p0_1),
      l2: Sprite(p0_2),
      l3: Sprite(p0_3),
      l4: Sprite(p0_4),
      l5: Sprite(p0_5),
      l6: Sprite(p0_6),
      l7: Sprite(p0_7),
      l8: Sprite(p0_8),
      tm: $loadingSprite(textmack),
      t: $loadingSprite(tImg)
    };
    const { bg, l1, l2, l3, l4, l5, l6, l7, l8, t, tm } = this.elements;

    bg.width = 480;
    bg.height = 854;

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

    l8.x = 71;
    l8.y = 53;

    t.x = 50;
    t.y = 300;

    tm.x = 28;
    tm.y = 255;
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
      const { l1, l2, l3, l4, l5, l6, l7, l8, tm, t } = this.elements;
      APP.stage.addChild(this.app);
      TweenMax.to(l1, 0.5, { alpha: 0.1, repeat: -1 });
      TweenMax.to(l2, 0.5, { alpha: 0.1, repeat: -1, delay: 0.1 });
      TweenMax.to(l3, 0.5, { alpha: 0.1, repeat: -1, delay: 0.2 });
      TweenMax.to(l4, 0.5, { alpha: 0.1, repeat: -1, delay: 0.3 });
      TweenMax.to(l5, 0.5, { alpha: 0.1, repeat: -1, delay: 0.4 });
      TweenMax.to(l6, 0.5, { alpha: 0.1, repeat: -1 });
      TweenMax.to(l7, 0.5, { alpha: 0.1, repeat: -1, delay: 0.5 });
      TweenMax.to(l8, 0.5, { alpha: 0.1, repeat: -1, delay: 0.6 });

      TweenMax.from(tm, 0.5, { alpha: 0, delay: 1.5 });
      TweenMax.from(t, 0.5, { alpha: 0, x: -100, delay: 1.7 });

      TweenMax.fromTo(this.app, 0.8, {
          alpha: 0
        },
        {
          alpha: 1,
          ease: Power1.easeIn
        });
      star(this.app);

      this.render();
      const con = circleNext(196, 623, this.app);
      con.interactive = true;
      con.on('tap', function (e) {
        self.next(r, this);
      });
      say.play('p0');
    });
  }

  next(r, self) {
    console.log('p0 next');
    waterAction(r, self, this.app);
  }

  render() {

  }
}
