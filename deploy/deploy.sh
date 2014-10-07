#!/bin/sh
./deploy/build.sh
cat deploy_commands.sh | ssh grdw.nl@ssh.grdw.nl
