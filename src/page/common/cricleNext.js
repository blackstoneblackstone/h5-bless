import { $graphics } from '../../utils/pixi';
import musicBtn from './musicBtn';
import say from './say';

export default function (x, y, app) {

  const g1 = new $graphics();
  const g2 = new $graphics();
  const g3 = new $graphics();

  g1.lineStyle(0);
  g1.beginFill(0xFFFFFF, 1);
  g1.drawCircle(x, y, 20);
  g1.endFill();

  g2.lineStyle(0);
  g2.beginFill(0xFFFFFF, 0.5);
  g2.drawCircle(x, y, 25);
  g2.endFill();

  g3.beginFill(0xFFFF00, 0);
  g3.drawCircle(x, y, 50);
  g3.endFill();

  g2.scale.x = 0;
  g2.scale.y = 0;

  g1.position.x = x;
  g1.pivot.x = x;
  g1.position.y = y;
  g1.pivot.y = y;
  g1.scale.x = 0;
  g1.scale.y = 0;

  g2.position.x = x;
  g2.pivot.x = x;
  g2.position.y = y;
  g2.pivot.y = y;

  musicBtn(app);
  app.addChild(g1);
  app.addChild(g2);
  app.addChild(g3);

  TweenMax.to(g1.scale, 0.5, {
    x: 1, y: 1, delay: 1, onComplete: () => {
      TweenMax.to(g1.scale, 0.5, { x: 2, y: 2, repeat: -1, yoyo: true });
      TweenMax.to(g1, 0.5, { alpha: 0.5, repeat: -1, yoyo: true });
    }
  });
  TweenMax.to(g2.scale, 0.5, {
    x: 1, y: 1, delay: 1, onComplete: () => {
      TweenMax.to(g2.scale, 0.5, { x: 0, y: 0, repeat: -1, yoyo: true });
      TweenMax.to(g2, 0.5, { alpha: 1, repeat: -1, yoyo: true });
    }
  });

  return g3;
}

