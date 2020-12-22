import Vue from 'vue'
import $ from 'jquery'

Vue.prototype.$miscload = miscload;

function miscload(){

    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    $('.horizontal-menu .nav li a').each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    $('[data-toggle="minimize"]').on("click", function() {
        if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
          body.toggleClass('sidebar-hidden');
        } else {
          body.toggleClass('sidebar-icon-only');
        }
      });
    
      //checkbox and radios
      $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
    
      //fullscreen
      $("#fullscreen-button").on("click", function toggleFullScreen() {
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
          if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          }
        } else {
          if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      })
}

/* function addActiveClass(element) {
    if (current === "") {
      //for root url
      if (element.attr('href').indexOf("index.html") !== -1) {
        element.parents('.nav-item').last().addClass('active');
        if (element.parents('.sub-menu').length) {
          element.closest('.collapse').addClass('show');
          element.addClass('active');
        }
      }
    } else {
      //for other url
      if (element.attr('href').indexOf(current) !== -1) {
        element.parents('.nav-item').last().addClass('active');
        if (element.parents('.sub-menu').length) {
          element.closest('.collapse').addClass('show');
          element.addClass('active');
        }
        if (element.parents('.submenu-item').length) {
          element.addClass('active');
        }
      }
    }
  } */

  function applyStyles() {
    //Applying perfect scrollbar
    if (!body.hasClass("rtl")) {
      if (body.hasClass("sidebar-fixed")) {
        var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
      }
    }
  }

