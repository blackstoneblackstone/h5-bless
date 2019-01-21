import { $container } from '../../utils/pixi';
import { Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';

export default class P2 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
    this.init();
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
      t2: Sprite(p2_t2)
    };
    const { boy, bg, t1, t2 } = this.elements;

    bg.y = 90;
    bg.width = 480;

    boy.x = 186;
    boy.y = 508;

    t1.x = 25;
    t1.y = 20;

    t2.x = 46;
    t2.y = 63;

  }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
  }

  action() {
    const self = this;
    return () => new Promise((r, j) => {
      APP.stage.addChild(this.app);
      this.render();
      const { t1, t2 } = this.elements;
      TweenMax.from(t1, 1, { alpha: 0, y: -300 });
      TweenMax.from(t2, 1, { alpha: 0, x: -300, delay: 0.5 });
      const nextBtn = circleNext(270, 210, this.app);
      nextBtn.interactive = true;
      nextBtn.on('tap', function () {
        self.next(r, this);
      });
      say.play('p2')
    });
  }

  next(r, self) {
    console.log('p0 next');
    waterAction(r, self, this.app);
  }

  render() {
    APP.ticker.add(function (delta) {

    });
  }
}
