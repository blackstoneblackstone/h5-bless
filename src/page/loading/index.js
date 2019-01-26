import { $container, $graphics, $loader, $loadingSprite } from '../../utils/pixi';
import loadingimg from '@static/common/loadingimg.png';
import pageSound from '@static/music/bg.mp3';

import p0_bg from '@static/p0/bg.jpg';
import p0_1 from '@static/p0/1.png';
import p0_2 from '@static/p0/2.png';
import p0_3 from '@static/p0/3.png';
import p0_4 from '@static/p0/4.png';
import p0_5 from '@static/p0/5.png';
import p0_6 from '@static/p0/6.png';
import p0_7 from '@static/p0/7.png';
import p0_8 from '@static/p0/8.png';

import p1_bg from '@static/p1/bg.jpg';
import p1_glass from '@static/p1/glass.png';
import p1_bless from '@static/p1/bless.png';
import p1_women from '@static/p1/women.json';
import '@static/p1/women.atlas';
import '@static/p1/women.png';

import p2_bg from '@static/p2/bg.jpg';
import p2_bless from '@static/p2/bless.png';
import p2_boy from '@static/p2/boy.png';
import p2_t1 from '@static/p2/t1.png';
import p2_t2 from '@static/p2/t2.png';

import p3_bg from '@static/p3/bg.jpg';





export default class Loading {

  constructor() {
    this.app = new $container();
  }

  start() {
    const loadingImg = $loadingSprite(loadingimg);
    this.app.addChild(loadingImg);
    loadingImg.x = 122;
    loadingImg.y = 190;

    var graphics = new $graphics();
    graphics.lineStyle(1, 0xF25142, 1);
    graphics.beginFill(0xFFFFFF, 1);
    graphics.drawRoundedRect(120, 432, 245, 20, 5);
    graphics.endFill();

    var graphicsZoom = new PIXI.Graphics();
    graphicsZoom.beginFill(0xE7B552, 1);
    graphicsZoom.drawRoundedRect(120, 432, 20, 20, 5);
    graphicsZoom.endFill();

    this.app.addChild(graphics);
    this.app.addChild(graphicsZoom);

    APP.stage.addChild(this.app);

    l('loading start.....');
    return new Promise((resolve, reject) => {
      const loader = $loader

        .add('pageSound', pageSound)

        .add('p0_bg', p0_bg)
        .add('p0_1', p0_1)
        .add('p0_2', p0_2)
        .add('p0_3', p0_3)
        .add('p0_4', p0_4)
        .add('p0_5', p0_5)
        .add('p0_6', p0_6)
        .add('p0_7', p0_7)
        .add('p0_8', p0_8)

        .add('p1_bg', p1_bg)
        .add('p1_glass', p1_glass)
        .add('p1_bless', p1_bless)
        .add('p1_women', p1_women)

        .add('p2_bg', p2_bg)
        .add('p2_bless', p2_bless)
        .add('p2_boy', p2_boy)
        .add('p2_t1', p2_t1)
        .add('p2_t2', p2_t2)

        .add('p3_bg', p3_bg)

        .load((loader, res) => {
          let next = false;

          this.app.position.x = 240;
          this.app.pivot.x = 240;
          this.app.position.y = 300;
          this.app.pivot.y = 300;

          TweenMax.to(this.app.scale, 0.2,
            {
              x: 0,
              y: 0
            });
          TweenMax.to(this.app, 1,
            {
              alpha: 0,
              onComplete: () => {
                APP.stage.removeChild(this.app);
              },
              onUpdate: () => {
                if (!next && this.app.alpha < 0.4) {
                  resolve({ loader, res });
                  next = true;
                }
              }
            });
        });
      loader.onProgress.add((pro) => {
        if (243 * Math.ceil(pro.progress) / 100 > 20) {
          graphicsZoom.beginFill(0xE7B552, 1);
          graphicsZoom.drawRoundedRect(120, 432, 245 * Math.ceil(pro.progress) / 100, 20, 10);
          graphicsZoom.endFill();
        }
      });
    });
  }

}
