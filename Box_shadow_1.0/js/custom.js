$(document).ready(function () {
    var v_b_isMouseDown = false;
    $('.color-grade').on('mousedown', function (event) {                
        v_b_isMouseDown = true;
        $(document).mousemove(function (event1){
            if (v_b_isMouseDown) {
                var y = Math.round(event1.pageY - $('.color-grade').offset().top);
                if (y >= 0 && y <= 256) {
                    $('.color-level').css('top', y);                    
                };
            }else{
                $(document).off('mousemove',this);           
            }
        });        
    }).on('mouseup',function(){
         v_b_isMouseDown = false;         
    });
    $('span#color-button-1').on('click', function () {
        if ($('div.color-area').hasClass('active')) {
            $('div.color-area').removeClass('active');
        } else {
            $('div.color-area').addClass('active');
        };
    });    
});
