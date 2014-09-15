#!/bin/sh

YUI_PATH="helper/yuicompressor-2.4.8.jar"
JAVASCRIPTS=(
  "vendor/json3.js"
  "src/helper/dollar.js"
  "src/helper/storage.js"
  "src/interaction/Flash.js"
  "src/interaction/Popup.js"
  "src/interaction/Bar.js"
  "src/stats/Callbacks.js"
  "src/Character.js"
)

if [ -e application.js ]; then rm application.js; fi
if [ -e application.min.js ]; then rm application.min.js; fi
touch 'application.js'
for i in "${JAVASCRIPTS[@]}"
do
  cat $i >> application.js
done

java -jar "$YUI_PATH" application.js -o src/application.min.js
rm -f application.js
