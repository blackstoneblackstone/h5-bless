import { $container } from '../../utils/pixi';
import { Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';
// 拜年
export default class P4 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
    this.init();
  }

  init() {
    l('P4 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    const { p4_bg, p4_l1, p4_people, p4_t1, p4_t2 } = this.res;
    this.elements = {
      bg: Sprite(p4_bg),
      l1: Sprite(p4_l1),
      l2: Sprite(p4_l1),
      people: Sprite(p4_people),
      t1: Sprite(p4_t1),
      t2: Sprite(p4_t2)
    };
    const { bg, l1, l2, people, t1, t2 } = this.elements;

    bg.y = 65;

    l1.x = 40;
    l1.y = 115;
    l1.anchor.set(0.5, 0);

    l2.x = 430;
    l2.y = 115;
    l2.anchor.set(0.5, 0);

    people.x = 287;
    people.y = 235;

    t1.x = 20;
    t1.y = 17;

    t2.x = 150;
    t2.y = 60;

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
      const { t1, t2, people, l1, l2 } = this.elements;
      TweenMax.from(t1, 1, { alpha: 0, x: -300 });
      TweenMax.from(t2, 1, { alpha: 0, y: -300, delay: 0.5 });
      TweenMax.from(people, 1, { alpha: 0, x: 600 });
      TweenMax.fromTo(l1, 3.5, { rotation: -0.5 }, { rotation: 0.5, repeat: -1, yoyo: true, ease: Power1.easeInOut });
      TweenMax.fromTo(l2, 3, { rotation: 0.5 }, { rotation: -0.5, repeat: -1, yoyo: true, ease: Power1.easeInOut });
      const con = circleNext(95, 220, this.app);
      con.interactive = true;
      con.on('tap', function () {
        self.next(r, this);
      });
      say.play('p4')
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
