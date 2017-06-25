#!/usr/bin/python
# encoding=utf-8

import os
import time

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
#print(BASE_DIR)

def now_time():
    """20370307133007"""
    return time.strftime('%Y%m%d%H%M%S', time.localtime(time.time()))

def clear():
    now = now_time()
    probe_dir = os.path.join(BASE_DIR, 'probe')
    print(probe_dir)
    print(now)
    if os.listdir(probe_dir) and now[-6:-2] == '0000':
        print(now)
        os.system('rm %s/*'%probe_dir)
        print('end.')

if __name__ == "__main__":
    clear()

