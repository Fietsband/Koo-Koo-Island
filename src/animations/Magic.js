window.Animations.Magic = (function() {
    var magicInfo, enemy, magicParticle, castMagicTimeout;
    var spells = {
        fire: {
            play: function() {
                magicInfo = window.Magic['fire'];
                enemy = window.currentBattle.enemy;
                magicParticle = createParticle("fire");

                castMagicTimeout = setTimeout(castSpell, magicInfo.castTime);
            }
        }
    };

    function castSpell() {
        dom.find("#battle-sequence-popup .field .player").appendChild(magicParticle);
        window.currentGame.player.increaseMagic(magicInfo.mp);
        setInitialPosition();
        moveSpellToEnemy();
    }

    function setInitialPosition() {
        move(magicParticle)
            .set('left', "0px")
            .set('top', "0px")
            .end()
    }

    function moveSpellToEnemy() {
        move(magicParticle)
            .set('left', enemy.enemyInformation.player_position.x + "px")
            .set('top', enemy.enemyInformation.player_position.y + "px")
            .duration(500)
            .ease('in')
            .end(endMagic);
    }

    function endMagic() {
        window.currentBattle.controls.enable.call(window.currentBattle);
        enemy.looseHealth(magicInfo.damage);
        magicParticle.remove();
        clearTimeout(castMagicTimeout);
    }

    function createParticle(type) {
        var particle = document.createElement("div");
        particle.className = "magic " + type;
        return particle;
    }

    return spells;
})();