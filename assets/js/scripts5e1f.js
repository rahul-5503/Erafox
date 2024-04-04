jQuery(function($){'use strict';(function(){}());(function(){$('#status').fadeOut();$('#preloader').delay(200).fadeOut('slow');}());(function(){var navbar=$('.navbar-custom'),width=Math.max($(window).width(),window.innerWidth),mobileTest;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){mobileTest=true;}
navbarSubmenu(width);hoverDropdown(width,mobileTest);$(window).resize(function(){var width=Math.max($(window).width(),window.innerWidth);hoverDropdown(width,mobileTest);});function navbarSubmenu(width){if(width>767){$('.navbar-custom .navbar-nav > li.dropdown').hover(function(){var MenuLeftOffset=$('.dropdown-menu',$(this)).offset().left;var Menu1LevelWidth=$('.dropdown-menu',$(this)).width();if(width-MenuLeftOffset>Menu1LevelWidth*2){$(this).children('.dropdown-menu').css({'right':'auto','left':'0'});}else{$(this).children('.dropdown-menu').css({'right':'0','left':'auto'});}
if($('.dropdown',$(this)).length>0){var Menu2LevelWidth=$('.dropdown-menu',$(this)).width();if(width-MenuLeftOffset-Menu1LevelWidth<Menu2LevelWidth){$(this).children('.dropdown-menu').addClass('left-side');}else{$(this).children('.dropdown-menu').removeClass('left-side');}}});}}
function hoverDropdown(width,mobileTest){if((width>767)&&(mobileTest!==true)){$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');var delay=0;var setTimeoutConst;$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function(){var $this=$(this);setTimeoutConst=setTimeout(function(){$this.addClass('open');$this.find('.dropdown-toggle').addClass('disabled');},delay);},function(){clearTimeout(setTimeoutConst);$(this).removeClass('open');$(this).find('.dropdown-toggle').removeClass('disabled');});}else{$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');$('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click',function(event){event.preventDefault();event.stopPropagation();$(this).parent().siblings().removeClass('open');$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');$(this).parent().toggleClass('open');});}}
$(document).on('click','.navbar-collapse.in',function(e){if($(e.target).is('a')&&$(e.target).attr('class')!='dropdown-toggle'){$(this).collapse('hide');}});}());$("#search-box").hide();var searchIcon=$(".search-icon");var searchBox=$("#search-box");searchIcon.on('click',function(event){searchIcon.toggleClass("active");searchBox.slideToggle();});$('a.page-scroll').on('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top-60},1500,'easeInOutExpo');event.preventDefault();});$(window).scroll(function(){if($(window).scrollTop()>10){$('.main-nav, .navbar-fixed-top, .tt-default-nav').addClass("sticky");}else{$('.main-nav, .navbar-fixed-top, .tt-default-nav').removeClass("sticky");}});$('.nav-bars, .tt-nav').on('click',function(){$('.nav-bars').toggleClass('navbar-on');$('.tt-nav').fadeToggle();$('.tt-nav').removeClass('nav-hide');});$(".tt-fullHeight").height($(window).height());$(window).resize(function(){$(".tt-fullHeight").height($(window).height());});if($('.player').length>0){jQuery(".player").mb_YTPlayer();}
if($('.rotate').length>0){$(".rotate").textrotator({animation:"dissolve",separator:"|",speed:3000});}
if($('.tt-banner').length>0){jQuery(".tt-banner").revolution({delay:10000,startwidth:1170,startheight:500,onHoverStop:"off",hideThumbs:10,hideTimerBar:"on",navigationType:"none",navigationStyle:"preview1",fullWidth:"off",fullScreen:"on",fullScreenOffsetContainer:""});}
if($('.tt-banner-gallery').length>0){jQuery(".tt-banner-gallery").revolution({delay:9000,startwidth:1170,startheight:500,onHoverStop:"off",hideThumbs:10,hideTimerBar:"on",navigationType:"none",navigationStyle:"preview1",fullWidth:"off",fullScreen:"on",fullScreenOffsetContainer:""});}
$('.progress').on('inview',function(event,visible,visiblePartX,visiblePartY){if(visible){$.each($('div.progress-bar'),function(){$(this).css('width',$(this).attr('aria-valuenow')+'%');});$(this).off('inview');}});$('.counter-section').on('inview',function(event,visible,visiblePartX,visiblePartY){if(visible){$(this).find('.timer').each(function(){var $this=$(this);$({Counter:0}).animate({Counter:$this.text()},{duration:2000,easing:'swing',step:function(){$this.text(Math.ceil(this.Counter));}});});$(this).off('inview');}});$('#factsTwo').on('inview',function(event,visible,visiblePartX,visiblePartY){if(visible){$(this).find('.timer').each(function(){var $this=$(this);$({Counter:0}).animate({Counter:$this.text()},{duration:2000,easing:'swing',step:function(){$this.text(Math.ceil(this.Counter));}});});$(this).off('inview');}});$('.tt-lightbox').magnificPopup({type:'image',mainClass:'mfp-fade',removalDelay:160,fixedContentPos:false});$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});if($('#blogGrid').length>0){$('#blogGrid').masonry({itemSelector:'.blog-grid-item',});}
(function(){var owl=$(".recent-project-carousel");owl.owlCarousel({items:5,itemsDesktop:[1024,4],itemsDesktopSmall:[900,3],itemsTablet:[600,2],itemsMobile:[479,1],pagination:false});$(".btn-next").on('click',function(){owl.trigger('owl.next');})
$(".btn-prev").on('click',function(){owl.trigger('owl.prev');})}());(function(){var owl=$(".partner-carousel");owl.owlCarousel({items:4,itemsDesktop:[1024,4],itemsDesktopSmall:[900,3],itemsTablet:[600,2],itemsMobile:[479,1],pagination:false});}());$('.bwWrapper').BlackAndWhite({hoverEffect:true,webworkerPath:false,invertHoverEffect:false,intensity:1,speed:{fadeIn:200,fadeOut:800},onImageReady:function(img){}});if($('#gallerySlider').length>0){$('#gallerySlider').flexslider({animation:"slide",controlNav:"thumbnails",directionNav:true})}
if($('.client-slider-v3').length>0){$('.client-slider-v3').flexslider({animation:"slide",controlNav:"thumbnails",directionNav:true})}
if($('.client-slider-v4').length>0){$('.client-slider-v4').flexslider({animation:"slide",controlNav:"thumbnails",directionNav:true})}
$('#contactForm').on('submit',function(e){e.preventDefault();var $action=$(this).prop('action');var $data=$(this).serialize();var $this=$(this);$this.prevAll('.alert').remove();$.post($action,$data,function(data){if(data.response=='error'){$this.before('<div class="alert alert-danger">'+data.message+'</div>');}
if(data.response=='success'){$this.before('<div class="alert alert-success">'+data.message+'</div>');$this.find('input, textarea').val('');}},"json");});});$(window).load(function(){"use strict";(function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){}else{$(window).stellar({horizontalScrolling:false,responsive:true});}}());if($('#portfolio-grid').length>0){var $grid=$('#portfolio-grid');$grid.shuffle({itemSelector:'.portfolio-item'});$('#filter li').on('click',function(e){e.preventDefault();$('#filter li').removeClass('active');$(this).addClass('active');var groupName=$(this).attr('data-group');$grid.shuffle('shuffle',groupName);});}});