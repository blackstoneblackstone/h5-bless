import { $container, $graphics, $loadingSprite, $sprite } from './pixi';

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

export const address = (text, app, x, y) => {
  const con = new $container();
  const t = $loadingSprite(text);
  t.x = 15;
  t.y = 30;
  const c = new $graphics();
  c.beginFill(0xFFFFFF, 0.8);
  c.drawCircle(50, 45, 28);
  c.endFill();
  con.x = x || 0;
  con.y = y || 0;
  con.addChild(c);
  con.addChild(t);
  app.addChild(con);
  TweenMax.from(c.scale, 1, { x: 0, y: 0, delay: 0.3 });
  TweenMax.from(t.scale, 1, { x: 0, y: 0, delay: 0.5 });
};
