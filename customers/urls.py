from django.conf.urls import url
from django.contrib.auth import views as auth_views
import views
urlpatterns = [
    url(r'^index/$',views.index,name="index"),
    url(r'^code/$', views.code, name="code"),
    url(r'^login/$',views.login,name='customers_login'),
    url(r'^logout/$',views.logout,name='logout'),
    url(r'^register/$', views.register, name='register'),
    url(r'^test/$', views.test, name='test'),
]