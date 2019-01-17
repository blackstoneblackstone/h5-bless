import { $container, $spine, $displacementFilter } from '../../utils/pixi';
import { Sprite } from '../../utils';
import { star } from '../common/starAction';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';

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
    const { p1_bg, p1_glass, p1_bless, p1_women } = this.res;
    this.elements = {
      bg: Sprite(p1_bg),
      women: new $spine(p1_women.spineData),
      glass: Sprite(p1_glass),
      bless: Sprite(p1_bless)
    };
    const { women, bless, glass } = this.elements;

    women.skeleton.setToSetupPose();
    women.update(0);
    women.autoUpdate = false;
    women.x = 250;
    women.y = 420;

    bless.x = 200;
    bless.y = 26;
    bless.zOrder = 100;

    glass.width = APP_WIDTH;
    glass.height = APP_HEIGHT;
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
      const { women, bless } = this.elements;
      women.state.setAnimation(0, 'hand', true);
      this.render();
      star(this.app);

      circleNext(bless.x + bless.width / 2, bless.y + bless.height / 2, this.app);
      bless.interactive = true;
      bless.on('tap', function () {
        self.next(r, this);
      });
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
