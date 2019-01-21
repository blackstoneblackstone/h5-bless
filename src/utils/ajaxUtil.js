export default {
  getPic: (fileName, index, complete) => {
    //1.创建对象
    var xhr = new XMLHttpRequest();
    //2.设置请求行(get请求数据写在url后面)
    xhr.open('get', 'http://data.simamedia.cn/index.php?g=Restful&m=Gy&a=oper&fileName=' + fileName + '&index=' + index);
    //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
    xhr.onload = function () {
      complete(xhr.responseText);
    };
    // XHR2.0新增
    xhr.send();
  }
};
