(function(){
	app = {
		init: function(){
			console.log('appinit');
			this.listener();
		},
		listener: function(){
			var c = {
				r1: 255, g1: 255, b1: 255, r2: 0, g2: 0, b2: 0, degr: 45
			}
			var t;
			function affichage(select) {
				clearTimeout(t);
				t = setTimeout(function(){
					if(select){
						var nom = $(select).attr('name');
						var val = parseInt($(select).val());
						c[nom] = val;
					}
					$('body').css("background", "linear-gradient("+c.degr+"deg, rgb("+c.r1+","+c.g1+","+c.b1+"), rgb("+c.r2+","+c.g2+","+c.b2+"))");
				}, 1)
			}
			affichage();
			$('input').on('mousemove', function(){affichage(this);});$('input').on('mousedown', function(){affichage(this);})
		}
	}
})()


$(document).ready(function(){
	console.log("coucou template");
	app.init();
})