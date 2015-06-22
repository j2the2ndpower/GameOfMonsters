window.Player = window.Player || function() {
	this.name = "";
	this.xp = 0;
	this.maxhp = 100;
	this.hp = 100;
	this.level = 1;
	this.class = "Rogue";
};

Player.xpToLevel = function(level) {
	return Math.pow(level,2) * 100;
}

Player.prototype.update = function(name) {
    document.getElementById('characterName').innerHTML = this.name;
    document.getElementById('characterInfo').innerHTML = 'Lvl ' + this.level + ' ' + this.class;
    4
    var hpPercent = Math.round(this.hp / this.maxhp * 100);
    document.getElementById('hpBar').value = hpPercent;
    document.getElementById('hpText').innerHTML = hpPercent + '%';

    var xpPercent = Math.round(this.xp / Player.xpToLevel(this.level) * 100);
    document.getElementById('xpBar').value = xpPercent;
    document.getElementById('xpText').innerHTML = xpPercent + '%';
};

Player.prototype.gainXP = function(xp) {
	this.xp += xp;
	while (this.xp > Player.xpToLevel(this.level)) {
		this.xp -= Player.xpToLevel(this.level);1
		this.gainLevel();
	} 

	this.update();
};

Player.prototype.gainLevel = function () {

	this.level += 1;	
	this.maxhp += 100;
	this.hp = this.maxhp;

};