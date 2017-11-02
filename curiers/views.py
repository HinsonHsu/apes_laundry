# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django import forms
from users.models import User
from customers.models import Captcha, PhoneCode
import random, json
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login as userlogin, logout as userlogout
from django.contrib.auth.decorators import login_required

@login_required(login_url="/curiers/login/")
def index(request):
    # print request.user.username
    return render(request, 'curiers/index.html')


@csrf_exempt
def code(request):
    if request.method == "POST":
        result = {}
        phone = request.POST.get('phone')
        curier_phone = "curier_" + phone
        print("curier_phone:{0}").format(curier_phone)
        from customers.service import generate_verification_code
        code = generate_verification_code()

        try:
            phoneCode = PhoneCode.objects.get(phone=curier_phone)
        except PhoneCode.DoesNotExist:
            phoneCode = PhoneCode.objects.create(phone=curier_phone, code=code)
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
        print "result:{0}".format(result)
        result["result"] = "success"  # 1成功
        result["code"] = code
        res = json.dumps(result)
        print res.decode("unicode-escape")
        return HttpResponse(res.decode("unicode-escape"), content_type="application/json")


@csrf_exempt
def login(request):
    if request.method == "GET":
        return render(request, 'curiers/login.html')
    if request.method == "POST":
        result = {}
        phone = request.POST.get("phone")
        username = "curier_" + phone
        code = request.POST.get("code")
        from customers.service import verify_code
        if verify_code(phone=username, code=code):
            try:
                user = User.objects.get(username=username);
                userlogin(request, user)
                result["result"] = "success"
            except User.DoesNotExist:
                result["errMsg"] = "用户不存在，请先注册！"
                result["result"] = "fail"
        else:
            result["errMsg"] = "验证码错误，请输入正确的验证码！"
            result["result"] = "fail"
        res = json.dumps(result)
        return HttpResponse(res.decode("unicode-escape"), content_type="application/json")


@csrf_exempt
def register(request):
    if request.method == "GET":
        return render(request, 'curiers/register.html')
    if request.method == "POST":
        result = {}
        phone = request.POST.get("phone")
        username = "curier_" + phone
        password = username
        code = request.POST.get("code")
        from customers.service import verify_code
        if verify_code(phone=username, code=code):
            print ("认证成功")
            # user = User.objects.create(username=username)
            # print username
            # user.set_password(password)
            # user.is_active = 1
            # user.save()
            # userlogin(request, user)
            result["result"] = "success"
        else:
            print("认证失败")
            result["result"] = "fail"
        res = json.dumps(result)
        return HttpResponse(res.decode("unicode-escape"), content_type="application/json")


@csrf_exempt
def logout(request):
    print userlogout(request)
    return HttpResponseRedirect('/curiers/login/')

@csrf_exempt
def identify(request):
    return render(request, "curiers/info.html")
