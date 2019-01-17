// import * as SINT from 'sint.js'
import VConsole from 'vconsole';
import P1 from './p1';
import Loading from './loading';

const vConsole = new VConsole();

const config = {
  domElement: document.querySelector('#webglContainer'), // 画布容器
  initWidth: 480,
  initHeight: 854,
  showFPS: true,
  backgroundColor: 0xf25142
};

const assets2 = {
  icon1: './assets/icon1.png',
  pic2: './assets/pic2.png',
  fighter: './assets/fighter.json'
};

window.GAME = new SINT.Game(config);

new Loading(create);

function create() {
  // audio
  const s0 = SINT.Audios.add('sound0');
  s0.loop = true;
  SINT.Audios.add('sound1');

  const p1 = new P1();

  //Text
  const t = new SINT.TextClip(500, 200, 'Video', {
    fontFamily: 'Arial',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: '#ffffff'
  });
  GAME.add(t);
  t.interactive = true;
  t.on('pointerdown', initVideo);

  const fishBounds = new SINT.Rectangle(-100, -100,
    GAME.initWidth + 100 * 2, GAME.initHeight + 100 * 2);

  const fishs = [];
  //update
  GAME.ticker.add(function () {
    //fish
    for (let i = 0; i < fishs.length; i++) {
      const fish = fishs[i];
      fish.direction += fish.turningSpeed * 0.01;
      fish.x += Math.sin(fish.direction) * (fish.speed * fish.scale.y);
      fish.y += Math.cos(fish.direction) * (fish.speed * fish.scale.y);
      fish.rotation = -fish.direction - Math.PI / 2;

      // wrap the maggots
      if (fish.x < fishBounds.x) {
        fish.x += fishBounds.width;
      } else if (fish.x > fishBounds.x + fishBounds.width) {
        fish.x -= fishBounds.width;
      }
      if (fish.y < fishBounds.y) {
        fish.y += fishBounds.height;
      } else if (fish.y > fishBounds.y + fishBounds.height) {
        fish.y -= fishBounds.height;
      }
    }
  });
}

let part2 = false;

function initPart2() {
  if (part2) return;
  part2 = true;
  GAME.add(loadingTxt);
  GAME.preload({
    assets: assets2,
    loading: function (e) {
      console.log('loading2_' + e.progress);
      loadingTxt.text = Math.floor(e.progress) + '%';
    },
    loaded: createPart2
  });
}

function createPart2() {
  GAME.remove(loadingTxt);

  //btn
  const btn2 = new SINT.SpriteClip(28, 900, 'pic2');
  btn2.addChild(new SINT.TextClip(180, 56, '卸载'));
  GAME.add(btn2);
  btn2.interactive = true;
  btn2.on('pointerdown', function () {
    GAME.removeThis();
  });

  //icon1
  const icon1 = new SINT.SpriteClip(28, 1100, 'icon1');
  GAME.add(icon1);
  const icon2 = new SINT.SpriteClip(228, 1100, 'icon1');
  GAME.add(icon2);
  SINT.magic.doDye(icon2, 0x7067c5);

  //Text
  const t1 = new SINT.TextClip(30, 600, 'Game1 * -> 课前游戏 -> 1234文本', {
    fontFamily: 'Arial',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 400
  });
  GAME.add(t1);

  //Animated
  const ac1 = new SINT.AnimatedClip(400, 600, 'fighter');
  GAME.add(ac1);
  ac1.anchor.set(0.5);
  ac1.animationSpeed = 40 / 60;
  ;
  ac1.interactive = true;
  ac1.on('pointerdown', function () {
    console.log('fly');
    ac1.play();
    SINT.Tween.to(ac1, 1, {
      y: -150,
      ease: Strong.easeOut,
      onComplete: function () {
        ac1.y = GAME.initHeight;
      }
    });
    SINT.Tween.to(ac1, 2, {
      y: 600,
      delay: 1,
      ease: Strong.easeInOut,
      onComplete: function () {
        ac1.stop();
      }
    });
    // SINT.magic.doDye(ac1, 0x00ff00);
    SINT.Audios.get('sound1').play();
  });

  const ac2 = new SINT.AnimatedClip(600, 1000, ['fish1', 'fish2', 'fish3', 'fish4']);
  GAME.add(ac2);
  ac2.anchor.set(0.5);
  ac2.animationSpeed = 3 / 60;
  ac2.play();

}

GAME.stage.interactive = true;
GAME.stage
  .on('pointerdown', onDragStart)
  .on('pointerup', onDragEnd)
  .on('pointerupoutside', onDragEnd)
  .on('pointermove', onDragMove);

const mouseFilter = new SINT.magic.BulgePinchFilter([0.5, 0.5], 200, 1.2);

function onDragStart(event) {
  this.dragging = true;
}

function onDragEnd(event) {
  this.dragging = false;
  SINT.Tween.to(mouseFilter, .3, {
    radius: 0
  });
}

function onDragMove(event) {
  if (this.dragging) {
    GAME.stage.filters = [mouseFilter];
    mouseFilter.center = [event.data.global.x / GAME.initWidth, event.data.global.y / GAME.initHeight];
    mouseFilter.radius += (50 - mouseFilter.radius) * 0.8;
  }
}

function initVideo() {
  const videoContainer = document.querySelector('#videoContainer');
  const video1 = new SINT.VideoDom({
    parentElement: videoContainer,
    videoUrl: './assets/video/dino.mp4',
    posterImg: './assets/video/dino.jpg'
  });

  video1.toPlay();

  video1.videoElement.addEventListener('click', function () {
    video1.destroy();
  });

  video1.on('ended', function (e) {
    video1.destroy();
  });
}


