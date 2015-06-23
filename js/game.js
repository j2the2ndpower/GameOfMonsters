window.Game = window.Game || function() {
	this.player = new Player();
};

window.onload = function() {
	GOM = new Game();
	GOM.player.name = prompt("What is your name, Adventurer?");
	GOM.player.update();

    GOM.navigation = new Navigation();
}
