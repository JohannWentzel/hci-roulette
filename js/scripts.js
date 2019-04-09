
window.onload = function() {
    
};

$(document).ready(function(){

    // jQuery methods go here...
    console.log("jquery");

    var min=0; 
    var max=keywords.length;  
    var random1 = Math.floor(Math.random() * (+max - +min)) + +min; 
    

    var random2 = Math.floor(Math.random() * (+max - +min)) + +min; 
    while (random2 === random1){
        random2 = Math.floor(Math.random() * (+max - +min)) + +min; 
    }
    $("#key1").text(keywords[random1]);
    $("#key2").text(keywords[random2]);
  
  });
