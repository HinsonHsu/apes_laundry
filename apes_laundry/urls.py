"""apes_laundry URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^index/$',users_views.index,name="add"),
    # url(r'^add2/(\d+)/(\d+)/$',users_views.add2, name='add2'),
    # url(r'^new_add2/(\d+)/(\d+)/$',users_views.new_add2, name='new_add2'),
    # url(r'^home/$', users_views.home, name='home'),

    url(r'^customers/',include('customers.urls')),
    url(r'^curiers/',include('curiers.urls')),
]
