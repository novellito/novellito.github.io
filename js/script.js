/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";
    
   hideAll();
   $('.switch').hide();
    
        $('.github').animate({
            'margin-top': 370
        },2000);
    
        $('#me').slideToggle(1500);
           
       // displayModal ++;
        
        $('.startText').hide(); //delete later
        
        animateInsta();
        animateLI();
        animateMyPic();
        animateTwitter();
        animateFB();
        animateOthers();
        animateResume();
        $('.switch').show(500);  
        
        $('[data-toggle="tooltip"]').tooltip();  
        
        $('.myPic').click(function (e) { //click myPic for the modal
            e.preventDefault();
             $('#myModal').modal('show');
            
            
        });
    
         $('.others').click(function (e) { //click view my work for the modal
            e.preventDefault();
             $('#workModal').modal('show');
            
            
        });
            
    
     $('.switch input').click(function () {    //this is for the switch (can be used for the game in the future)

         $('#websites').each(function(i)
         {
            $(this).toggle(1000);
         });                       
        
    });
    
   myWork('https://twitter.com/trini_bot', '.twit');
   myWork('https://github.com/novellito/CSUN-Accessibility-Competition-Project', '.voitcha');
    
    function myWork(url,id){
        
        $(id).on("click",function(e){
         e.preventDefault()
         window.open(url,'_blank');
     });
        
    }
    
    $('.dropdown a.dropdown-toggle[href="#"]').css({'text-align': 'center', 'font-size': '20px'});  
    $('a[href="myResume.pdf"]').css({'text-align': 'center', 'font-size': '20px'});
      
    //loop through my websites
   for(var i = 0; i < $('#websites a').length; i++){
        
        var myLink = $("#websites a[href]").eq(i).attr("href");
        var mySite = "."+ $("#websites img[src]").eq(i).attr("class");
        
       if(mySite == '.others')
       {
               break;
       }

        makeTab(myLink,mySite);
   }
   
});

function makeTab(link ,  site)   //creates tabs rather than direct linking to it
{
       $(site).click(function(e) {
        e.preventDefault();
        window.open( link, '_blank');
    });
}
   
function hideAll()
{
    $('#me').hide();
    $('.facebook').hide();
    $('.insta').hide();
    $('.linkedin').hide();
    $('.twitter').hide();
    $('.others').hide();
    $('.resume').hide();   
}

function animateInsta()
{
    $('.insta').show(800); 
    
    $('.insta').animate({
        'margin-left': -190
    },1000);
}

function animateTwitter()
{
    $('.twitter').show(1200);
    
    $('.twitter').animate({
        'margin-left': -340
    },1200);
}
    
function animateLI()
{
    $('.linkedin').show(900);
    $('.linkedin').animate({
        'margin-top': 230   
    },800);
}

function animateMyPic()
{
    $('.myPic').show(800);
    $('.myPic').animate({
        'margin-top': 90
    },700);
}

function animateFB()
{
     $('.facebook').show(500);
}

function animateOthers()
{
    $('.others').show(1200);
    
    $('.others').animate({
        'margin-left': 240
    },1200);
}

function animateResume()
{
    $('.resume').show(800); 
    
    $('.resume').animate({
        'margin-left': 88
    },1000); 
}

function openCSUN(e)
{
    e.preventDefault();
    window.open('http://www.csun.edu/', '_blank');
}

