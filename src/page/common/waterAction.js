import { $container, $displacementFilter, $loadingImg } from '../../utils/pixi';
import ripple from '@static/common/ripple.jpg';
import slideShow from './slideShow';

export default (con) => {
  const rippleImg = $loadingImg(ripple);
  var texts = [];
  new slideShow({
    sprites: [con],
    displacementImage: rippleImg,
    autoPlay: false,
    displaceScale: [300, 300],
    fullScreen: true,
    texts: texts,
    textColor: "#224d94",
    centerSprites: true,
    wacky: true
  });
}
