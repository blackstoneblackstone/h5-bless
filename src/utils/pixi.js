import * as PIXI from 'pixi.js'
import 'pixi-tween'
import 'pixi-spine'
import 'pixi-particles'

const $application = PIXI.Application
const $container = PIXI.Container
const $loader = PIXI.loader
const $resources = PIXI.loader.resources
const $textureCache = PIXI.utils.TextureCache
const $sprite = PIXI.Sprite
const $rectangle = PIXI.Rectangle
const $tweenManager = PIXI.tweenManager
const $easing = PIXI.tween.Easing
const $spine = PIXI.spine.Spine
const $displacementFilter = PIXI.filters.DisplacementFilter
const $loadingImg = PIXI.Texture.fromImage
const $particles = PIXI.particles
const $rope = PIXI.mesh.Rope
const $point = PIXI.Point
const $graphics = PIXI.Graphics

l(PIXI.tween.Easing)

export {
    $application, $particles,
    $container, $loader,
    $resources, $textureCache,
    $sprite, $rectangle,
    $displacementFilter,
    $tweenManager, $easing, $spine,
    $loadingImg, $rope, $point, $graphics
}