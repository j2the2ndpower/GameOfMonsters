window.Monster = window.Monster || function(config) {
	this.name = config.name || "Unknown";
	this.maxhp = 100;
	this.hp = 100;
    this.rarity = config.rarity || "common";
    this.setLevel(config.level || 1);
};

Monster.prototype.setLevel = function(level) {
    var rarehp = {
        "common": 0,
        "rare": 10,
        "epic": 20,
        "legendary": 30,
        "divine": 50
    };

    this.level = level;
    this.hp = this.maxhp = (100 + rarehp[this.rarity] * this.level);
};
