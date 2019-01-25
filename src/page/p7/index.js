import { $container, $graphics, $loaders, $loadingSprite } from '../../utils/pixi';
import { allLoading, Sprite } from '../../utils';
import kb1 from '@static/p7/kb1.png';
import kb2 from '@static/p7/kb2.png';
import kb3 from '@static/p7/kb3.png';
import kb4 from '@static/p7/kb4.png';
import kb5 from '@static/p7/kb5.png';

import kbgImg from '@static/p7/kbg.png';
import logoImg from '@static/p7/logo.png';
import p7_b1 from '@static/p7/up.png';
import p7_b2 from '@static/p7/change.png';
import p7_b3 from '@static/p7/get.png';
import p7_text from '@static/p7/text.png';

import fileUpUtil from '../../utils/fileUpUtil';
import ajaxUtil from '../../utils/ajaxUtil';

const fini = document.getElementById('fini');

export default class P7 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.kbImgs = [new $loadingSprite(kb1), new $loadingSprite(kb2), new $loadingSprite(kb3), new $loadingSprite(kb4), new $loadingSprite(kb5)];
    this.res = res;
    this.fileName = undefined;
    this.init();
  }

  init() {
    l('P7 start .....');
    this.initEl();
    this.mount();
    return this.app;
  }

  initEl() {
    this.elements = {
      kbg: $loadingSprite(kbgImg),
      picbg: new $container(),
      maskg: new $graphics(),
      b1: $loadingSprite(p7_b1),
      b2: $loadingSprite(p7_b2),
      text: $loadingSprite(p7_text),
      logo: $loadingSprite(logoImg)
    }
    ;
    const { b1, b2, text, picbg, logo, maskg } = this.elements;

    document.getElementsByTagName('canvas')[0].style.background = 'linear-gradient(#b71d1e 80%,  #fddccd 100%)';

    b1.x = 43;
    b1.y = 400;

    b2.x = 244;
    b2.y = 400;

    text.x = 140;
    text.y = 550;
    text.scale.x = 0.8;
    text.scale.y = 0.8;

    picbg.width = 480;
    picbg.height = 350;

    // bottomImg.anchor.set(0.5);
    // bottomImg.x = 240;
    // bottomImg.y = 830;

    maskg.beginFill(0xb71d1e, 1);
    maskg.drawRect(0, 396, 480, 854);
    maskg.endFill();

    logo.x = 40;
    logo.y = 670;

  }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
    var style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 30,
      fontWeight: 'bold',// gradient
      stroke: '#fad178',
      fill: ['#c74840', '#c74840'],
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440
    });

    this.elements.richText = new PIXI.Text('长按屏幕保存图片', style);

    this.elements.richText.x = 120;
    this.elements.richText.y = 480;

    this.elements.b3 = $loadingSprite(p7_b3);
    this.elements.b3.x = 149;
    this.elements.b3.y = 480;

  }

  action() {
    const self = this;
    return () => new Promise((r, j) => {
      this.init();
      const fileUp = document.getElementById('fileUp');
      fileUp.style.display = 'block';
      fileUp.onchange = () => {
        allLoading.show();
        if (fileUp.value !== '') {
          fileUpUtil(document.getElementById('formFile'), (e) => {
            console.log(e);
          }, (resp) => {
            self.fileName = JSON.parse(resp).url;
            const loader = new $loaders();
            loader.add('f', 'http://games.yondu.vip' + self.fileName);
            loader.load((loader, resources) => {
              allLoading.hide();
              const im = new Sprite(resources.f);
              const re = 480 / im.width;
              im.width = 480;
              im.height = re * im.height;
              self.app.removeChild(self.elements.richText);
              self.app.addChild(self.elements.b3);
              self.elements.b3.interactive = true;
              fini.style.display = 'none';
              self.elements.picbg.removeChildren();
              self.elements.picbg.addChild(im);
            });
          });
        }
      };

      const { b2, b3 } = self.elements;
      b2.interactive = true;
      let i = 0;
      self.app.addChild(self.kbImgs[0]);
      b2.on('touch', () => {
        TweenMax.to(b2, 1, { alpha: 0, x: 600, delay: 0.5 });
      });
      b2.on('tap', () => {

        self.app.removeChild(self.kbImgs[i]);
        i++;
        if (i > self.kbImgs.length - 1) {
          i = 0;
        }
        self.app.addChild(self.kbImgs[i]);
        // TweenMax.from(self.kbImgs[i], 0.5, {
        //   alpha: 0, onComplete: () => {
        //
        //   }
        // });
      });
      b3.on('tap', () => {
        allLoading.show();
        ajaxUtil.getPic(self.fileName, i + 1, (resp) => {
          const data = JSON.parse(resp);
          fini.src = 'http://games.simamedia.cn' + data.name.replace('oldpic', 'newpic') + '?ra=' + Math.random();
          fini.onload = () => {
            allLoading.hide();
            self.app.removeChild(b3);
            fini.style.display = 'block';
            fini.style.opacity = 0;
            self.app.addChild(this.elements.richText);
          };
        });
      });
      APP.stage.addChild(this.app);
    });
  }

  next(r) {}

  render() {}
}
