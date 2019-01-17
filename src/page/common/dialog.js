import { Graphics } from '../../utils';
import { $container, $sprite } from '../../utils/pixi';
import dialogImg from '@static/common/dialog.png';

export default {
  markDialog: undefined,
  show() {
    const markDialog = new $container();
    const mark = Graphics();
    mark.beginFill(0x000000, 0.8);
    mark.drawRect(0, 0, APP_WIDTH, APP_HEIGHT);
    mark.endFill();
    markDialog.addChild(mark);

    const dialog = $sprite.fromImage(dialogImg);
    dialog.x = 30;
    dialog.y = 50;
    markDialog.addChild(dialog);

    APP.stage.addChild(markDialog);


  },
  hide() {
    if (this.markDialog) {
      APP.stage.removeChild(markDialog);
    }
  }
};
