import { $container, $spine } from '../../utils/pixi';
import { Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';

export default class p3 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
    this.init();
  }

  init() {
    l('p3 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    const { p3_bg, p3_t1, p3_t2, p3_open } = this.res;
    this.elements = {
      bg: Sprite(p3_bg),
      t1: Sprite(p3_t1),
      t2: Sprite(p3_t2),
      open: Sprite(p3_open)
    };
    const { bg, open, t1, t2 } = this.elements;

    t1.x = 15;
    t1.y = 15;

    t2.x = 100;
    t2.y = 48;

    bg.y = 38;

    open.x = 256;
    open.y = 443;

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
      const cn = circleNext(400, 230, this.app);
      cn.interactive = true;
      cn.on('tap', function () {
        self.next(r, this);
      });
      say.play('p3')
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
