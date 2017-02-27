(function(){
	app = {
		init: function(){
			console.log('appinit');
			this.listener();
		},
		listener: function(){
			var r1 = 255, g1 = 255, b1 = 255, r2 = 0, g2 = 0, b2 = 0, degr = 45;
			
			$('body').css("background", "linear-gradient("+degr+"deg, rgb("+r1+","+g1+","+b1+"), rgb("+r2+","+g2+","+b2+"))");
			$('input').on('mousemove', function(){

				name = $(this).attr('name');
				val = parseInt($(this).val());
				if(name == "r1"){r1 = val;}
				if(name == "g1"){g1 = val;}
				if(name == "b1"){b1 = val;}
				if(name == "r2"){r2 = val;}
				if(name == "g2"){g2 = val;}
				if(name == "b2"){b2 = val;}
				if(name == "degr"){degr = val;}
				// console.log(r1, g1, b1, r2, g2, b2);
				$('body').css("background", "linear-gradient("+degr+"deg, rgb("+r1+","+g1+","+b1+"), rgb("+r2+","+g2+","+b2+"))");
			})
		}
	}
})()


$(document).ready(function(){
	console.log("coucou template");
	app.init();
})