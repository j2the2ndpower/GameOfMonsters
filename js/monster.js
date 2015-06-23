window.Monster = window.Monster || function(name, level, rarity) {
	this.name = name;
	this.maxhp = 100;
	this.hp = 100;
    this.rarity = rarity || "common";
    this.setLevel(level);
};

Monster.setLevel = function(level) {
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
