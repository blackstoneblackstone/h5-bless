import { $container, $spine } from '../../utils/pixi';
import { Sprite } from '../../utils';
import { fly } from '../common/starAction';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';

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
    const { p2_bg, p2_bless, p2_boy } = this.res;
    this.elements = {
      bg: Sprite(p2_bg),
      bless: Sprite(p2_bless),
      boy: Sprite(p2_boy)
    };
    const { bless, boy } = this.elements;

    bless.x = 244;
    bless.y = 65;

    boy.x = 168;
    boy.y = 495;
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
      const { bless } = this.elements;
      bless.interactive = true;
      circleNext(bless.x + bless.width / 2, bless.y + bless.height / 2, this.app);

      bless.on('tap', function () {
        self.next(r, this);
      });
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
