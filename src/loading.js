const media = {
  p1bg: './assets/img/p1/bg.jpg',
  p1_1: './assets/img/p1/1.png',
  p1_2: './assets/img/p1/2.png',
  p1_3: './assets/img/p1/3.png',
  p1_4: './assets/img/p1/4.png',
  p1_5: './assets/img/p1/5.png',
  p1_6: './assets/img/p1/6.png',
  p1_7: './assets/img/p1/7.png',
  p1_8: './assets/img/p1/8.png',
  p1_bless: './assets/img/p1/bless.png',
  bg: './assets/bg.png',
  pic1: './assets/pic1.png',
  fish1: './assets/displacement_fish1.png',
  fish2: './assets/displacement_fish2.png',
  fish3: './assets/displacement_fish3.png',
  fish4: './assets/displacement_fish4.png',
  sound0: './assets/sound/bgMusic.mp3',
  sound1: './assets/sound/s1.mp3',
  sound2: './assets/sound/s2.mp3'
};

export default class Loading {
  constructor(next) {
    GAME.preload({
      assets: media,
      loading: (e) => this.progress.call(this, e),
      loaded: () => this.destory(next)
    });

    this.el = new SINT.Container();
    this.loadingTxt = new SINT.TextClip(250, 430, '0%', {
      fontFamily: 'Arial',
      fontSize: 30,
      fontWeight: 'bold'
    });

    this.loadingTxt.anchor.set(0.5);

    const loadingImg = new SINT.Sprite.fromImage('./assets/img/loadingimg.png');
    loadingImg.x = 125;
    loadingImg.y = 150;
    const bound=new SINT.Bounds()
    // const rectangle = new PIXI.Graphics();
    // rectangle.beginFill(0); // Color it black
    // rectangle.drawRoundedRect(
    //   0,
    //   0,
    //   100, // Make it 100x100
    //   100,
    //   5 // Make the rounded corners have a radius of 5
    // );
    // rectangle.endFill();
    // this.el.addChild(rectangle);
    this.el.addChild(this.loadingTxt);
    this.el.addChild(loadingImg);
    GAME.add(this.el);
    GAME.add(bound)
  }

  progress(e) {
    this.loadingTxt.text = Math.floor(e.progress) + '%';
  }

  destory(next) {
    // GAME.remove(this.el);
    // next();
  }
}
