$(function() {

  var elems = $('.hide-scroll');
  var config = {
    rootMargin: '0px 0px 0px 0px', // top right bottom left
    threshold: 0.1 //frequenza di aggiormento
  };


  function onIntersection(els) {
    els.forEach(function(el){
      if (el.intersectionRatio > 0) {
        observer.unobserve(el.target);
        //fai qualche cosa su el.target
        //$(el.target).find('span').html(el.intersectionRatio)
        //console.log(el);
        $(el.target).css({opacity : Math.round(el.intersectionRatio)});
      }
    });
  }

  if (!('IntersectionObserver' in window)) {
    //FALLBACK
    elems.css({opacity : 1});
  } else {
    var observer = new IntersectionObserver(onIntersection, config);
    elems.each(function(index, elem){
      observer.observe(elem);
    });
    $(window).on({
      scroll:function(){
        elems.each(function(index, elem){
          observer.observe(elem);
        });
      }
    });
  }

});
