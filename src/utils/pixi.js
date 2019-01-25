import 'pixi-particles';
import 'pixi-sound';

const $application = PIXI.Application;
const $container = PIXI.Container;
const $loader = PIXI.loader;
const $loaders = PIXI.loaders.Loader;
const $resources = PIXI.loader.resources;
const $textureCache = PIXI.utils.TextureCache;
const $sprite = PIXI.Sprite;
const $rectangle = PIXI.Rectangle;
const $displacementFilter = PIXI.filters.DisplacementFilter;
const $loadingImg = PIXI.Texture.fromImage;
const $particles = PIXI.particles;
const $rope = PIXI.mesh.Rope;
const $point = PIXI.Point;
const $graphics = PIXI.Graphics;
const $loadingSprite = PIXI.Sprite.fromImage;
const $animatedSprite = PIXI.extras.AnimatedSprite;
const $sound = PIXI.sound.Sound;
export {
  $application, $particles,
  $container, $loader,
  $resources, $textureCache, $loaders,
  $sprite, $rectangle, $animatedSprite,
  $displacementFilter,
  $loadingImg, $rope, $point, $graphics,
  $loadingSprite, $sound
};
