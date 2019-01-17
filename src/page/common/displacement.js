import {$container, $displacementFilter, $loader, $loadingImg} from "../../utils/pixi";
import {Sprite} from "../../utils";
import displaceImg from '@static/common/displace.png'


export default () => {
    const displacementSprite = $loadingImg(displaceImg);
    const displacementFilter = new $displacementFilter(displacementSprite);
    APP.stage.addChild(displacementSprite)
    displacementFilter.scale.x = 110;
    displacementFilter.scale.y = 110;
    displacementSprite.anchor.set(0.5);
    APP.stage
        .on('mousemove', onPointerMove)
        .on('touchmove', onPointerMove);

    function onPointerMove(eventData) {
        displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
    }
}