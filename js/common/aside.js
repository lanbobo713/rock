$(function(){
    $(".menuHead div").bind('click',function(envet){
        if(!$(this).hasClass("current")){
            $(this).addClass("current");
            $(this).siblings("ul").show();
            $(this).parent().siblings(".menuHead").find('div').each(function(){
               var self = this;
               $(self).removeClass("current");
               $(self).siblings('ul').hide();
            });
        }else{
            $(this).removeClass("current");
            $(this).siblings("ul").hide();
        }
        envet.stopPropagation();
    });
    $('.menuHead ul li').bind('click',function(){
        $('.menuHead ul li').removeClass('active');
        $(this).addClass('active');
        
        $(this).siblings('li').each(function(){
            var self = this;
            $(self).removeClass('active');
        });
    })
})