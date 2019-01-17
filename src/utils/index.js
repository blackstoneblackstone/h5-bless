import {$graphics, $sprite} from "./pixi";

export const Sprite = (img) => {
    return new $sprite(img.texture)
}

export const Graphics = () => {
    return new $graphics();
}