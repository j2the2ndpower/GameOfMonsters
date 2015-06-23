window.Navigation = window.Navigation || function() {
	document.getElementById('North').onclick = this.navigate;
    document.getElementById('West').onclick = this.navigate;
    document.getElementById('East').onclick = this.navigate;
    document.getElementById('South').onclick = this.navigate;

    document.getElementById('Map').onclick = this.openMap;
};

Navigation.prototype.navigate = function(e) {
    Game.Map.move(e.srcElement.innerHTML);
};

Navigation.prototype.openMap = function() {
    Game.Map.show();
};
