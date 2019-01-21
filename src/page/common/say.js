import pageSound from '@static/music/bg.mp3';
import bgSound from '@static/music/bless-music.mp3';

import { $sound } from '../../utils/pixi';

const sprites = {
  p0: { start: 0, end: 3 }, // 不买买对得起哪个
  p1: { start: 3, end: 8.1 }, // 擦水
  p2: { start: 8.1, end: 14 }, // 春联
  p3: { start: 14, end: 18.5 }, // 爆竹
  p4: { start: 18.5, end: 25 }, // 红包
  p5: { start: 25, end: 35 }, // 打麻将
  p6: { start: 35, end: 53 }// 新年好 事事顺利
};

const sound = $sound.from({
  'url': pageSound,
  'sprites': sprites
});

var soundFlag = false;
const soundBg = $sound.from({
  url: bgSound,
  volume: 0.1,
  preload: true,
  loop: true,
  loaded: function (err, sound) {
    soundFlag = true;
  }
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
  },
  bgPlay() {
    if (soundFlag) {
      soundBg.play();
    }
  },
  bgPause() {
    soundBg.pause();
  }
};
