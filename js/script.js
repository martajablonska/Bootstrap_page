//carousle

$("#prev").click(function() {
    
    if ($('#one').hasClass('previous-img')) { //if two is active
        
        $('#one').removeClass('previous-img').addClass('next-img-one');
        
        $('#two').removeClass('active-img').addClass('previous-img');
        
        $('.text-two').addClass('hidde');
        
        $('#three').removeClass('next-img').addClass('active-img-three');
        
        $('.text-three').removeClass('hidde');
        
    } else if ($('#two').hasClass('previous-img')) { //if three is active
       
        $('#one').removeClass('next-img-one').addClass('active-img-one');
        
        $('.text-one').removeClass('hidde');
        
        $('#two').removeClass('previous-img').addClass('next-img');
        
        $('#three').removeClass('active-img-three').addClass('previous-img');
        
        $('.text-three').addClass('hidde');

        
    } else if ($('#three').hasClass('previous-img')) { //if one is active
        
        $('#one').removeClass('active-img-one').addClass('previous-img');
        
        $('.text-one').addClass('hidde');
        
        $('#two').removeClass('next-img').addClass('active-img');
        
        $('.text-two').removeClass('hidde');
        
        $('#three').removeClass('previous-img').addClass('next-img');
        };   

});

$("#next").click(function() {
    
    if ($('#one').hasClass('previous-img')) { //if two is active
        
        $('#one').removeClass('previous-img').addClass('active-img-one');
        
        $('.text-one').removeClass('hidde');
        
        $('#two').removeClass('active-img').addClass('next-img');
        
        $('.text-two').addClass('hidde');
        
        $('#three').removeClass('next-img').addClass('previous-img');
        
    } else if ($('#two').hasClass('next-img')) { //if one is active

        $('#three').removeClass('previous-img').addClass('active-img-three');
        
        $('.text-three').removeClass('hidde');
       
        $('#two').removeClass('next-img').addClass('previous-img'); 
        
        $('#one').removeClass('active-img-one').addClass('next-img-one'); 
        
        $('.text-one').addClass('hidde');
   
    } else if ($('#three').hasClass('active-img-three')) { //if three is active

        $('#three').removeClass('active-img-three').addClass('next-img');
        
        $('.text-three').addClass('hidde');
       
        $('#two').removeClass('previous-img').addClass('active-img');
        
         $('.text-two').removeClass('hidde');
        
        $('#one').removeClass('next-img-one').addClass('previous-img'); 
    };
    
});

//boxes with prices



$('.pricing-box').mouseenter(function() {
    
   $('.pricing-box-plan').removeClass('pricing-box-grey').addClass('pricing-box-green');
   
    $('.pricing-box-order').addClass('pricing-box-order-hover');
        
});

$('.pricing-box').mouseleave(function() {
    
    
   $('.pricing-box-plan').removeClass('pricing-box-green').addClass('pricing-box-grey');
   
    $('.pricing-box-order').removeClass('pricing-box-order-hover');
        
});


















    
    
    