# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
def home(request):
    string = u'我在自强学堂学习Django'
    TutorialList = ['Html','Css','Jquery','pho']
    info_dict = {'site':u'自学学堂', 'content':u'Django'}
    list = map(str, range(100))
    from .apps import send
    send()
    return render(request, 'users/home.html',{'string':string,
                                              'list':list,
                                              'Tutorial':TutorialList,
                                              'info_dict':info_dict})

def index(request):
    return render(request, 'users/test.html')

def add2(request,a,b):
    from django.http import HttpResponseRedirect
    from django.core.urlresolvers import reverse
    return HttpResponseRedirect(
        reverse('new_add2', args=(a,b))
    )

def new_add2(request,a,b):
    c = int(a) + int(b)
    return HttpResponse(str(c))
