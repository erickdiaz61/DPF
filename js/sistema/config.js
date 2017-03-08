/*!
 * config.js
 *
 * @version 1.0
 *
 * @author Vanessa Alejandra Muñoz Corbalá
 * @date Marzo 3, 2017
 *
 * @Copyright (c) 2013-2017 Telstock, S.A. de C.V. Todos los Derechos Reservados.
 */
 
 // Aside Menu, para desplegar submenus submenus
$("ul.collapse > li").on("click", function() {
    $(this).toggleClass("active");
  });  

  
$('ul.collapse > li').on('click', function(){
		$(this).addClass('active').removeClass('active');
			if ( $(this).is('.active')) {
					$(this).removeClass('active');
				}
			else {
					$('ul.collapse > li.active').removeClass('active');
					$(this).addClass('active');
				}
	});
	
// Agrega a cada li del menú lateral la clase open
	$('.menu li').on('click', function(){
		$(this).addClass('closed').removeClass('closed');
			if ( $(this).is('.closed')) {
					$(this).removeClass('closed');
				}
			else {
					$('.menu li.open').removeClass('open');
					$(this).addClass('open');
				}
	});
		
// Agrega a cada li la clase active
	$('.navbar-nav li').on('click', function(){
		$(this).addClass('active').removeClass('active');
			if ( $(this).is('.active')) {
					$(this).removeClass('active');
				}
			else {
					$('.navbar-nav li.active').removeClass('active');
					$(this).addClass('active');
				}
	});

 
// Activa Tooltip
	$('[data-toggle="tooltip"]').tooltip({ html : true });
	
// Activa Popover
	 $('.popovers').popover({ html : true });

/* ------------------------------------------------------------------- */
	/*	Logout
	/* ------------------------------------------------------------------- */
$('.logout-js').click(function(){
	 $('body').addClass('logout');
	 setTimeout(logout,400)
	 return false; 
  });
  function logout(){		
	  var linky = $('.logout-js').data('rel');
	  window.location.href = "login.htm";		
  }

// Window.resize functions	
$(window).resize(function(){ });

// Window.load functions
$(window).load(function(){ });