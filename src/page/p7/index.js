import { $container, $loaders, $loadingSprite } from '../../utils/pixi';
import { allLoading, Sprite } from '../../utils';
import kb1 from '@static/p7/kb1.png';
import kb2 from '@static/p7/kb2.png';
import kbg from '@static/p7/kbg.png';

import fileUpUtil from '../../utils/fileUpUtil';
import ajaxUtil from '../../utils/ajaxUtil';

export default class P7 {
  constructor(res) {
    this.app = new $container();
    this.elements = {};
    this.kbImgs = [new $loadingSprite(kb1), new $loadingSprite(kb2)];
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
    const { p7_b1, p7_b2, p7_b3, p7_text } = this.res;
    this.elements = {
      b1: Sprite(p7_b1),
      b2: Sprite(p7_b2),
      text: Sprite(p7_text),
      kbg: new $loadingSprite(kbg),
      picbg: new $container()
    };
    const { b1, b2, b3, text, picbg } = this.elements;

    document.getElementsByTagName('canvas')[0].style.background = 'linear-gradient(#b71d1e 80%,  #fddccd 100%)';

    b1.x = 43;
    b1.y = 427;

    b2.x = 244;
    b2.y = 427;

    text.x = 121;
    text.y = 630;

    picbg.width = 480;
    picbg.height = 400;
  }

  mount() {
    Object.values(this.elements).map((element) => {
      this.app.addChild(element);
    });
    var style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',// gradient
      stroke: '#fad178',
      fill: ['#c74840', '#fad178'],
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

    this.elements.richText.x = 100;
    this.elements.richText.y = 530;

    this.elements.b3 = Sprite(this.res.p7_b3);
    this.elements.b3.x = 149;
    this.elements.b3.y = 517;

  }

  action() {
    const self = this;
    return () => new Promise((r, j) => {
      const fileUp = document.getElementById('fileUp');
      fileUp.style.display = 'block';
      fileUp.style.top = ((APP_HEIGHT - 854) / 2 + 430) + 'px';
      fileUp.onchange = () => {
        allLoading.show();
        if (fileUp.value !== '') {
          fileUpUtil(document.getElementById('formFile'), (e) => {
            console.log(e);
          }, (resp) => {
            self.fileName = JSON.parse(resp).url;
            const loader = new $loaders();
            loader.add('f', 'http://games.simamedia.cn' + self.fileName);
            loader.load((loader, resources) => {
              allLoading.hide();
              const im = new Sprite(resources.f);
              im.width = 480;
              im.height = 380;
              self.app.removeChild(self.elements.richText);
              self.app.addChild(self.elements.b3);
              self.elements.b3.interactive = true;
              self.elements.picbg.addChild(im);
            });
          });
        }
      };

      const { b2, b3 } = self.elements;
      b2.interactive = true;
      let i = 0;
      self.app.addChild(self.kbImgs[0]);
      b2.on('tap', () => {
        self.app.removeChild(self.kbImgs[i]);
        i++;
        console.log(i);
        if (i > self.kbImgs.length - 1) {
          i = 0;
        }
        console.log(i);
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
          const fini = document.getElementById('fini');
          fini.src = 'http://games.simamedia.cn/upload/gy/newpic/z.jpg?ra=' + Math.random();
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
