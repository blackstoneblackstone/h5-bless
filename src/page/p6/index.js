import { $container, $tweenManager, $easing, $spine } from '../../utils/pixi';
import { Graphics, Sprite } from '../../utils';
import dialog from '../common/dialog';
import waterAction from '../common/waterAction';

export default class P6 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
    this.init();
  }

  init() {
    l('P6 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    const { p6_bg, p6_bless, p6_boy, p6_desk, p6_dog, p6_fish, p6_hand, p6_hua, p6_hua1, p6_light, p6_mama, p6_yeye } = this.res;
    this.elements = {
      bg: Sprite(p6_bg),
      han: Sprite(p6_hand),
      hua: Sprite(p6_hua),
      hua1: Sprite(p6_hua1),
      light: Sprite(p6_light),
      mama: Sprite(p6_mama),
      yeye: Sprite(p6_yeye),
      desk: Sprite(p6_desk),
      boy: Sprite(p6_boy),
      dog: Sprite(p6_dog),
      fish: Sprite(p6_fish),
      bless: Sprite(p6_bless)
    };
    const { bg, bless, boy, desk, dog, fish, hand, hua, hua1, light, mama, yeye } = this.elements;

    bless.x = 150;
    bless.y = 121;

    fish.x = 203;
    fish.y = 470;

    boy.x = -5;
    boy.y = 626;

    desk.x = 0;
    desk.y = 516;

    dog.x = 201;
    dog.y = 767;

    light.x = -5;
    light.y = -9;

    mama.x = 4;
    mama.y = 287;

    yeye.x = 208;
    yeye.y = 317;

  }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
  }

  action() {
    return () => new Promise((r, j) => {
      console.log('p6 action');
      APP.stage.addChild(this.app);
      this.render();
      waterAction(this.elements.yeye);
      const { bless } = this.elements;
      bless.interactive = true;
      bless.on('tap', () => this.next(r));
    });
  }

  next(r) {
    dialog.show();

    // APP.stage.removeChild(this.app)
    // r()
  }

  render() {

    APP.ticker.add(function (delta) {

    });
  }
}
