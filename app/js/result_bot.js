$("#android_bot").hide();

$(document).ready(function(){
    //$("#android_bot").hide();
    
    $("#ben").click(function(){ //Benign 

        $("#loading").hide();
        $("#main_group").attr("fill", "#a4c639");
        $("#result_text").text("App is BENIGN.");
        $("#android_bot").show();
        
    });
    
    
    $("#mal").click(function(){ //malware 

        $("#loading").hide();
        $("#main_group").attr("fill", "#d91e18");
        $("#result_text").text("App is MALICIOUS.")
        $("#android_bot").show();
        
    });
    
    $("#err").click(function(){ //error 

        $("#loading").hide();
        $("#main_group").attr("fill", "lightgrey");
        $("#result_text").text("Error! Please try again.")
        $("#android_bot").show();
        
    });
    
    
    
});