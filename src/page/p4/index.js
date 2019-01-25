import { $container, $loadingSprite } from '../../utils/pixi';
import { address, Sprite } from '../../utils';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';
import dImg from '@static/p4/d.png';
import p4_bg from '@static/p4/bg.jpg';
import p4_l1 from '@static/p4/l1.png';
import p4_people from '@static/p4/people.png';
import p4_t1 from '@static/p4/t1.png';
import p4_t2 from '@static/p4/t2.png';
import p4_child from '@static/p4/children.png';
// 拜年
export default class P4 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
  }

  init() {
    l('P4 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    this.elements = {
      bg: $loadingSprite(p4_bg),
      l1: $loadingSprite(p4_l1),
      l2: $loadingSprite(p4_l1),
      people: $loadingSprite(p4_people),
      child: $loadingSprite(p4_child),
      t1: $loadingSprite(p4_t1),
      t2: $loadingSprite(p4_t2)
    };
    const { l1, l2, people, t1, t2, child } = this.elements;

    l1.x = 20;
    l1.y = -20;
    l1.anchor.set(0.5, 0);

    l2.x = 460;
    l2.y = -20;
    l2.anchor.set(0.5, 0);

    people.x = 310;
    people.y = 128;

    t1.x = 250;
    t1.y = 190;

    t2.x = 280;
    t2.y = 240;

    this.app.scale.y = RADIO;

    child.x = 127;
    child.y = 605;
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
      const { t1, t2, people, l1, l2, child } = this.elements;
      TweenMax.from(t1, 1, { alpha: 0, x: -300 });
      TweenMax.from(t2, 1, { alpha: 0, y: -300, delay: 0.5 });
      TweenMax.from(people, 1, { alpha: 0, x: 600 });
      TweenMax.from(child, 1, { alpha: 0, y: 1000, delay: 0.5, ease: Power1.easeInOut });
      TweenMax.fromTo(l1, 3.5, { rotation: -0.5 }, { rotation: 0.5, repeat: -1, yoyo: true, ease: Power1.easeInOut });
      TweenMax.fromTo(l2, 3, { rotation: 0.5 }, { rotation: -0.5, repeat: -1, yoyo: true, ease: Power1.easeInOut });
      const con = circleNext(65, 100, this.app);
      con.interactive = true;
      con.on('tap', function () {
        self.next(r, this);
      });
      say.play('p4');
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
