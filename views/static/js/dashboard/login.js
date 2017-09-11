define(["jquery", "cookie"], function ($) {

  $('form').submit(function (e) {
    var tc_name = $('#tc_name').val();
    var tc_pass = $('#tc_pass').val();
    console.log(tc_name);
    console.log(tc_pass);



    if (tc_name.trim() == '') {
      alert("请输入用户名");
      return false;
    }

    if (tc_pass.trim() == '') {
      alert("请输入密码");
      return false;
    }

    //发送ajax请求
    $.ajax({
      url: '/api/login',
      data: {
        tc_name: tc_name,
        tc_pass: tc_pass
      },
      type: 'post',
      success: function (data) {
        if (data.code == 200) {
          console.log(data);
          console.log(JSON.stringify(data.result));
          $.cookie("userinfo", JSON.stringify(data.result), { expires: 365, path: "/" })
          location.href = '/';
        }
      }

    })






    return false;
  })

});
