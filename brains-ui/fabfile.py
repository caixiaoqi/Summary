#!/usr/bin/python
# -*- coding: utf-8 -*-

#-------------------------------------------------------------------#
#   Srit Corporation Confidential                                   #
#   All Rights Reserved.                                            #
#                                                                   #
#   NOTICE:  All information contained herein is, and remains       #
#   the property of Srit Corporation. The intellectual and          #
#   technical concepts contained herein are proprietary to          #
#   Srit Corporation and may be covered by U.S. and foreign         #
#   patents, patents in process, and are protected by trade         #
#   secret or copyright law. Dissemination of this information      #
#   or reproduction of this material is strictly forbidden          #
#   unless prior written permission is obtained Srit Corporation.   #
#-------------------------------------------------------------------#


from fabric import Connection
from invoke import task, Result
import re


c = Connection('192.168.16.17', user='root', connect_timeout=5, connect_kwargs=dict(password='tly1008033'))


@task
def pull(cc):
    with c.cd('/app/brains-ui'):
        ret = c.run('git fetch && git checkout develop && git pull', echo=True)
        if ret.exited == 0 and 'Already up-to-date.' not in ret.stdout:
            if 'package.json' in ret.stdout:
                packages(cc)
            return True
        else:
            return False

@task
def packages(cc):
    with c.cd('/app/brains-ui'):
        ret = c.run('. env.sh; npm install --registry=https://registry.npm.taobao.org', echo=True)
        if ret.exited == 0:
            new_installed_re = re.compile(r'added \d+ packages? in')
            if new_installed_re.search(ret.stdout):
                return True

    return False


@task
def restart(_):
    ret = c.run('/etc/init.d/nginx restart', echo=True)
    return ret.exited == 0


@task
def deploy(cc):
    if pull(cc):
        build(cc)
        restart(cc)


@task
def build(cc):
    with c.cd('/app/brains-ui'):
        ret = c.run('. env.sh; npm run build', echo=True)
        return ret.exited == 0
