import { $container, $spine, $loadingSprite } from '../../utils/pixi';
import { address, Sprite } from '../../utils';
import { star } from '../common/starAction';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';
import imgT1 from '@static/p1/t1.png';
import imgT2 from '@static/p1/t2.png';
import dImg from '@static/p1/d.png';
import textmack from '@static/common/textmack.png';

// 大扫除
export default class P1 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
    this.init();
  }

  init() {
    l('p1 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    const { p1_bg, p1_glass, p1_women } = this.res;
    this.elements = {
      bg: Sprite(p1_bg),
      women: new $spine(p1_women.spineData),
      glass: Sprite(p1_glass),
      tm: $loadingSprite(textmack),
      t1: $loadingSprite(imgT1),
      t2: $loadingSprite(imgT2)
    };
    const { women, glass, t1, t2, tm } = this.elements;

    this.app.scale.y = RADIO;

    women.skeleton.setToSetupPose();
    women.update(0);
    women.autoUpdate = false;
    women.x = 254;
    women.y = 420;

    glass.width = 480;
    glass.height = 854;

    t1.x = 120;
    t1.y = 317;

    t2.x = 85;
    t2.y = 325;

    tm.x = 64;
    tm.y = 260;
    tm.width = 100;
    tm.height = 400;
    tm.alpha = 0.8;
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
      star(this.app);
      TweenMax.from(this.app, 1, { alpha: 0 });

      const { women, t1, t2, tm } = this.elements;
      women.state.setAnimation(0, 'hand', true);
      this.render();
      TweenMax.from(t1, 1, { alpha: 0, x: -300, delay: 0.5 });
      TweenMax.from(t2, 1, { alpha: 0, x: -300, delay: 0.8 });

      TweenMax.from(tm, 1, { alpha: 0, delay: 0.6 });

      const con = circleNext(220, 115, this.app);
      con.interactive = true;
      con.on('tap', function () {
        self.next(r, this);
      });
      say.play('p1');
    });
  }

  next(r, self) {
    console.log('p1 next');
    waterAction(r, self, this.app);
  }

  render() {
    address(dImg, this.app);
    const { women } = this.elements;
    APP.ticker.add(function (delta) {
      women.update(0.01666666666667);
    });
  }
}
