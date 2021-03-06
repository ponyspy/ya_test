$(document).ready(function() {

	function generateMenu() {
		var menu = ['.r1','.r2','.r3','.r4','.r5','.r6'];
		var margin = 30;
		var name;
		
		$(menu.join()).off();
		
		$('.main_title').animate({
			'left':'15%'
		},700);
		
		//Открываем гармошку
		for (var i=0; i < menu.length; i++) {
			$(menu[i]).animate({
				left:'-=' + margin + '%'
			},700);
		margin-=5;
		}
		
		//Используем плагин hoverFlow чтобы обнулять очередь при быстром наведении мыши, .stop() слишком резко обрывает анимацию
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
				
				//Сохраняем имя лепесточка и меняем его на 'BACK' при раскрытии раздела
				name = $('.' + this.className + '> .title').text();
				$('.' + this.className+ '> .title').text('BACK');
				
				$(this).animate({
					'left':'0%'
				},500);
				
				$(this).off();
				
				$('.block').fadeIn(500, function() {
					$('.scroll-pane').jScrollPane();
					$('.button').click(function() {
						var params = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=900px,height=600px'
						window.open('js_print.html', 'Print', params)
					});
				});
				
				//Проверяем туда ли мы попали мышкой
				$(this).click(function(event) {
					if (this === event.target) {
						$(this).animate({
							'left':'100%'
						},500, function() {
							$('.block').hide();
							//Возвращаем имя лепесточку
							$('.' + this.className + '> .title').text(name);
							generateMenu();
						});
					}
				});

			}
		});	
	}
	generateMenu();

});