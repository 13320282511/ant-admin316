$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);
    });
  }
});


//回车键提交
function keyPress(o, e) {
  if (e.charCode == 13) {
    submit();

  }
}


function notice(message, color) {
  new jBox('Notice', {
    content: message,
    color: color,
    attributes: {
      x: 'right',
      y: 'bottom'
    },
    stack: false,
    animation: {
      open: 'tada',
      close: 'zoomIn'
    }
  });
}


//提交
function submit() {
  var umd5 = $("#password").val();
  var password = md5(umd5);
  var username = $("#username").val();
  var flag = isBlank(username, password);
  var data = {
    "username": username,
    "password": password
  };

  if (flag) {
    fetch("/api/common/login", {///api/common/login "/api/service/login
      "method": "post",
      "mode": "cors",
      "headers": {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      "body": JSON.stringify(data),
      "credentials": "include"
    }).then(function (res) {
      if (res.ok) {
        res.json().then(function (obj) {

          switch (obj.code.toString()) {
            case "-100":
              //密码错误
              $("#password").animateCss("shake");
              notice(obj.message, 'red');
              break;
            case "-98":
              //账号被锁定
              $("#username").animateCss("shake");
              notice(obj.message, 'blue');
              break;
            case "0":
              // window.location="http://192.168.0.108:8000";
              changeFileName();
              break;
          }

        })
      }

    });
  }

}

//判断是否为空
function isBlank(username, password) {
  var flag = true;
  if (username == null || username == undefined || username == "") {
    $("#username").animateCss("shake");
    flag = false;
  }

  if (password == null || password == undefined || password == "") {
    $("#password").animateCss("shake");
    flag = false;
  }
  return flag;
}
function changeFileName() {
  let pro = window.location.protocol;
  let host = window.location.host;
  let pathname = window.location.pathname;
  let n = pathname.lastIndexOf('/');
  let path = pathname.substring(0, n + 1);
  window.location.href = pro + '//' + host + path;
}

