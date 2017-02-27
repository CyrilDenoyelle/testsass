(function(){
	app = {
		init: function(){
			console.log('appinit');
		}
	}
})()


$(document).ready(function(){
	console.log("coucou template");
	app.init();
})