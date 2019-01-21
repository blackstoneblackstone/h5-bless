import Loading from './page/loading';
import { $application, $sound } from './utils/pixi';
import './css/app.css';
import P0 from './page/p0';
import P1 from './page/p1';
import P2 from './page/p2';
import P3 from './page/p3';
import P4 from './page/p4';
import P5 from './page/p5';
import P6 from './page/p6';
import P7 from './page/p7';

const radio = document.body.offsetWidth / 480;
const screenWidth = 480;
const screenHeight = document.body.offsetHeight / radio;

window.RADIO = screenHeight / 854;

window.APP = new $application(
  {
    width: screenWidth,
    height: screenHeight,
    transparent: true,
    antialias: true
  });

window.APP_WIDTH = APP.screen.width;
window.APP_HEIGHT = APP.screen.height;
document.body.appendChild(APP.view);
APP.stop();

const loading = new Loading();
loading.start().then(loaded);
APP.stage.y = (APP_HEIGHT - 854) / 2;

if (screenHeight < 854) {
  const s = screenHeight / 854;
  APP.stage.x = APP_WIDTH * (1 - s) / 2;
  APP.stage.y = 0;
  APP.stage.scale.y = s;
  APP.stage.scale.x = s;
}

function loaded({ loader, res }) {
  const { p0, p1, p2, p3, p4, p5, p6, p7 } = {
    p0: new P0(res),
    p1: new P1(res),
    p2: new P2(res),
    p3: new P3(res),
    p4: new P4(res),
    p5: new P5(res),
    p6: new P6(res),
    p7: new P7(res)
  };
  p0.action().then(p1.action()).then(p2.action()).then(p3.action()).then(p4.action()).then(p5.action()).then(p6.action()).then(p7.action());
  // p7.action()();
}

APP.start();


