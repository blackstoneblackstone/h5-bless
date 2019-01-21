import { Graphics } from '../../utils';
import { $sprite } from '../../utils/pixi';
import dialogImg from '@static/common/dialog.png';
import close from '@static/common/close.png';

export default {
  mark: undefined,
  dialog: undefined,
  close: undefined,
  show() {
    this.mark = Graphics();
    this.mark.beginFill(0x000000, 0.8);
    this.mark.drawRect(0, 0, APP_WIDTH, APP_HEIGHT);
    this.mark.endFill();

    this.dialog = $sprite.fromImage(dialogImg);
    this.dialog.x = 240;
    this.dialog.y = 405;

    this.close = $sprite.fromImage(close);
    this.close.x = 220;
    this.close.y = 770;

    APP.stage.addChild(this.mark);
    APP.stage.addChild(this.dialog);

    TweenMax.from(this.mark, 1, {
      alpha: 0
    });
    this.dialog.anchor.set(0.5);
    let loading = false;
    TweenMax.from(this.dialog.scale, 0.3, {
      x: 0,
      y: 0,
      ease: Power1.easeOut,
      delay: 0.5,
      onComplete: () => {
        loading = true;
        APP.stage.addChild(this.close);
        this.mark.interactive = true;
        this.mark.once('tap', () => {
          if (loading) {
            this.hide();
          }
        });
      }
    });
  },
  hide() {
    if (this.mark) {
      TweenMax.to(this.mark, 0.5, {
        alpha: 0, onComplete: () => {
          APP.stage.removeChild(this.close);
          APP.stage.removeChild(this.mark);
          APP.stage.removeChild(this.dialog);
        }
      });
      TweenMax.to(this.dialog.scale, 0.3, {
        x: 0,
        y: 0
      });
    }
  }
};
