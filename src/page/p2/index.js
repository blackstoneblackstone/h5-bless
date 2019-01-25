import { $container, $loadingSprite } from '../../utils/pixi';
import { address, Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';
import textmack from '@static/common/textmack.png';
import dImg from '@static/p2/d.png';

export default class P2 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
  }

  init() {
    l('p2 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

// .add("p2_bg", p2_bg)
// .add("p2_bless", p2_bless)
// .add("p2_grandpa", p2_grandpa)
// .add("p2_tie", p2_tie)
// .add("p2_boy", p2_boy)
// .add("p2_desk", p2_desk)
// .add("p2_girl", p2_girl)
  initEl() {
    const { p2_bg, p2_boy, p2_t1, p2_t2 } = this.res;
    this.elements = {
      bg: Sprite(p2_bg),
      boy: Sprite(p2_boy),
      t1: Sprite(p2_t1),
      t2: Sprite(p2_t2),
      tm: $loadingSprite(textmack)
    };
    const { bg, boy, t1, t2, tm } = this.elements;

    bg.scale.y = RADIO;

    boy.x = 186;
    boy.y = APP_HEIGHT - 360;

    t1.x = 361;
    t1.y = 178;

    t2.x = 400;
    t2.y = 211;

    tm.x = 340;
    tm.y = 130;
    tm.width = 110;
    tm.alpha = 0.4;
    tm.height = 380;

  }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
  }

  action() {
    const self = this;
    return () => new Promise((r, j) => {
      this.init();
      APP.stage.addChild(this.app);
      this.render();
      const { t1, t2, tm, boy } = this.elements;
      TweenMax.from(t1, 1, { alpha: 0, y: -300 });
      TweenMax.from(t2, 1, { alpha: 0, x: 600, delay: 0.5 });
      TweenMax.from(tm, 1, { alpha: 0, delay: 0.6 });
      TweenMax.from(boy, 1, { alpha: 0, y: 1000, delay: 0.3 });

      const nextBtn = circleNext(280, 130, this.app);
      nextBtn.interactive = true;
      nextBtn.on('tap', function () {
        self.next(r, this);
      });
      say.play('p2');
    });
  }

  next(r, self) {
    console.log('p0 next');
    waterAction(r, self, this.app);
  }

  render() {
    address(dImg, this.app);
  }
}
