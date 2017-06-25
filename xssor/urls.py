"""xssor URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
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
from django.conf.urls import url
from django.contrib import admin
from xssor.index.views import index, cmd_create, cmd, \
                            probe_create, probe_js, probe_txt, probe_status
from django.views.generic.base import RedirectView

urlpatterns = [
    url(r'^adminofwhatidonotcare/', admin.site.urls),
    url(r'^$', index),
    url(r'^favicon.ico$', RedirectView.as_view(url=r'/s/favicon.ico')),
    url(r'^cmd/create/?$', cmd_create),
    url(r'^cmd/?$', cmd),
    url(r'^probe/create/?$', probe_create),
    url(r'^probe/(?P<pid>\w+).js/?$', probe_js),
    url(r'^probe/(?P<pid>\w+).txt/?$', probe_txt),
    url(r'^probe/status/?$', probe_status),
]

