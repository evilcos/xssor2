#!/bin/bash
sed -i "s/xssor.io/$1/g" xssor/payload/probe.js
python3 manage.py runserver 0.0.0.0:8000
