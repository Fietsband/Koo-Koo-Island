Graphic.prototype = {
  addChild: function(domId){
    var gameLevel = document.getElementById("game-level");
    var pre = document.createElement("PRE");
    pre.innerHTML = this.asciiString;
    gameLevel.appendChild(pre);
  }
}

function Graphic(asciiString){
  this.asciiString = asciiString.join("\n");
}

$.domReady(function(){
  island = new Graphic([
    "                    _",
    "                   /_'. _",
    "                 _   \\ / '-.",
    "                < ``-.;),--'`",
    "                 '--. &lt;/()`--.",
    "                   / |/-/`'._\\ ",
    "                   |/ |=|",
    "                      |_|",
    "                 ~`   |-| ~~      ~",
    "             ~~  ~~ __|=|__   ~~",
    "           ~~   .-'`  |_|  ``\"\"-._   ~/_~",
    "            ~~.'      |=|         '-./_/ ~",
    "              |      \`\"\"\"\`           \/   ~",
    "          ~   \\                      | ~~",
    "               '-.__.--._         .-'",
    "                    ~~   `--.o.-'`    ~~",
    "            ~~         ~          ~",
    "                   ~~         ~~     ~"
  ])

  island.addChild("game-level");
});
