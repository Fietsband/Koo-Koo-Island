#!/bin/sh
YUI_PATH="helper/yuicompressor-2.4.8.jar"
JAVASCRIPTS=(
  "vendor/json3.js"
  "src/helper/dollar.js"
  "src/helper/storage.js"
  "src/interaction/Flash.js"
  "src/interaction/Popup.js"
  "src/interaction/Bar.js"
  "src/levels/SquirrelCity.js"
  "src/statics/ExperiencePoints.js"
  "src/callbacks/ExperienceCallbacks.js"
  "src/callbacks/StatsCallbacks.js"
  "src/callbacks/LoadCallbacks.js"
  "src/Character.js"
  "src/statics/ClickAreas.js"
  "src/statics/GameData.js"
  "src/statics/SellPrices.js"
  "src/statics/Enemies.js"
  "src/Stats.js"
  "src/GameMap.js"
  "src/Graphic.js"
  "src/Inventory.js"
  "src/InventoryItem.js"
  "src/Player.js"
  "src/Enemy.js"
  "src/Item.js"
  "src/Weapon.js"
  "src/Armor.js"
  "src/battle/Rewarder.js"
  "src/battle/BattleEngine.js"
  "src/battle/BattleInfoHeader.js"
  "src/battle/Battle.js"
  "src/battle/BattleInitializer.js"
  "src/ClickArea.js"
  "src/Level.js"
  "src/Main.js"
  "src/Controls.js"
  "src/Boot.js"
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
