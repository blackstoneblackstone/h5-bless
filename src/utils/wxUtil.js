import ajaxUtil from './ajaxUtil';

const title = '国贸送福贺新春';
const desc = '国贸有礼，福气到家。';

export default () => {
  ajaxUtil.getWxConfig().then((data) => {
    wx.config(
      {
        ...data.sp, debug: false
      }
    );
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title, // 分享标题
        link: window.location.href, // 分享链接
        imgUrl: 'http://yondu.vip/images/actor.jpg', // 分享图标
        success: function () {
        },
        cancel: function () {
        }
      });
      wx.onMenuShareAppMessage({
        title, // 分享标题
        desc, // 分享描述
        link: window.location.href, // 分享链接
        imgUrl: 'http://yondu.vip/images/actor.jpg', // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
        },
        cancel: function () {
        }
      });
    });
  });
}
