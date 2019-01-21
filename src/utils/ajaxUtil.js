const url = 'http://data.simamedia.cn/';
export default {
  getPic: (fileName, index, complete) => {
    //1.创建对象
    var xhr = new XMLHttpRequest();
    //2.设置请求行(get请求数据写在url后面)
    xhr.open('get', `${url}index.php?g=Restful&m=Gy&a=oper&fileName=` + fileName + '&index=' + index);
    //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
    xhr.onload = function () {
      complete(xhr.responseText);
    };
    // XHR2.0新增
    xhr.send();
  },
  getWxConfig: () => new Promise((r, j) => {
    //1.创建对象
    var xhr = new XMLHttpRequest();
    //2.设置请求行(get请求数据写在url后面)
    xhr.open('get', `${url}index.php?g=Restful&m=Oauth&a=wechatJs&url=${window.location.href}`);
    //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
    xhr.onload = function () {
      r(xhr.responseText);
    };
    // XHR2.0新增
    xhr.send();
  })

};
