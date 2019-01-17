import { $container, $spine } from '../../utils/pixi';
import { Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';

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
    const { p3_bg, p3_lovers, p3_old_man, p3_girl, p3_dog, p3_banger, p3_boy, p3_bless } = this.res;
    this.elements = {
      bg: Sprite(p3_bg),
      lovers: Sprite(p3_lovers),
      oldMan: Sprite(p3_old_man),
      dog: Sprite(p3_dog),
      banger: Sprite(p3_banger),
      boy: Sprite(p3_boy),
      girl: Sprite(p3_girl),
      bless: Sprite(p3_bless)
    };
    const { lovers, oldMan, boy, banger, dog, girl, bless } = this.elements;

    lovers.x = 9;
    lovers.y = 200;

    oldMan.x = 224;
    oldMan.y = 169;

    boy.x = 5;
    boy.y = 301;

    banger.x = 262;
    banger.y = 403;

    dog.x = 177;
    dog.y = 470;

    girl.x = 0;
    girl.y = 517;

    bless.x = 401;
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
