#!/bin/sh
cd `dirname $0`
service nginx start
pm2 start start.json
pm2 logs