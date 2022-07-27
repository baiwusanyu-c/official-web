#!/bin/sh
cd `dirname $0`
pm2 start start.json
pm2 logs