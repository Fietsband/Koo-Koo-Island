Inventory.prototype = {
    getInventory: function() {
        return GameData.player.inventory;
    },

    hasSomethingInInventory: function() {
        var inventory = this.getInventory();
        return (inventory.items.length > 0 ||
            inventory.weapons.length > 0 ||
            inventory.armors.length > 0 ||
            inventory.magic.length > 0 ||
            inventory.skills.length > 0)
    },

    checkInventory: function() {
        if (GameData.player.inventory.items.length > 0) {
            this.setupInventoryButton();
        }
        if (GameData.player.mp[1] > 0) {
            this.inventoryDom.querySelector("#magic").classList.remove("disabled");
            this.inventoryDom.querySelector(".magic").classList.remove("disabled");
        }
        this.healthBar.set(GameData.player.hp[0], GameData.player.hp[1]);
        this.magicBar.set(GameData.player.mp[0], GameData.player.mp[1]);
    },

    setupInventoryButton: function() {
        var inventoryButton = dom.findId("open-inventory-button");
        inventoryButton.style.display = "block";
        window.currentGame.inventoryPopUp = new Popup("inventory-popup", this.checkInventory.bind(this));
        this.applyInventorySelectBoxListeners();
        inventoryButton.onclick = function() {
            window.currentGame.inventoryPopUp.show();
        }
    },

    applyInventorySelectBoxListeners: function() {
        this.weaponSelectBox.onchange = this.setSelectedWeapon.bind(this);
        this.armorSelectBox.onchange = this.setSelectedArmor.bind(this);
    },

    setSelectedWeapon: function(id) {
        var identifier = typeof(id) == "string" ? id : id.target.value;;
        $.setSelectBoxSelected(this.weaponSelectBox, identifier);
        window.currentGame.player.setCurrentWeapon(identifier);
    },

    setSelectedArmor: function(id) {
        var identifier = typeof(id) == "string" ? id : id.target.value;
        $.setSelectBoxSelected(this.armorSelectBox, identifier);
        window.currentGame.player.setCurrentArmor(identifier);
    },

    updateGraphicalWeaponPreview: function(identifier) {
        var weaponParts = dom.find("#inventory-stash .weapons .weapon-preview span", true);
        $.each(window.Weapons[identifier].large_graphic, function(i, graphicPart) {
            weaponParts[i].innerHTML = graphicPart;
        });
    },

    updateGraphicalArmorPreview: function(identifier) {
        var armorParts = dom.find("#inventory-stash .armors .armor-preview span", true);
        $.each(window.Armors[identifier].large_graphic, function(i, graphicPart) {
            armorParts[i].innerHTML = graphicPart;
        });
    },

    addItem: function(scope, item) {
        GameData.player.inventory[scope].push(item.identifier);
        item.add();
        this.checkInventory();
    }
}

function Inventory() {
    this.inventoryDom = dom.find("#inventory-stash");
    this.weaponSelectBox = dom.find("#inventory-stash #select-weapons select");
    this.armorSelectBox = dom.find("#inventory-stash #select-armor select");
    this.healthBar = new StatBar("#inventory-stash #health", ".health-stats-left", ".total-health", ".healthbar .inner-bar");
    this.magicBar = new StatBar("#inventory-stash #magic", ".magic-stats-left", ".total-magic", ".magicbar .inner-bar");
    this.healthBar.set(GameData.player.hp[0], GameData.player.hp[1]);
    this.magicBar.set(GameData.player.mp[0], GameData.player.mp[1]);
}