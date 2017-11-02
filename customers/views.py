# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render,render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from django.template import RequestContext
from django import forms
from users.models import User
from .models import Captcha, PhoneCode
import random, json
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login as userlogin, logout as userlogout
from django.contrib.auth.decorators import login_required

@login_required()
def index(request):
    # print request.user.username
    username = request.user.username
    phone = username[9:]
    return render(request,'customers/index.html',{"user_phone":phone})

@csrf_exempt
def code(request):
    if request.method == "POST":
        result = {}
        phone = request.POST.get("phone")
        username = "customer_" + phone
        print("customer_phone:"),
        print phone
        from service import generate_verification_code
        code = generate_verification_code()

        try:
            phoneCode = PhoneCode.objects.get(phone=username)
        except PhoneCode.DoesNotExist:
            phoneCode = PhoneCode.objects.create(phone=username,code=code)
        phoneCode.code = code
        phoneCode.save()
        # now = timezone.now()
        # dif = now - phoneCode.add_date
        # sec = dif.seconds
        # if sec < 300:
        #     phoneCode.code = code
        #     phoneCode.phone = phone
        #     phoneCode.add_date = timezone.now()
        #     phoneCode.save()
        #     from .aliyun import send_code
        #     print phone
        #     print code
        #     # print send_code(code, phone)
        #     result["result"] = "1"
        #     result["code"] = code
        # else:
        #     result["result"] = "0"
        from .aliyun import send_code
        print send_code(code, phone)

        print "result:{0}".format(result)
        result["result"] = "success"#1成功
        result["code"] = code
        res = json.dumps(result)
        print res.decode("unicode-escape")
        return HttpResponse(res.decode("unicode-escape"), content_type="application/json")

@csrf_exempt
def login(request):
    if request.method == "GET":
        return render(request, 'customers/log.html')
    if request.method == "POST":
        result = {}
        phone = request.POST.get("phone")
        username = "customer_" + phone
        code = request.POST.get("code")
        from service import verify_code
        if verify_code(phone=username, code=code):
            try:
                user = User.objects.get(username=username);
                userlogin(request,user)
                result["result"] = "success"
            except User.DoesNotExist:
                # result["errMsg"] = "手机号未注册用户，用户不存在，请先注册！"
                # result["result"] = "fail"
                user = User(username=username);
                user.set_password(username)
                user.is_active = 1
                user.save()
                userlogin(request, user)
                result["result"] = "success"
        else:
            result["errMsg"] = "验证码错误，请输入正确的验证码！"
            result["result"] = "fail"
        res = json.dumps(result)
        return HttpResponse(res.decode("unicode-escape"), content_type="application/json")

@csrf_exempt
def register(request):
    if request.method == "GET":
        return render(request, 'customers/register.html')
    if request.method == "POST":
        result = {}
        phone = request.POST.get("phone")
        username = "customer_" + phone
        password = username
        code = request.POST.get("code")
        from service import verify_code
        if verify_code(phone=username,code=code):
            print ("verified")
            user = User.objects.create(username=username)
            print username
            user.set_password(password)
            user.is_active = 1
            user.save()
            userlogin(request,user)
            result["result"] = "success"
        else:
            print("认证失败")
            result["errMsg"] = "验证码错误，请重试"
            result["result"] = "success"
        res = json.dumps(result)
        return HttpResponse(res.decode("unicode-escape"), content_type="application/json")

@csrf_exempt
def logout(request):
    userlogout(request)
    return HttpResponseRedirect('/customers/login/')

@csrf_exempt
def test(request):
    return render(request,"test.html")
