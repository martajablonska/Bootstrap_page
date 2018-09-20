//carousle

function changeClass(element,remove, add) {                           //it was supposed to be shortert
    return $(element).removeClass(remove).addClass(add)
};


$("#prev").click(function() {                                       //it's hard to write one function for that beacuse images have diffrent                                                                         //width so when they are showing they have to have diffrent classes
    
    if ($('#one').hasClass('previous-img')) { //if two is active
        
        changeClass('#one', 'previous-img', 'next-img-one');
        changeClass('#two', 'active-img', 'previous-img');
        changeClass('#three', 'next-img', 'active-img-three');
                
        $('.text-two').addClass('hidde');        
        $('.text-three').removeClass('hidde');
        
    } else if ($('#two').hasClass('previous-img')) { //if three is active
        
        changeClass("#one", 'next-img-one', 'active-img-one');
        changeClass('#two', 'previous-img', 'next-img');
        changeClass('#three', 'active-img-three', 'previous-img');
       
        $('.text-one').removeClass('hidde');
        $('.text-three').addClass('hidde');

        
    } else if ($('#three').hasClass('previous-img')) { //if one is active
        
        changeClass('#one', 'active-img-one', 'previous-img');
        changeClass('#two', 'next-img', 'active-img');
        changeClass('#three', 'previous-img', 'next-img');
        
        $('.text-one').addClass('hidde');      
        $('.text-two').removeClass('hidde');
        
        };   

});

$("#next").click(function() {                                       // i can add here changeClass function but it won't be shorter :/
    
    if ($('#one').hasClass('previous-img')) { //if two is active
        
        $('#one').removeClass('previous-img').addClass('active-img-one');
        $('#two').removeClass('active-img').addClass('next-img');
        $('#three').removeClass('next-img').addClass('previous-img');
        
        $('.text-one').removeClass('hidde');     
        $('.text-two').addClass('hidde');        
        
    } else if ($('#two').hasClass('next-img')) { //if one is active

        $('#three').removeClass('previous-img').addClass('active-img-three');
        $('#two').removeClass('next-img').addClass('previous-img'); 
        $('#one').removeClass('active-img-one').addClass('next-img-one'); 
        
        $('.text-three').removeClass('hidde');     
        $('.text-one').addClass('hidde');
   
    } else if ($('#three').hasClass('active-img-three')) { //if three is active

        $('#three').removeClass('active-img-three').addClass('next-img');
        $('#two').removeClass('previous-img').addClass('active-img');
        $('#one').removeClass('next-img-one').addClass('previous-img'); 
        
        $('.text-three').addClass('hidde');     
         $('.text-two').removeClass('hidde');
        
        
    };
    
});

//boxes with prices

let boxes = $('.pricing-box').toArray();
let boxPlan = $('.pricing-box-plan').toArray();
let boxOrder = $('.pricing-box-order').toArray();

function showBox(numb) {                                        //hover effect on each box
    $(boxes[numb]).mouseenter(function() {
    $(boxPlan[numb]).removeClass('pricing-box-grey').addClass('pricing-box-green');
    $(boxOrder[numb]).addClass('pricing-box-order-hover');  
   
});
    $(boxes[numb]).mouseleave(function() {
    $(boxPlan[numb]).removeClass('pricing-box-green').addClass('pricing-box-grey');
    $(boxOrder[numb]).removeClass('pricing-box-order-hover');
});
    
};

for(let i=0; i < boxes.length; i++) {                   //create function showBox for each box
   showBox(i);
}

//hide menu text when toggler menu is showing

$('#menuButton').click(function() {
    $('.menu-text').toggleClass('none');
});


















    
    
    