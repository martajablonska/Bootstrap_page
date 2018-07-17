$("#prev").click(function() {
    
    if ($('#one').hasClass('previous-img')) { //if two is active
        
        $('#one').removeClass('previous-img').addClass('next-img-one');
        
        $('#two').removeClass('active-img').addClass('previous-img');
        
        $('#three').removeClass('next-img').addClass('active-img-three');
        
    } else if ($('#two').hasClass('previous-img')) { //if three is active
       
        $('#one').removeClass('next-img-one').addClass('active-img-one');
        
        $('#two').removeClass('previous-img').addClass('next-img');
        
        $('#three').removeClass('active-img-three').addClass('previous-img');
        
    } else if ($('#three').hasClass('previous-img')) { //if one is active
        
        $('#one').removeClass('active-img-one').addClass('previous-img');
        
        $('#two').removeClass('next-img').addClass('active-img');
        
        $('#three').removeClass('previous-img').addClass('next-img');
        };    
});

$("#next").click(function() {
    
    if ($('#one').hasClass('previous-img')) { //if two is active
        
        $('#one').removeClass('previous-img').addClass('active-img-one');
        
        $('#two').removeClass('active-img').addClass('next-img');
        
        $('#three').removeClass('next-img').addClass('previous-img');
        
    } else if ($('#two').hasClass('next-img')) { //if one is active

        $('#three').removeClass('previous-img').addClass('active-img-three');
       
        $('#two').removeClass('next-img').addClass('previous-img'); 
        
        $('#one').removeClass('active-img-one').addClass('next-img-one'); 
   
    } else if ($('#three').hasClass('active-img-three')) { //if three is active

        $('#three').removeClass('active-img-three').addClass('next-img');
       
        $('#two').removeClass('previous-img').addClass('active-img'); 
        
        $('#one').removeClass('next-img-one').addClass('previous-img'); 
    };

});


    
    
    