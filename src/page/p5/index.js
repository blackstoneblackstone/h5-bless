import { $container, $spine } from '../../utils/pixi';
import { Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';

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
    const { p5_bg, p5_bless, p5_lantern, p5_little_girl, p5_red_girl, p5_uncle } = this.res;
    this.elements = {
      bg: Sprite(p5_bg),
      lantern: Sprite(p5_lantern),
      redGirl: Sprite(p5_red_girl),
      uncle: Sprite(p5_uncle),
      littleGirl: Sprite(p5_little_girl),
      bless: Sprite(p5_bless)
    };
    const { littleGirl, redGirl, uncle, bless } = this.elements;

    uncle.x = 49;
    uncle.y = 307;

    littleGirl.x = 0;
    littleGirl.y = 596;

    redGirl.x = 0;
    redGirl.y = 0;

    bless.x = 320;
    bless.y = 120;

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
      circleNext(bless.x + bless.width / 2, bless.y + bless.height / 2, this.app);
      bless.interactive = true;
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
