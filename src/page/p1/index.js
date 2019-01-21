import { $container, $spine, $displacementFilter } from '../../utils/pixi';
import { Sprite } from '../../utils';
import { star } from '../common/starAction';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';

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
    const { p1_bg, p1_glass, p1_bless, p1_women, p1_t1, p1_t2 } = this.res;
    this.elements = {
      bg: Sprite(p1_bg),
      women: new $spine(p1_women.spineData),
      glass: Sprite(p1_glass),
      bless: Sprite(p1_bless),
      t1: Sprite(p1_t1),
      t2: Sprite(p1_t2)
    };
    const { bg, women, bless, glass, t1, t2 } = this.elements;

    bg.y = 77;
    bg.x = 0;
    bg.width = 480;
    bg.height = 758;

    women.skeleton.setToSetupPose();
    women.update(0);
    women.autoUpdate = false;
    women.x = 240;
    women.y = 410;
    women.scale.x = 0.9;
    women.scale.y = 0.9;

    bless.x = 200;
    bless.y = 150;
    bless.zOrder = 100;

    glass.y = 35;
    glass.width = 480;
    glass.height = 820;

    t1.x = 62;
    t1.y = 20;

    t2.x = 195;
    t2.y = 60;

  }

  manAction() {
    const { displacement, glass } = this.elements;
    displacement.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    const displacementFilter = new $displacementFilter(displacement);
    displacementFilter.padding = 10;
    displacement.position = glass.position;
    glass.filters = [displacementFilter];
    displacementFilter.scale.x = 30;
    displacementFilter.scale.y = 60;
  }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
  }

  action() {
    const self = this;
    return () => new Promise((r, j) => {
      console.log('p1 action');
      APP.stage.addChild(this.app);

      TweenMax.from(this.app, 1, { alpha: 0 });

      const { women, bless, t1, t2 } = this.elements;
      women.state.setAnimation(0, 'hand', true);
      this.render();
      TweenMax.from(t1, 1, { alpha: 0, x: -300, delay: 0.5 });
      TweenMax.from(t2, 1, { alpha: 0, x: -300, delay: 1 });
      circleNext(bless.x + bless.width / 2 - 10, bless.y + bless.height / 2, this.app);
      bless.interactive = true;
      bless.on('tap', function () {
        self.next(r, this);
      });
      say.play('p1')
    });
  }

  next(r, self) {
    console.log('p1 next');
    waterAction(r, self, this.app);
  }

  render() {
    const { women } = this.elements;
    APP.ticker.add(function (delta) {
      women.update(0.01666666666667);
    });
  }
}
