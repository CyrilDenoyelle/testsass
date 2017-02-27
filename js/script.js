(function(){
	app = {
		init: function(){
			console.log('appinit');
			this.listener();
		},
		c: Object({
			r1: 255, g1: 255, b1: 255, r2: 0, g2: 0, b2: 0, degr: 45
		}),
		rnb:function (min, max){
			// if(min && max){
				if(min < max){
					return Math.floor(min+Math.random()*(max-min));
				}else{
					return Math.floor(max+Math.random()*(min-max));
				}
			// }
		},
		listener: function(){
			var c = this.c,
			t;
			function affichage(select) {
				clearTimeout(t);
				t = setTimeout(function(){
					if(select && select !== 'rnd'){
						var nom = $(select).attr('name');
						var val = parseInt($(select).val());
						c[nom] = val;
					}if(select == 'rnd'){
						c.degr = app.rnb(0, 360);
						c.r1 = app.rnb(0, 255); c.g1 = app.rnb(0, 255);	c.b1 = app.rnb(0, 255);
						c.r2 = app.rnb(0, 255); c.g2 = app.rnb(0, 255); c.b2 = app.rnb(0, 255);
						$('input').each(function(){
							var name = $(this).attr('name');
							$(this).val(c[name])
						})
					}
					$('input').each(function(){
						$(this).next().text($(this).val())
					})
					$('body').css("background", "linear-gradient("+c.degr+"deg, rgb("+c.r1+","+c.g1+","+c.b1+"), rgb("+c.r2+","+c.g2+","+c.b2+"))");
				}, 1)
			}
			affichage();
			$('input').on('mousedown', function(){
				affichage(this);
				$('input').on('mousemove', function(){
					affichage(this);
				});
				$('input').on('mouseleave', function(){
					$('input').unbind('mousemove');
					$('input').unbind('mouseleave');
				});
			});
			$('input').on('mouseup', function(){$('input').unbind('mousemove').unbind('mouseleave')})
			$('#rand').on('click', function(){
				affichage("rnd");
			})
		}
	}
})()


$(document).ready(function(){
	console.log("coucou template");
	app.init();
})