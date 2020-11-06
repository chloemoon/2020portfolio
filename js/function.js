$(function () {
  var $circle = $('.main-ball');
  $('html,body').animate({
    scrollLeft :0
  });
  $('.portfolio').hide();
 

  // 스크롤이동

//   $("html, body").mousewheel(function(event, delta) {
//     this.scrollLeft -= (delta * 70);
//     console.log(delta);
// });


// 스크롤 페이지네이션
$('.nav>p>a').on('click', function(){
  $('html,body').animate({
    scrollLeft :0
  });
});
$('.nav>.gnb>li').on('click', function(evt){
  nowIdx = $('.nav>.gnb>li').index(this);

  $('html,body').animate({
    scrollLeft : $('section').eq(nowIdx).offset().left
  });
  evt.preventDefault();
});
$('.scrollright > a').on('click', function(){
  $('html,body').animate({
    scrollLeft : $('section').eq(0).offset().left
  });
});
$('.scrollright2 > a').on('click', function(){
  $('html,body').animate({
    scrollLeft : $('section').eq(1).offset().left
  });
});
$('.scrollright3 > a').on('click', function(){
  $('html,body').animate({
    scrollLeft : $('section').eq(3).offset().left
  });
});
$('.scrollleft2 > a').on('click', function(e){
  $('html,body').animate({
    scrollLeft : 0
  });
  e.preventDefault();
});
$('.scrollleft3 > a').on('click', function(e){
  $('html,body').animate({
    scrollLeft : $('section').eq(0).offset().left
  });
  e.preventDefault();
});
$('.scrollleft4 > a').on('click', function(e){
  $('html,body').animate({
    scrollLeft : $('section').eq(1).offset().left
  });
  e.preventDefault();
});


  function moveCircle(e) {
    TweenLite.to($circle, 1.3, {
      css: {
        left: e.pageX,
        top: e.pageY
      },
    });
  }
  $(window).on('mousemove', moveCircle);
// about
const $btn_clse = $('.section-cont > .info_popup > .info_popup_inner > .btn_close > a');

$('.section-cont .introduce >.moreinfo').on('click', function(e){
  $('.info_popup').show();
  e.preventDefault();
});
$('.section-cont .introduce > .em').on('click', function(e){
  $('.info_popup').show();
  e.preventDefault();
});

$btn_clse.on('click', function(e){
  $('.section-cont > .info_popup ').hide();
  e.preventDefault();
});


// workboard
let nowIDX ;
$('.workboard>.workboard_wrapper>.boardbox').on('click', function(evt){
  nowIDX = $('.workboard>.workboard_wrapper>.boardbox').index(this);
  $(this).addClass('rotate');
  $('.workboard>.workboard_wrapper').css({
    animationPlayState: 'paused'
  })
  setTimeout(function(){
  $('.boardbox_tit').hide();
  $('.scrollleft3 > a').hide();
  $('.scrollright3 > a').hide();
  $('.workboard>.workboard_wrapper>.boardbox').eq(nowIDX).css({
    transform:'scale(2)',
    animation: 'boardRotate 1.5s linear forwards',
    backgroundColor: '#fff',
    zIndex: '250'
  });
  },1200);

  setTimeout(function(){
    $('.portfolio').fadeIn();
  },2200);
  // $('.portfolio').css({
  //   zIndex:'300'
  // })
  evt.preventDefault();
  
});



// portfolio

$('.xbox').on('click', function(evt){
  $('.boardbox_tit').show();
  $('.portfolio').hide();
  $('.scrollleft3 > a').show();
  $('.scrollright3 > a').show();
  $('.workboard > .workboard_wrapper > .boardbox.rotate').css({
    animation: 'boardRotate2 0.7s linear forwards',
    zIndex:'10'
  });
  $('.workboard > .workboard_wrapper > .boardbox.rotate > a').css({
    color:'#ACACAC',
    animation: 'boardRotate3 0.7s linear forwards',
  });
  

  setTimeout(function(){
    $('.workboard > .workboard_wrapper').css({
      animation: 'workboardMove 10s infinite linear'
    });
    $('.workboard>.workboard_wrapper>.boardbox').removeClass('rotate');
  },1200);
  evt.preventDefault();
});

const $glitchbox = $('.portfolio > .portfolio_frame > .portfolio_frame_inner > .glitch-frame > .glitch');
const $thmbs = $('.portfolio > .portfolio_frame > .portfolio_frame_inner > .portfolio_website > .portfolio_website_inner > li ');
const $title = $('.portfolio .port_website_title > .port_website_title_box > .port_web_title_right');
const $view = $('.portfolio >.port_connect >.port_det>.viewsites>a');
const $descript=$('.portfolio > .description > .des_inner > img');

let idx =0;
let nowidx = 0;

// portfolio prev
$('.portfolio >.portfolio_pagination>.pagination_box.first>.port_prev').on('click',function(e){
  if(idx>0){
    idx--;
  }else{
    idx=5;
  }

  $thmbs.filter('.active').stop().fadeOut(1000).removeClass('active');
  $thmbs.eq(idx).stop().fadeIn(1000).addClass('active');
  e.preventDefault();
  $glitchbox.filter('.show').stop().fadeOut(1000).removeClass('show');
  $glitchbox.eq(idx).stop().fadeIn(1000).addClass('show');
  $title.filter('.on').stop().fadeOut(1000).removeClass('on');
  $title.eq(idx).stop().fadeIn(1000).addClass('on');
  // viewsites
  $view.attr("href", $thmbs.eq(idx).children('img').filter('.first').attr('alt'));
  $descript.filter('.on').removeClass('on');
  $descript.eq(idx).addClass('on');
});

// portfolio next
$('.portfolio >.portfolio_pagination>.pagination_box.first>.port_next').on('click',function(e){
  if(nowidx<5){
    nowidx++;
  }else{
    nowidx=0;
  }

  $thmbs.filter('.active').stop().fadeOut(1000).removeClass('active');
  $thmbs.eq(nowidx).stop().fadeIn(1000).addClass('active');
  e.preventDefault();
  $glitchbox.filter('.show').stop().fadeOut(1000).removeClass('show');
  $glitchbox.eq(nowidx).stop().fadeIn(1000).addClass('show');
  $title.filter('.on').stop().fadeOut(1000).removeClass('on');
  $title.eq(nowidx).stop().fadeIn(1000).addClass('on');
  // viewsites
  $view.attr("href", $thmbs.eq(nowidx).children('img').filter('.first').attr('alt'));
  $descript.filter('.on').removeClass('on');
  $descript.eq(nowidx).addClass('on');
});



// 작은화살표

const $smallprev = $('.portfolio > .portfolio_tit > .portfolio_tit_prenext > .port_tit_pre');
const $smallnext = $('.portfolio > .portfolio_tit > .portfolio_tit_prenext > .port_tit_next ');


$smallprev.on('click',function(e){
  if(idx>0){
    idx--;
  }else{
    idx=5;
  }

  $thmbs.filter('.active').stop().fadeOut(1000).removeClass('active');
  $thmbs.eq(idx).stop().fadeIn(1000).addClass('active');
  e.preventDefault();
  $glitchbox.filter('.show').stop().fadeOut(1000).removeClass('show');
  $glitchbox.eq(idx).stop().fadeIn(1000).addClass('show');
  $title.filter('.on').stop().fadeOut(1000).removeClass('on');
  $title.eq(idx).stop().fadeIn(1000).addClass('on');
  // viewsites
  $view.attr("href", $thmbs.eq(idx).children('img').filter('.first').attr('alt'));
  $descript.filter('.on').removeClass('on');
  $descript.eq(idx).addClass('on');
});


$smallnext.on('click',function(e){
  if(nowidx<5){
    nowidx++;
  }else{
    nowidx=0;
  }

  $thmbs.filter('.active').stop().fadeOut(1000).removeClass('active');
  $thmbs.eq(nowidx).stop().fadeIn(1000).addClass('active');
  e.preventDefault();
  $glitchbox.filter('.show').stop().fadeOut(1000).removeClass('show');
  $glitchbox.eq(nowidx).stop().fadeIn(1000).addClass('show');
  $title.filter('.on').stop().fadeOut(1000).removeClass('on');
  $title.eq(nowidx).stop().fadeIn(1000).addClass('on');
  // viewsites
  $view.attr("href", $thmbs.eq(nowidx).children('img').filter('.first').attr('alt'));
  $descript.filter('.on').removeClass('on');
  $descript.eq(nowidx).addClass('on');
});


// description
$('.viewdetails').on('click', function(e){
  $('.portfolio > .description > .des_inner').stop().animate({
    scrollTop: 0
  })
  $('.description').fadeIn();
  $('.xbox').hide();
  $('.portfolio_pagination').hide();
  e.preventDefault();
});

$('.portfolio > .description  .des_exit > a ').on('click', function(e){
  $('.description').fadeOut();
  $('.xbox').show();
  $('.portfolio_pagination').show();
  e.preventDefault();
});


// uiux
const $nextpro = $('.lastsec > .last-descript > .last_des_title>.next-project');
const $prevpro = $('.lastsec > .last-descript > .last_des_title > a.prev-project ');
const $google = $('.lastsec > .last-tag > div > .google');
const $dodore = $('.lastsec > .last-tag > div > .dodo-recycle')
const $site = $('.lastsec > .last-descript > .last_des_title>.site');

$('.lastsec > .lastsec-bg>a').on('click', function(e){
  $('.lastsec > .last-descript').show();
  e.preventDefault();

});
$('.lastsec > .last-descript > .last_exit > a').on('click', function(e){
  $('.lastsec > .last-descript').hide();
  e.preventDefault();
});

$nextpro.on('click', function(e){
  $('.lastsec > .last-descript > .last_des_inner').stop().animate({
    scrollTop: 0
  });
  $('.lastsec > .last-descript > .last_des_inner > img').attr("src",$google.attr('alt'));
  $site.attr("href", "./images/google-site.png");
  $nextpro.hide();
  $prevpro.show();
  e.preventDefault();

});

$prevpro.on('click', function(e){
  $('.lastsec > .last-descript > .last_des_inner').stop().animate({
    scrollTop: 0
  });
  $('.lastsec > .last-descript > .last_des_inner > img').attr("src",$dodore.attr('alt'));
  $site.attr("href", "https://chloemoon.github.io/dodorecycle/");
  $prevpro.hide();
  $nextpro.show();  
  e.preventDefault();
});


$('.lastsec > .last-tag > div > .dodo-recycle ').on('click', function(e){
  $('.lastsec > .last-descript > .last_des_inner').stop().animate({
    scrollTop: 0
  })
  $('.lastsec > .last-descript').show();
  $('.lastsec > .last-descript > .last_des_inner > img').attr("src",$dodore.attr('alt'));
  $site.attr("href", "https://chloemoon.github.io/dodorecycle/")
  e.preventDefault();
});
$('.lastsec > .last-tag > div > .google ').on('click', function(e){
  $('.lastsec > .last-descript > .last_des_inner').stop().animate({
    scrollTop: 0
  })
  $('.lastsec > .last-descript').show();
  $('.lastsec > .last-descript > .last_des_inner > img').attr("src",$google.attr('alt'));
  $site.attr("href", "./images/google-site.png")
  e.preventDefault();
});

});



