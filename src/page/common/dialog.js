import {Graphics} from "../../utils";
import {$container, $easing, $sprite, $tweenManager} from "../../utils/pixi";
import dialogImg from '@static/common/dialog.png'


export default {
    markDialog: undefined,
    show() {
        const markDialog = new $container()
        const mark = Graphics()
        mark.beginFill(0x000000, 0.8);
        mark.drawRect(0, 0, APP_WIDTH, APP_HEIGHT);
        mark.endFill()
        markDialog.addChild(mark)


        const dialog = $sprite.fromImage(dialogImg)
        dialog.x = 30
        dialog.y = 50
        markDialog.addChild(dialog)

        APP.stage.addChild(markDialog)

        // const tween = $tweenManager.createTween(markDialog);
        // tween.from({x: 0}).to({x: 100})
        // tween.time = 1000;
        // tween.repeat = 1;
        // tween.start();

        const blessTween = $tweenManager.createTween(dialog)
        dialog.origin = 240
        dialog.position.y = 400
        blessTween.easing = $easing.inCirc()
        blessTween.from({scale: {x: 0, y: 0}}).to({scale: {x: 1, y: 1}})
        blessTween.time = 300
        blessTween.loop = false
        blessTween.start()
    },
    hide() {
        if (this.markDialog) {
            APP.stage.removeChild(markDialog)
        }
    }
}