import { $displacementFilter, $loadingSprite } from '../../utils/pixi';
import crystalizeImg from '@static/common/clouds.jpg';
const displacement = $loadingSprite(crystalizeImg);

export default (r, e, app) => {

  APP.stage.addChild(displacement);
  displacement.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  const displacementFilter = new $displacementFilter(displacement);
  displacementFilter.padding = 10;
  displacement.x = e.x;
  displacement.y = e.y;
  APP.stage.filters = [displacementFilter];

  let flag = true;
  var baseTimeline = new TimelineMax({
    onComplete: () => {
      APP.stage.removeChild(displacement);
      baseTimeline.clear();
    }, onUpdate: function () {
      displacement.rotation += baseTimeline.progress() * 0.02;
      displacement.scale.set(baseTimeline.progress() * 3);
      if (flag && baseTimeline.progress() > 0.4) {
        r();
        APP.stage.removeChild(app);
        flag = false;
      }
    }
  });

  baseTimeline
    .to(displacementFilter.scale, 1, { x: 10, y: 10, ease: Power1.easeOut })
    .to(app, 0.5, { alpha: 0, ease: Power2.easeOut })
    .to(displacementFilter.scale, 1, { x: 1, y: 1, ease: Power2.easeOut });
}
