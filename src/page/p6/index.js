import { $animatedSprite, $container, $loadingImg, $loadingSprite } from '../../utils/pixi';
import { Sprite } from '../../utils';
import dialog from '../common/dialog';
import circleNext from '../common/cricleNext';
import waterAction from '../common/waterAction';
import say from '../common/say';

import p6_bg from '@static/p6/bg.jpg';
import p6_bless from '@static/p6/bless.png';
import p6_boy from '@static/p6/boy.png';
import p6_desk from '@static/p6/desk.png';
import p6_dog from '@static/p6/dog.png';
import p6_fish from '@static/p6/fish.png';
import p6_hand from '@static/p6/hand.png';
import p6_hua from '@static/p6/hua.png';
import p6_hua1 from '@static/p6/hua1.png';
import p6_light from '@static/p6/light.png';
import p6_mama from '@static/p6/mama.png';
import p6_yeye from '@static/p6/yeye.png';
import p6_pao from '@static/p6/pao.png';
import p6_t1 from '@static/p6/t1.png';
import p6_t2 from '@static/p6/t2.png';

export default class P6 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
  }

  init() {
    l('P6 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    this.elements = {
      bg: $loadingSprite(p6_bg),
      light: $loadingSprite(p6_light),
      mama: $loadingSprite(p6_mama),
      yeye: $loadingSprite(p6_yeye),
      desk: $loadingSprite(p6_desk),
      boy: $loadingSprite(p6_boy),
      dog: $loadingSprite(p6_dog),
      fish: $loadingSprite(p6_fish),
      bless: $loadingSprite(p6_bless),
      hand: $loadingSprite(p6_hand),
      pao: $loadingSprite(p6_pao),
      t1: $loadingSprite(p6_t1),
      t2: $loadingSprite(p6_t2)
    };
    const { bless, boy, desk, dog, fish, hand, hua, hua1, light, mama, yeye, pao, t1, t2 } = this.elements;

    bless.x = 150;
    bless.y = 121;

    fish.x = 203;
    fish.y = 470;

    boy.x = -5;
    boy.y = 626;

    desk.anchor.set(0.5);
    desk.x = 240;
    desk.y = 690;

    dog.x = 201;
    dog.y = 767;

    light.x = -5;
    light.y = -9;

    mama.x = 4;
    mama.y = 287;

    yeye.x = 208;
    yeye.y = 317;

    pao.anchor.set(1, 1);
    pao.x = 190 + 156;
    pao.y = 410 + 111;
    pao.scale.x = 0;
    pao.scale.y = 0;

    hand.anchor.set(0.1, 0.7);
    hand.x = 305;
    hand.y = 530;

    t1.x = 80;
    t1.y = 94;

    t2.x = 118;
    t2.y = 80;
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
      const { pao } = this.elements;
      pao.interactive = true;
      let flag = true;
      let time = undefined;
      pao.on('tap', function () {
        if (flag) {
          dialog.show();
        }
        flag = false;
        if (!time) {
          time = setTimeout(() => {
            flag = true;
            clearTimeout(time);
            time = undefined;
          }, 1500);
        }
      });
      const con = circleNext(210, 190, this.app);
      con.interactive = true;
      con.on('tap', function () {
        self.next(r, this);
      });
      say.play('p6');
    });
  }

  next(r, self) {
    console.log('p6 next');
    waterAction(r, self, this.app);
  }

  render() {
    const { bless, boy, desk, dog, fish, hand, light, mama, yeye, pao, t1, t2 } = this.elements;

    // const explosionTextures = [$loadingSprite(p6_hua), $loadingSprite(p6_hua1)];
    // const con = new $animatedSprite(explosionTextures);
    // con.x = 410;
    // con.y = 20;
    // con.animationSpeed = 300;
    // con.play();
    //
    // this.app.addChild(con);

    TweenMax.from(boy, 1, { alpha: 0, x: -300 });
    TweenMax.from(dog, 1, { alpha: 0, x: 600, delay: 0.1 });
    TweenMax.from(desk.scale, 0.5, { x: 0, y: 0, delay: 0.2 });
    TweenMax.from(light, 1, { alpha: 0, x: 600, delay: 0.3 });
    TweenMax.from(mama, 1, { alpha: 0, x: -600, delay: 0.4 });
    TweenMax.from(yeye, 1, { alpha: 0, x: 600, delay: 0.5 });
    TweenMax.from(bless, 1, { alpha: 0, x: -600, delay: 0.6 });
    TweenMax.from(hand, 1, { alpha: 0, x: -600, delay: 0.7 });
    TweenMax.from(t1, 1, { alpha: 0, x: -600, delay: 0.8 });
    TweenMax.from(t2, 1, { alpha: 0, x: 600, delay: 0.9 });

    TweenMax.to(hand, 1, { rotation: -0.5, delay: 1, repeat: -1, yoyo: true });

    TweenMax.from(fish, 1, {
      alpha: 0, x: 600, delay: 0.5, onComplete: () => {
        TweenMax.to(pao.scale, 0.3, {
          x: 1, y: 1, ease: Power1.easeOut, onComplete: () => {
            TweenMax.from(pao, 0.8, {
              alpha: 0.2, repeat: -1, yoyo: true
            });
          }
        });
      }
    });
  }
}
