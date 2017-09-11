define(["jquery", "template", "cookie"], function ($, template) {

	$(function () {
		if (location.pathname != "/dashboard/login") {

			//验证是否登录
			if (!$.cookie("PHPSESSID")) {
				location.href = "/dashboard/login";
			}


			//显示头像和用户名
			var userinfo = JSON.parse($.cookie("userinfo"));
			console.log(userinfo);
			$("#profile").html(template("userpicTpl", userinfo));
		}
	})
})
