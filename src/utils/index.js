import { $graphics, $sprite } from './pixi';

export const Sprite = (img) => {
  return new $sprite(img.texture);
};

export const Graphics = () => {
  return new $graphics();
};

export const allLoading = {
  show: () => {
    document.getElementById('loading').style.display = 'block';
  },
  hide: () => {
    document.getElementById('loading').style.display = 'none';
  }
};
