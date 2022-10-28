#!/bin/bash

# Run this as root!
# This script exists because we are lazy programmers
# and can't be bothered to individually restart services
# so we spend 10x the time to automate said process

usage() {
    echo
    echo "This program will restart the webserver, run as root!"
    echo "more specifically, uwsgi, webapp.py, and nginx"
    echo
    echo "-s, --status          print status after restart"
    echo
}

status=0

systemctl restart webapp
systemctl restart uwsgi
systemctl restart nginx

while [ "$1" != "" ]; do
    case $1 in
    -s | --status)
        status=1
        ;;
    esac
    shift
done

# exit on error
set -e

# call for status if flagged

if [ ! -z "$status" ]; then
    systemctl status webapp
    systemctl status uwsgi
    systemctl status nginx
fi