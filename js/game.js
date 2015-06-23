window.Game = window.Game || function() {
	this.player = new Player();
};

window.onload = function() {
	GOM = new Game();
	GOM.player.name = prompt("What is your name, Adventurer?");
	GOM.player.update();

    GOM.navigation = new Navigation();
    GOM.map = new gameMap();

    var room = new Room({
        name: "Forest",
        desc: "You have entered shadows upon shadows of very tall trees with a path leading north, east, west or south. As the list goes on and on and you find yourself all kinds of confused, the stupidity slaps your smugged look off your face as you realized how lost and hopeless you've become. You wondered too far into the forest and the chances of you leaving with your life has become one of a thousand. I shall keep rambling on and on for a precise measurement in order to determine the length of which I may jott down in the size of this toolish device."
    });

    room.addMonster(new Monster({
        name: "wild yak",
        rarity: "common",
        level: 1
    }));

    room.addDirection("East");
    room.addDirection("West");
    room.addDirection("North");
    room.addDirection("South");

    GOM.player.setRoom(room);
}
