import { $container, $spine } from '../../utils/pixi';
import { Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';

export default class P5 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
    this.init();
  }

  init() {
    l('P5 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    const { p5_bg, p5_t1, p5_t2 } = this.res;
    this.elements = {
      bg: Sprite(p5_bg),
      t1: Sprite(p5_t1),
      t2: Sprite(p5_t2)
    };
    const { bg, t1, t2 } = this.elements;
    bg.y = 90;

    t1.x = 62;
    t1.y = 22;

    t2.x = 194;
    t2.y = 71;

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
      TweenMax.from(t1, 1, { alpha: 0, x: -300 });
      TweenMax.from(t2, 1, { alpha: 0, x: 600, delay: 0.5 });
      const con = circleNext(345, 235, this.app);
      con.interactive = true;
      con.on('tap', function () {
        self.next(r, this);
      });
      say.play('p5')
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
