import { $container, $loadingSprite } from '../../utils/pixi';
import waterAction from '../common/waterAction';
import circleNext from '../common/cricleNext';
import say from '../common/say';
import p5_bg from '@static/p5/bg.jpg';
import p5_bless from '@static/p5/bless.png';
import p5_lantern from '@static/p5/lantern.png';
import p5_little_girl from '@static/p5/little_girl.png';
import p5_red_girl from '@static/p5/red_girl.png';
import p5_uncle from '@static/p5/uncle.png';
import tImg from '@static/p5/t.png';
import { address } from '../../utils';
import dImg1 from '@static/p5/d1.png';
import dImg2 from '@static/p5/d2.png';
import dImg3 from '@static/p5/d3.png';
import dImg4 from '@static/p5/d4.png';

export default class P5 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.res = res;
  }

  init() {
    l('P5 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    this.elements = {
      bg: $loadingSprite(p5_bg),
      lantern: $loadingSprite(p5_lantern),
      redGirl: $loadingSprite(p5_red_girl),
      uncle: $loadingSprite(p5_uncle),
      littleGirl: $loadingSprite(p5_little_girl),
      bless: $loadingSprite(p5_bless),
      t: $loadingSprite(tImg)
    };
    const { littleGirl, redGirl, uncle, bless, t } = this.elements;

    uncle.x = 49;
    uncle.y = 307;

    littleGirl.x = 0;
    littleGirl.y = 596;

    redGirl.x = 0;
    redGirl.y = 50;

    bless.x = 320;
    bless.y = 120;

    t.x = 20;
    t.y = 430;
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
      // const { t1, t2 } = this.elements;
      // TweenMax.from(t1, 1, { alpha: 0, x: -300 });
      // TweenMax.from(t2, 1, { alpha: 0, x: 600, delay: 0.5 });
      const con = circleNext(360, 140, this.app);
      con.interactive = true;
      con.on('tap', function () {
        self.next(r, this);
      });
      say.play('p5');
    });
  }

  next(r, self) {
    console.log('p0 next');
    waterAction(r, self, this.app);
  }

  render() {
    const { littleGirl, redGirl, uncle, lantern, bless, t } = this.elements;

    TweenMax.from(littleGirl, 1, { alpha: 0, y: 1000 });
    TweenMax.from(lantern.scale, 1, { x: 10, y: 10 });
    TweenMax.from(redGirl, 1, { alpha: 0, x: -600, delay: 0.5 });
    TweenMax.from(uncle, 1, { alpha: 0, x: 600, delay: 1 });
    TweenMax.from(bless.scale, 1, { x: 0, y: 0, delay: 1.2 });
    TweenMax.from(t, 1, { x: -100, delay: 1 });

    address(dImg1, this.app);
    address(dImg2, this.app, 70);
    address(dImg3, this.app, 140);
    address(dImg4, this.app, 210);
  }
}
