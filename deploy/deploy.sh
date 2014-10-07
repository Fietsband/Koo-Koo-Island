#!/bin/sh
./deploy/build.sh
git add ./src/application.min.js
git commit -m "releasing"
git push
cat deploy/deploy_commands.sh | ssh grdw.nl@ssh.grdw.nl
