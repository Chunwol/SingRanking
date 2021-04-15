
$(function() {

    $(".HeaderNavHome").on("click", function() {
        location.href = "/";
    });
    
    $(".HeaderNavMenu_1").on("click", function() {
        location.href = "/tjKpop";
    });
    
    $(".HeaderNavMenu_2").on("click", function() {
        location.href = "/tjJpop";
    });
    
    $(".HeaderNavMenu_3").on("click", function() {
        location.href = "/tjPop";
    });

    $('#HeaderNavMenu_1_1').mouseover( function(){
        $(".HeaderNavMenu_1").css("opacity","0.6")
      }).mouseout(function(){
        if((window.location.pathname != '/tjKpop') || (window.location.pathname != '/'))
            $(".HeaderNavMenu_1").css("opacity","1")
    }); 

    $('#HeaderNavMenu_2_1').mouseover( function(){
        $(".HeaderNavMenu_2").css("opacity","0.6")
      }).mouseout(function(){
        if(window.location.pathname != '/tjJpop')
            $(".HeaderNavMenu_2").css("opacity","1")
    }); 

    $('#HeaderNavMenu_3_1').mouseover( function(){
        $(".HeaderNavMenu_3").css("opacity","0.6")
      }).mouseout(function(){
        if((window.location.pathname != '/tjPop'))
            $(".HeaderNavMenu_3").css("opacity","1")
    }); 



    $('#HeaderNavMenu_1_2').mouseover( function(){
        $(".HeaderNavMenu_1").css("opacity","0.6")
      }).mouseout(function(){
        if(window.location.pathname != '/Notion/')
            $(".HeaderNavMenu_1").css("opacity","1")
    }); 

    $('#HeaderNavMenu_2_2').mouseover( function(){
        $(".HeaderNavMenu_2").css("opacity","0.6")
      }).mouseout(function(){
        if((window.location.pathname != '/Type/') && (window.location.pathname != '/Type/1/') && (window.location.pathname != '/Type/2/') && (window.location.pathname != '/Type/3/') && (window.location.pathname != '/Type/4/'))
            $(".HeaderNavMenu_2").css("opacity","1")
    }); 

    $('#HeaderNavMenu_3_2').mouseover( function(){
        $(".HeaderNavMenu_3").css("opacity","0.6")
      }).mouseout(function(){
        if((window.location.pathname != '/Contact/'))
            $(".HeaderNavMenu_3").css("opacity","1")
    });
    


        
    $(".HeaderNavMenuIcon").click(function() {
        $("#menu,.page_cover,html").addClass("open");
      });
      
      $(".page_cover, .close").click(function() {
        console.log($("#menu").hasClass("open"))
        if ($("#menu").hasClass("open")) {
            $("#menu,.page_cover,html").removeClass("open");
        }
      });




      $('.KakaoImage').mouseover( function(){
        $(".KakaoImage").css("box-shadow", "0 8px 12px 0 rgba(81,99,120,0.2)");
      }).mouseout(function(){
        $(".KakaoImage").css("box-shadow", "0 0px 0px 0 rgba(81,99,120,0.2)");
      }); 


});