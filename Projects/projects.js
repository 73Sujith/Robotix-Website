$(function(){
    $('.carous-item').eq(0).addClass('active');
    var total = $('.carous-item').length;
    var current = 0;
    setInterval(Hi, 3000);
    function Hi(){
      $('#moveright').click();
    }
    $('#moveright').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveleft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carous-item').eq(prev).removeClass('active');
             $('.carous-item').eq(slide).addClass('active');
        setTimeout(function(){
  
        },800);
      
  
      
      console.log('current '+current);
      console.log('prev '+prev);
    }
  });