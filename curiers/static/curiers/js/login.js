/**
 * Created by H1nson on 2017/10/26.
 */
$(document).ready(function () {
    $("#btn-phone-code").click(function () {
        phone = $("#phoneNum").val()
        console.log("sended:" + phone)

        $.ajax({
            type: "POST",
            url: "/curiers/code/",
            data: {phone: phone},
            dataType: 'json',
            success: function (data) {
                $("#checkCode").val(data.code)
                console.log("receive:" + data.result);

            },
            // error: onError
        });
    });
    $("#btn-register").click(function () {
        phone = $("#phoneNum").val()
        code = $("#checkCode").val()
        $.ajax({
            type: "POST",
            url: "/curiers/register/",
            data: {phone: phone, code: code},
            dataType: 'json',
            success: function (data) {
                console.log("receive:" + data.result);
                if(data.result == "success"){
                    location.href = "/curiers/identify/"
                }else{
                    alert(data.errMsg)
                }
            },
            // error: onError
        })
    });
    $("#btn-login").click(function () {
        phone = $("#phoneNum").val()
        code = $("#checkCode").val()
        console.log("logining..,")
        $.ajax({
            type: "POST",
            url: "/curiers/login/",
            data: {phone: phone, code: code},
            dataType: 'json',
            success: function (data) {
                console.log("receive:" + data.result);
                if(data.result == "success"){
                    location.href = "/curiers/index"
                }else{
                    alert(data.errMsg)
                }
            },
            // error: onError
        })
    });
})