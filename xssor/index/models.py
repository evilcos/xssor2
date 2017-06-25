from __future__ import unicode_literals

from django.db import models

# TODO:_)
class Probe(models.Model):
    pid = models.CharField(unique=True, max_length=30) # probe id
    ip = models.CharField(max_length=16)
    ua = models.CharField(max_length=500)
    referer = models.CharField(max_length=500)
    add_time = models.DateTimeField()
    status = models.IntegerField(default=0)
    #codz = models.TextField()
    result = models.TextField(blank=True)

class Cmd(models.Model):
    pid = models.CharField(max_length=30, db_index=True)
    cmd = models.TextField(blank=True)
    add_time = models.DateTimeField()
    status = models.IntegerField(default=0)

