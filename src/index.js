import Loading from './page/loading'
import {$application, $tweenManager} from "./utils/pixi";
import './css/app.css'
import P1 from './page/p1'
import P2 from './page/p2'
import P3 from "./page/p3";
import P4 from "./page/p4";
import P5 from "./page/p5";
import P6 from "./page/p6";

const radio = window.screen.availWidth / 480
const screenWidth = 480
const screenHeight = window.screen.availHeight / radio

window.RADIO = screenHeight / 854

window.APP = new $application(screenWidth, screenHeight, {backgroundColor: 'red'})
window.APP_WIDTH = APP.screen.width
window.APP_HEIGHT = APP.screen.height
document.body.appendChild(APP.view)
APP.stop();

const loading = new Loading()
loading.start().then(loaded)

APP.stage.scale.y = RADIO

function loaded({loader, res}) {
    const {p1, p2, p3, p4, p5, p6} = {
        p1: new P1(res),
        p2: new P2(res),
        p3: new P3(res),
        p4: new P4(res),
        p5: new P5(res),
        p6: new P6(res),
    }
    // p1.action().then(p2.action()).then(p3.action()).then(p4.action()).then(p5.action()).then(p6.action())
    p1.action()
    APP.start()
}

APP.ticker.add(function (delta) {
    $tweenManager.update();
});

