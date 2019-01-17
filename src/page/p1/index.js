import { $container, $tweenManager, $easing, $spine, $displacementFilter, $rope, $point } from '../../utils/pixi';
import { Sprite } from '../../utils';
import starAction from '../common/starAction';
import displacement from '../common/displacement';

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
    const { p1_bg, p1_flower, p1_glass, p1_bless, p1_women, p1_man, p1_displacement } = this.res;
    this.elements = {
      bg: Sprite(p1_bg),
      man: Sprite(p1_man),
      women: new $spine(p1_women.spineData),
      glass: Sprite(p1_glass),
      flower: Sprite(p1_flower),
      bless: Sprite(p1_bless),
      displacement: Sprite(p1_displacement),
    };
    const { women, man, bless } = this.elements;

    women.skeleton.setToSetupPose();
    women.update(0);
    women.autoUpdate = false;
    women.x = 250;
    women.y = 420;

    bless.x = 200;
    bless.y = 26;
    bless.zOrder = 100;

    man.x = 34;
    man.y = 135;

  }

  // manAction() {
  //   const { displacement, glass } = this.elements;
  //   displacement.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  //   const displacementFilter = new $displacementFilter(displacement);
  //   displacementFilter.padding = 10;
  //   displacement.position = glass.position;
  //   glass.filters = [displacementFilter];
  //   displacementFilter.scale.x = 2;
  //   displacementFilter.scale.y = 2;
  // }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
  }

  action() {
    return new Promise((r, j) => {
      console.log('p1 action');
      APP.stage.addChild(this.app);
      const { women, bless } = this.elements;
      women.state.setAnimation(0, 'hand', true);

      this.render();
      starAction(this.app);

      // this.manAction();

      bless.interactive = true;
      bless.on('tap', () => this.next(r));
    });
  }

  next(r) {
    console.log('p1 next');
    APP.stage.removeChild(this.app);
    r(1);
  }

  render() {
    const { women, displacement } = this.elements;
    APP.ticker.add(function (delta) {
      women.update(0.01666666666667);
      displacement.x+=20;
      if (displacement.x > displacement.width) {
        displacement.x = 0;
      }
    });
  }
}
