import { $animatedSprite, $loadingImg, $sprite } from '../../utils/pixi';
import open1 from '@static/common/open1.png';
import open2 from '@static/common/open2.png';

export default function (app) {
  const o1 = $loadingImg(open1);
  const o2 = $loadingImg(open2);
  const explosionTextures = [o1, o2];
  const con = new $animatedSprite(explosionTextures);
  con.x = 410;
  con.y = 20;
  con.animationSpeed = 300;
  con.play();
  let flag = false;
  app.addChild(con);
  con.on('tap', function () {
    console.log('music');
    if (flag) {
      document.getElementById('music').play();
      con.play();
      flag = false;
    } else {
      document.getElementById('music').pause();
      con.stop();
      flag = true;
    }
  });
}

