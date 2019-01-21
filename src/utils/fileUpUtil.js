export default (form, progress, complete) => {
  //1.创建对象
  var xhr = new XMLHttpRequest();
  //2.设置请求行(get请求数据写在url后面)
  xhr.open('post', 'http://data.simamedia.cn/index.php?g=Restful&m=Gy&a=pic');
  //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
  xhr.onload = function () {
    complete(xhr.responseText);
  };
  // XHR2.0新增 上传进度监控
  xhr.onprogress = function (event) {
    progress(event);
  };
  // XHR2.0新增
  var data = new FormData(form);
  //4.请求主体发送(get请求为空，或者写null，post请求数据写在这里，如果没有数据，直接为空或者写null)
  xhr.send(data);
}
