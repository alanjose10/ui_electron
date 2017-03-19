

$(document).ready(function(){
    
    $("#submit").click(function(){
  
        (function loop(i){
            setTimeout(function(){
            $("#progressbar li").eq(5-i).addClass("error");
            if(--i)
                loop(i);
            },500*i)

        })(5);
        
    });
    
});



