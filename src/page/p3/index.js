import { $container, $loadingSprite } from '../../utils/pixi';
import { address, Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';
import t1Img from '@static/p3/t1.png';
import t2Img from '@static/p3/t2.png';
import p3_old_man from '@static/p3/oldman.png';
import p3_boy from '@static/p3/boy.png';
import p3_girl from '@static/p3/girl.png';
import p3_banger from '@static/p3/banger.png';
import p3_dog from '@static/p3/dog.png';
import p3_bless from '@static/p3/bless.png';
import p3_lovers from '@static/p3/lovers.png';
import dImg from '@static/p3/d.png';

export default class p3 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;

  }

  init() {
    l('p3 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    const { p3_bg } = this.res;
    this.elements = {
      bg: Sprite(p3_bg),
      lovers: $loadingSprite(p3_lovers),
      oldMan: $loadingSprite(p3_old_man),
      dog: $loadingSprite(p3_dog),
      banger: $loadingSprite(p3_banger),
      boy: $loadingSprite(p3_boy),
      girl: $loadingSprite(p3_girl),
      bless: $loadingSprite(p3_bless),
      t1: $loadingSprite(t1Img),
      t2: $loadingSprite(t2Img)
    };
    const { lovers, oldMan, boy, banger, dog, girl, bless, t1, t2 } = this.elements;

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

    t1.x = 220;
    t1.y = 20;

    t2.x = 170;
    t2.y = 50;

    this.app.scale.y = RADIO;

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
      const { lovers, oldMan, boy, banger, dog, girl, bless, t1, t2 } = this.elements;

      TweenMax.from(lovers, 1, { alpha: 0, x: -300, delay: 0.1 });
      TweenMax.from(oldMan, 1, { alpha: 0, x: 800, delay: 0.2 });
      TweenMax.from(boy, 1, { alpha: 0, x: -300, delay: 0.3 });
      TweenMax.from(banger, 1, { alpha: 0, x: 800, delay: 0.4 });
      TweenMax.from(dog, 1, { alpha: 0, x: -300, delay: 0.5 });
      TweenMax.from(girl, 1, { alpha: 0, x: 800, delay: 0.6 });
      TweenMax.from(bless, 1, { alpha: 0, x: -300, delay: 0.7 });

      TweenMax.from(t1, 1, { alpha: 0, x: -300 });
      TweenMax.from(t2, 1, { alpha: 0, x: 800, delay: 0.5 });
      const cn = circleNext(430, 150, this.app);
      cn.interactive = true;
      cn.on('tap', function () {
        self.next(r, this);
      });
      say.play('p3');
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
