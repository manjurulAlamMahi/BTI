// ---- Menu fix start here

$(function(){
    var topSpace = $('.top_header').offset().top;
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > topSpace){
            $('.top_header').addClass('menu_fix')
        }
        else{
            $('.top_header').removeClass('menu_fix')
    
        }
    })

    
});

// ---- Menu fix end here


// ---- Banner part start here
if($(window).width() < 360)
    {
        $(function(){
            accordion.init({
                id: 'accordion',
                expandWidth: 260,
                itemWidth: 100,
                extpand: 0,
                autoPlay: false,
                delay: 3000,
                animateTime: 400,
                borderWidth: 1,
                autoPlay: false,
                deviator: 30,
                bounce:"-50px"
              });
            
        });
    }
    
    else if($(window).width() < 360){
        
        $(function(){
            accordion.init({
                id: 'accordion',
                expandWidth: 280,
                itemWidth: 120,
                extpand: 0,
                autoPlay: false,
                delay: 3000,
                animateTime: 400,
                borderWidth: 1,
                autoPlay: false,
                deviator: 30,
                bounce:"-50px"
              });
            
        });
    }

    else if($(window).width() < 420){
        
        $(function(){
            accordion.init({
                id: 'accordion',
                expandWidth: 340,
                itemWidth: 160,
                extpand: 0,
                autoPlay: false,
                delay: 3000,
                animateTime: 400,
                borderWidth: 1,
                autoPlay: false,
                deviator: 30,
                bounce:"-50px"
              });
            
        });
    }
    
    else if($(window).width() < 767){
        
        $(function(){
            accordion.init({
                id: 'accordion',
                expandWidth: 340,
                itemWidth: 160,
                extpand: 0,
                autoPlay: false,
                delay: 3000,
                animateTime: 400,
                borderWidth: 1,
                autoPlay: false,
                deviator: 30,
                bounce:"-50px"
              });
            
        });
    }
    
    else if($(window).width() < 1068){
        
        $(function(){
            accordion.init({
                id: 'accordion',
                expandWidth: 700,
                itemWidth: 200,
                extpand: 0,
                autoPlay: false,
                delay: 3000,
                animateTime: 400,
                borderWidth: 1,
                autoPlay: false,
                deviator: 30,
                bounce:"-50px"
              });
            
        });
    }
    else if($(window).width() < 1386){
        
        $(function(){
            accordion.init({
                id: 'accordion',
                expandWidth: 781,
                itemWidth: 195,
                extpand: 0,
                autoPlay: false,
                delay: 3000,
                animateTime: 400,
                borderWidth: 1,
                autoPlay: false,
                deviator: 30,
                bounce:"-50px"
              });
            
        });
    }
    
    else if($(window).width() < 40000){
        
        $(function(){
            accordion.init({
                id: 'accordion',
                expandWidth: 800,
                itemWidth: 200,
                extpand: 0,
                autoPlay: false,
                delay: 3000,
                animateTime: 400,
                borderWidth: 1,
                autoPlay: false,
                deviator: 30,
                bounce:"-50px"
              });
            
        });
    }
// ---- Banner part end here
