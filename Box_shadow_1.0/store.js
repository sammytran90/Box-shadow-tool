$(document).ready(function(){
    $('.color-grade').on('mousedown mouseup',change_color_level);
});
var color_maker = {
    color_grade : {
        mouse_hold : false,
        mousedown_click : function(event){            
            if(event.type == "mousedown"){
                mouse_hold = true;
                console.log(mouse_hold);
            }else{
                mouse_hold = false;
                console.log(mouse_hold);
            }
        },
        change_color_level: function(){
            
        }
    }
    
}
