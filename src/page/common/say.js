import bgSound from '@static/music/bg.mp3';
import { $sound } from '../../utils/pixi';

const sprites = {
  p6: { start: 0, end: 34.5 },// 新年好 事事顺利
  p0: { start: 34.5, end: 38.5 }, // 不买买对得起哪个
  p1: { start: 38.5, end: 45.3 }, // 擦水
  p2: { start: 45.3, end: 51.3 }, // 春联
  p3: { start: 51.3, end: 56 }, // 爆竹
  p4: { start: 56, end: 62 }, // 红包
  p5: { start: 62, end: 72.5 } // 打麻将
};

const sound = $sound.from({
  'url': bgSound,
  'sprites': sprites
});

export default {
  p: 'p6',
  play(p) {
    if (p) {
      this.p = p;
    }
    if (sound.isPlaying) {
      sound.pause();
    }
    sound.play(this.p);
  },
  pause() {
    sound.pause();
  }
};
