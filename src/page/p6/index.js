import { $container } from '../../utils/pixi';
import { Sprite } from '../../utils';
import dialog from '../common/dialog';
import circleNext from '../common/cricleNext';
import waterAction from '../common/waterAction';
import say from '../common/say';

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
    const { p6_bg, p6_t1, p6_t2, p6_light, p6_mama, p6_pao } = this.res;
    this.elements = {
      bg: Sprite(p6_bg),
      t1: Sprite(p6_t1),
      t2: Sprite(p6_t2),
      light: Sprite(p6_light),
      mama: Sprite(p6_mama),
      pao: Sprite(p6_pao)
    };
    const { bg, t1, t2, light, mama, pao } = this.elements;

    bg.x = 13;
    bg.y = 112;

    t1.x = 27;
    t1.y = 17;

    t2.x = 70;
    t2.y = 60;

    light.x = 24;
    light.y = 103;

    mama.x = 209;
    mama.y = 467;

    pao.anchor.set(1, 1);
    pao.x = 190 + 156;
    pao.y = 410 + 111;
    pao.scale.x = 0;
    pao.scale.y = 0;
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
      const { t1, t2, mama, pao } = this.elements;
      TweenMax.from(t1, 1, { alpha: 0, x: -300 });
      TweenMax.from(t2, 1, { alpha: 0, x: 600, delay: 0.5 });
      TweenMax.from(mama, 1, {
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
      const con = circleNext(185, 220, this.app);
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

  }
}
