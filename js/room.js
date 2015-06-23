window.Room = window.Room || function(config) {
	this.name = config.name;
    this.desc = config.desc;
    this.monsters = [];
    this.directions = [];
};

Room.prototype.addMonster = function(monster) {
    if (monster instanceof Monster) {
        this.monsters.push(monster);
    } else {
        throw("Argument is not a monster.");
    }
};

Room.prototype.addDirection = function(direction) {
    if (["North", "South", "East", "West"].indexOf(direction) >= 0) {
        this.directions.push(direction);
    } else {
        throw("Argument is not a direction.");
    }
};

Room.prototype.getMonsters = function() {
    return this.monsters;
};

Room.prototype.getDirections = function() {
    return this.directions;
};
