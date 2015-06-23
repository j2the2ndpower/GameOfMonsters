window.gameMap = window.gameMap || function() {
	var me = this;
    this.mapRooms={};
    GOM.player.coords={
        x:2,
        y:2
    };
    $.getJSON( "json/biomes.json", function(data) {
        me.genBiome(2,2);
    })
    .done(function() {
        console.log( "second success" );
    })
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        console.log( "complete" );
    });
};



gameMap.prototype.genBiome = function(x,y){
    console.log("Generating Biome");
};
