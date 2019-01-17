import { $container, $graphics, $loader, $loadingSprite } from '../../utils/pixi';
import loadingimg from '@static/common/loadingimg.png';

import p0_bg from '@static/p0/bg.jpg';
import p0_1 from '@static/p0/1.png';
import p0_2 from '@static/p0/2.png';
import p0_3 from '@static/p0/3.png';
import p0_4 from '@static/p0/4.png';
import p0_5 from '@static/p0/5.png';
import p0_6 from '@static/p0/6.png';
import p0_7 from '@static/p0/7.png';
import p0_8 from '@static/p0/8.png';
import p0_bless from '@static/p0/bless.png';
import crystalizeImg from '@static/common/crystalize.jpg';

import p1_bg from '@static/p1/background.jpg';
import p1_glass from '@static/p1/glass.png';
import p1_bless from '@static/p1/bless.png';
import p1_displacement from '@static/common/crystalize.jpg';
import p1_women from '@static/p1/women.json';
import '@static/p1/women.atlas';
import '@static/p1/women.png';

import p2_bg from '@static/p2/background.jpg';
import p2_bless from '@static/p2/bless.png';
import p2_boy from '@static/p2/boy.png';

import p3_lovers from '@static/p3/lovers.png';
import p3_bg from '@static/p3/bg.png';
import p3_old_man from '@static/p3/oldman.png';
import p3_boy from '@static/p3/boy.png';
import p3_girl from '@static/p3/girl.png';
import p3_banger from '@static/p3/banger.png';
import p3_dog from '@static/p3/dog.png';
import p3_bless from '@static/p3/bless.png';

import p4_bg from '@static/p4/bg.png';
import p4_bless from '@static/p4/bless.png';
import p4_baby from '@static/p4/baby.png';
import p4_children from '@static/p4/children.png';
import p4_desk from '@static/p4/desk.png';
import p4_gradman from '@static/p4/gradman.png';
import p4_hi from '@static/p4/hi.png';
import p4_house from '@static/p4/house.png';
import p4_light from '@static/p4/light.png';
import p4_photo from '@static/p4/photo.png';
import p4_wall from '@static/p4/wall.png';

import p5_bg from '@static/p5/bg.png';
import p5_bless from '@static/p5/bless.png';
import p5_lantern from '@static/p5/lantern.png';
import p5_little_girl from '@static/p5/little_girl.png';
import p5_red_girl from '@static/p5/red_girl.png';
import p5_uncle from '@static/p5/uncle.png';

import p6_bg from '@static/p6/bg.png';
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

export default class Loading {

  constructor() {
    this.app = new $container();
  }

  start() {
    const loadingImg = $loadingSprite(loadingimg);
    this.app.addChild(loadingImg);
    loadingImg.x = 125;
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

        .add('crystalizeImg', crystalizeImg)

        .add('p0_bg', p0_bg)
        .add('p0_bless', p0_bless)
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
        .add('p1_displacement', p1_displacement)

        .add('p2_bg', p2_bg)
        .add('p2_bless', p2_bless)
        .add('p2_boy', p2_boy)

        .add('p3_bg', p3_bg)
        .add('p3_lovers', p3_lovers)
        .add('p3_old_man', p3_old_man)
        .add('p3_boy', p3_boy)
        .add('p3_girl', p3_girl)
        .add('p3_banger', p3_banger)
        .add('p3_dog', p3_dog)
        .add('p3_bless', p3_bless)

        .add('p4_bg', p4_bg)
        .add('p4_bless', p4_bless)
        .add('p4_baby', p4_baby)
        .add('p4_desk', p4_desk)
        .add('p4_children', p4_children)
        .add('p4_grandpa', p4_gradman)
        .add('p4_hi', p4_hi)
        .add('p4_house', p4_house)
        .add('p4_light', p4_light)
        .add('p4_photo', p4_photo)
        .add('p4_wall', p4_wall)

        .add('p5_bg', p5_bg)
        .add('p5_bless', p5_bless)
        .add('p5_lantern', p5_lantern)
        .add('p5_little_girl', p5_little_girl)
        .add('p5_red_girl', p5_red_girl)
        .add('p5_uncle', p5_uncle)

        .add('p6_bg', p6_bg)
        .add('p6_bless', p6_bless)
        .add('p6_boy', p6_boy)
        .add('p6_desk', p6_desk)
        .add('p6_dog', p6_dog)
        .add('p6_fish', p6_fish)
        .add('p6_hand', p6_hand)
        .add('p6_hua', p6_hua)
        .add('p6_hua1', p6_hua1)
        .add('p6_light', p6_light)
        .add('p6_mama', p6_mama)
        .add('p6_yeye', p6_yeye)

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
