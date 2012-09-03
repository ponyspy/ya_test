$(document).ready(function() {

	function generateMenu() {
		var menu = ['.r1','.r2','.r3','.r4','.r5', '.r6'];
		var margin = 30;
		var name;
		$(menu.join()).off();
		
		$('.main_title').animate({
			'left':'15%'
		},700);
		
		for (var i in menu) {
			$(menu[i]).animate({
				left:'-=' + margin + '%'
			},700);
		margin-=5;
		}
		
		$(menu.join()).on({
			mouseover: function(e) {
				$(this).hoverFlow(e.type,{
					left:'-=5%'
				},200);
		  },
		  mouseout: function(e) {
				$(this).hoverFlow(e.type,{
					left:'+=5%'
				},200);
		  },
			click: function() {
				$(menu.join()).animate({
					'left':'100%'
				},{ duration: 500, queue: false });
				
				$('.main_title').animate({
					'left':'-=60%'
				},500);
				
				name = $('.'+this.className+'> .title').text();
				$('.'+this.className+'> .title').text('BACK');
				
				$(this).animate({
					'left':'0%'
				},500);
				
				$(this).off();
				$('.block').fadeIn(500, function() {
					$('.scroll-pane').jScrollPane();
				});

				$(this).click(function() {
					$(this).animate({
						'left':'100%'
					},500, function() {
						$('.block').hide();
						$('.'+this.className+'> .title').text(name);
						generateMenu();
					});
				});
			}
		});	
	}
	generateMenu();

	});