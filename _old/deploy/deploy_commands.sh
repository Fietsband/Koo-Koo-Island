echo "> Starting deploy"
cd /www/
rm -rf Koo-Koo-Island
echo "> Removed old project"

git clone https://github.com/grdw/Koo-Koo-Island.git
cd Koo-Koo-Island

find src/ -type f | grep -v application.min.js | xargs rm
rm development.html
echo "> Removing source files"

find src/ -type d -empty | xargs rm -rf
echo "> Removing empty dirs"

cache-purge http://grdw.nl
echo "> Finished"
