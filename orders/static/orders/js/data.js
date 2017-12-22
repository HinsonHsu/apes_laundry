var flag = 0
$(document).ready(function () {
    unaccept()
})

function unaccept() {
    var data = orders[0];
    $('nav:first').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" href="/products/index/"></a></div><p class="nav-top">' + "海马洗衣" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
    $('.item_bar').empty();
    $.each(data, function (i, data) {
        var $item = $('<a class="list-group-item" onclick="show1(this)" id =' + data.id + '><h4 class = "list-group-item-heading">订单号 ：  ' + data.order_ID +
            '</h4><p class = "list-group-item-text">' + data.name + '&nbsp&nbsp&nbsp&nbsp' + data.address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data.order_time + '</p></a>');
        $item.appendTo($('.item_bar'));
    })
    $(document).attr("title", "待接单");
}

function unconfirm() {
    var data = orders[1];
    $('nav:first').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" href="/products/index/"></a></div><p class="nav-top">' + "海马洗衣" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
    $('.item_bar').empty();
    $.each(data, function (i, data) {
        var $item = $('<a class="list-group-item" onclick="show2(this)" id =' + data.id + '><h4 class = "list-group-item-heading">订单号 ： ' + data.order_ID +
            '</h4><p class = "list-group-item-text">' + data.name + '&nbsp&nbsp&nbsp&nbsp' + data.address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data.order_time + '</p></a>');
        $item.appendTo($('.item_bar'));
    })
    $(document).attr("title", "待确认");
}

function unpay() {
    var data = orders[2];
    $('nav:first').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" href="/products/index/"></a></div><p class="nav-top">' + "海马洗衣" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
    $('.item_bar').empty();
    $.each(data, function (i, data) {
        var $item = $('<a class="list-group-item" onclick="show3(this)" id =' + data.id + '><h4 class = "list-group-item-heading">订单号 ： ' + data.order_ID +
            '</h4><p class = "list-group-item-text">' + data.name + '&nbsp&nbsp&nbsp&nbsp' + data.address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data.order_time + '</p></a>');
        $item.appendTo($('.item_bar'));

    })
    $(document).attr("title", "待付款");
}

function finish() {
    var data = orders[3];
    $('nav:first').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" href="/products/index/"></a></div><p class="nav-top">' + "海马洗衣" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
    $('.item_bar').empty();
    $.each(data, function (i, data) {
        var $item = $('<a class="list-group-item" onclick="show4(this)" id =' + data.id + '><h4 class = "list-group-item-heading">订单号 ： ' + data.order_ID +
            '</h4><p class = "list-group-item-text">' + data.name + '&nbsp&nbsp&nbsp&nbsp' + data.address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data.order_time + '</p>');
        $item.appendTo($('.item_bar'));

    })
    $(document).attr("title", "已完成");
}
function cancel() {
    var data = orders[4];
    $('nav:first').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" href="/products/index/"></a></div><p class="nav-top">' + "海马洗衣" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
    $('.item_bar').empty();
    $.each(data, function (i, data) {
        var $item = $('<a class="list-group-item" onclick="show5(this)" id =' + data.id + '><h4 class = "list-group-item-heading">订单号 ： ' + data.order_ID +
            '</h4><p class = "list-group-item-text">' + data.name + '&nbsp&nbsp&nbsp&nbsp' + data.address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data.order_time + '</p></a>');
        $item.appendTo($('.item_bar'));
    })
    $(document).attr("title", "已取消");
}

function unaccept_item() {
    $('nav:first').empty();
    $('.item_bar').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" onclick="unaccept()"></a></div><p class="nav-top">' + "待接单" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
}

function unconfirm_item() {
    $('nav:first').empty();
    $('.item_bar').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" onclick="unconfirm()"></a></div><p class="nav-top">' + "待确认" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
}

function unpay_item() {
    $('nav:first').empty();
    $('.item_bar').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" onclick="unpay()"></a></div><p class="nav-top">' + "待付款" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
}

function finish_item() {
    $('nav:first').empty();
    $('.item_bar').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" onclick="finish()"></a></div><p class="nav-top">' + "已完成" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
}
function cancel_item() {
    $('nav:first').empty();
    $('.item_bar').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><div class="back"><a class ="glyphicon glyphicon-menu-left" onclick="cancel()"></a></div><p class="nav-top">' + "已取消" + '</p></li></ul></nav>');
    $nav.appendTo($('nav:first'));
}

function show1(e) {
    var data = orders[0]
    ID = parseInt(e.id - 1);
    unaccept_item();
    $('.item_bar').empty();
    var $item = $('<a class="list-group-item"><h4 class = "list-group-item-heading">订单号 ：  ' + data[ID].order_ID +
        '</h4><p class = "list-group-item-text">' + data[ID].name + '&nbsp&nbsp&nbsp&nbsp' + data[ID].address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data[ID].order_time + '</p></a>');

    $item.appendTo($('.item_bar'));
    var total_price = 0;
    $.each(data[ID].cloth, function (i, s) {
        var $item = $('<div class="float-sum"> <p class="list-group-item-text">' + data[ID].cloth[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "数量 x" + data[ID].cloth[i].amount + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "价格：" + data[ID].cloth[i].price + '</p> </div>');
        total_price = total_price + parseInt(data[ID].cloth[i].amount) * parseInt(data[ID].cloth[i].price);
        $item.appendTo($('.item_bar'));
    })

    var $item = $('<div class = "price"><p class="fee"><span class="total-title">' + "总价" + '：</span><span class="total-fee-box"> <span class="tc-rmb">' + " &nbsp&nbsp&nbsp" + "￥" + '</span><span class="total-fee">' + total_price + '</span></span></p></div>');
    $item.appendTo($('.item_bar'));
    var $item = $('<button type="button" class="go-btn" onclick="cancel_order(' + data[ID].order_ID + ')">' + "取消订单" + '</button>');
    $item.appendTo($('.item_bar'));

}

function show2(e) {
    var data = orders[1]
    ID = parseInt(e.id - 1);
    unconfirm_item();
    $('.item_bar').empty();
    var $item = $('<a class="list-group-item"><h4 class = "list-group-item-heading">订单号 ：  ' + data[ID].order_ID +
        '</h4><p class = "list-group-item-text">' + data[ID].name + '&nbsp&nbsp&nbsp&nbsp' + data[ID].address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data[ID].order_time + '</p></a>');

    $item.appendTo($('.item_bar'));
    var total_price = 0;
    $.each(data[ID].cloth, function (i, s) {
        var $item = $('<div class="float-sum"> <p class="list-group-item-text">' + data[ID].cloth[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "数量 x" + data[ID].cloth[i].amount + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "价格：" + data[ID].cloth[i].price + '</p> </div>');
        total_price = total_price + parseInt(data[ID].cloth[i].amount) * parseInt(data[ID].cloth[i].price);
        $item.appendTo($('.item_bar'));
    })

    var $item = $('<div class = "price"><p class="fee"><span class="total-title">' + "总价" + '：</span><span class="total-fee-box"> <span class="tc-rmb">' + " &nbsp&nbsp&nbsp" + "￥" + '</span><span class="total-fee">' + total_price + '</span></span></p></div>');
    $item.appendTo($('.item_bar'));

    var $item = $('<button type="button" class="go-btn" onclick="cancel_order(' + data[ID].order_ID + ')"">' + "取消订单" + '</button>');
    $item.appendTo($('.item_bar'));

}

function show3(e) {
    var data = orders[2]
    ID = parseInt(e.id - 1);
    unpay_item();
    $('.item_bar').empty();
    var $item = $('<a class="list-group-item"><h4 class = "list-group-item-heading">订单号 ：  ' + data[ID].order_ID +
        '</h4><p class = "list-group-item-text">' + data[ID].name + '&nbsp&nbsp&nbsp&nbsp' + data[ID].address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data[ID].order_time + '</p></a>');

    $item.appendTo($('.item_bar'));
    var total_price = 0;
    $.each(data[ID].cloth, function (i, s) {
        var $item = $('<div class="float-sum"> <p class="list-group-item-text">' + data[ID].cloth[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "数量 x" + data[ID].cloth[i].amount + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "价格：" + data[ID].cloth[i].price + '</p> </div>');
        total_price = total_price + parseInt(data[ID].cloth[i].amount) * parseInt(data[ID].cloth[i].price);
        $item.appendTo($('.item_bar'));
    })

    var $item = $('<div class = "price"><p class="fee"><span class="total-title">' + "总价" + '：</span><span class="total-fee-box"> <span class="tc-rmb">' + " &nbsp&nbsp&nbsp" + "￥" + '</span><span class="total-fee">' + total_price + '</span></span></p></div>' +
        '<button type="button" class="go-btn" onclick="pay_order(' + data[ID].order_ID + ')">' + "付款" + '</button>');
    $item.appendTo($('.item_bar'));
    var $item = $('<button type="button" class="go-btn" onclick="cancel_order(' + data[ID].order_ID + ')">' + "取消订单" + '</button>');
    $item.appendTo($('.item_bar'));

}

function show4(e) {
    var data = orders[3]
    ID = parseInt(e.id - 1);
    finish_item();
    $('.item_bar').empty();
    var $item = $('<a class="list-group-item"><h4 class = "list-group-item-heading">订单号 ：  ' + data[ID].order_ID +
        '</h4><p class = "list-group-item-text">' + data[ID].name + '&nbsp&nbsp&nbsp&nbsp' + data[ID].address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data[ID].order_time + '</p></a>');
    $item.appendTo($('.item_bar'));
    var total_price = 0;
    $.each(data[ID].cloth, function (i, s) {
        var $item = $('<div class="float-sum"> <p class="list-group-item-text">' + data[ID].cloth[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "数量 x" + data[ID].cloth[i].amount + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "价格：" + data[ID].cloth[i].price + '</p> </div>');
        total_price = parseInt(total_price) + parseInt(data[ID].cloth[i].amount) * parseInt(data[ID].cloth[i].price);
        $item.appendTo($('.item_bar'));
    })

    var $item = $('<div class = "price"><p class="fee"><span class="total-title">' + "总价" + '：</span><span class="total-fee-box"> <span class="tc-rmb">' + " &nbsp&nbsp&nbsp" + "￥" + '</span><span class="total-fee">' + total_price + '</span></span></p></div>');
    $item.appendTo($('.item_bar'));
}

function show5(e) {
    var data = orders[4]
    ID = parseInt(e.id - 1);
    cancel_item();
    $('.item_bar').empty();
    var $item = $('<a class="list-group-item"><h4 class = "list-group-item-heading">订单号 ：  ' + data[ID].order_ID +
        '</h4><p class = "list-group-item-text">' + data[ID].name + '&nbsp&nbsp&nbsp&nbsp' + data[ID].address_ID + '</p><p>下单时间 ' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data[ID].order_time + '</p></a>');
    $item.appendTo($('.item_bar'));
    var total_price = 0;
    $.each(data[ID].cloth, function (i, s) {
        var $item = $('<div class="float-sum"> <p class="list-group-item-text">' + data[ID].cloth[i].name + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "数量 x" + data[ID].cloth[i].amount + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + "价格：" + data[ID].cloth[i].price + '</p> </div>');
        total_price = parseInt(total_price) + parseInt(data[ID].cloth[i].amount) * parseInt(data[ID].cloth[i].price);
        $item.appendTo($('.item_bar'));
    })

    var $item = $('<div class = "price"><p class="fee"><span class="total-title">' + "总价 :" + " &nbsp&nbsp&nbsp" + "￥" + total_price + '</span></p></div>');
    $item.appendTo($('.item_bar'));
}

function go() {
    $('nav:first').empty();
    $('.item_bar').empty();
    var $nav = $('<ul class="nav row"><li class="col-xs-12"><a class="nav-top">' + "海马洗衣" + '</a></li></ul></nav>');
    $nav.appendTo($('nav:first'));
}
function pay_order(ordersn) {
    alert("pay order:" + ordersn)
    $.ajax({
        type: "POST",
        url: "/orders/pay_order/",
        data: {ordersn: ordersn},
        dataType: 'json',
        success: function (res) {
            if (res.code == 1) {
                alert("成功付款")
                window.location.href = "/orders/index/"
            } else {
                alert("操作失败")
                alert(res.errMsg)
            }
        },
        // error: onError
    })
}
function cancel_order(ordersn) {
    $.ajax({
        type: "POST",
        url: "/orders/cancel_order/",
        data: {ordersn: ordersn},
        dataType: 'json',
        success: function (res) {
            if (res.code == 1) {
                alert("成功取消订单")
                window.location.href = "/orders/index/"
            } else {
                alert("操作失败")
                alert(res.errMsg)
            }
        },
        // error: onError
    })
}