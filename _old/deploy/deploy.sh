#!/bin/sh
DEPLOY_TIME=$(date '+%Y-%m-%d|%X')
./deploy/build.sh
git add ./src/application.min.js
git commit -m "$DEPLOY_TIME release"
git push
cat deploy/deploy_commands.sh | ssh grdw.nl@ssh.grdw.nl
