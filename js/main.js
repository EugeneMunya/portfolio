jQuery(document).ready(function(){

//logo

var $logo = $('#logo');
if(location.href.indexOf('#') != -1){
    $logo.show();
}

//show logo

$('menu .tabs a').click(function(){
    $logo.fadeIn('slow')
});

//hide logo
$('.tab-profile').click(function(){
    $logo.fadeOut('slow')
});




















// Menu
//========================

var $content = $("#content");
$content.easytabs({
    animate :true,
    updtateHash : false,
    transitionIn : 'slideDown',
    transitionOut : 'slideUp',
    animationSpeed : 600,
    tabs: ".tmenu",
    tabActiveClass :'active',
});

// Hover menu effect

$content.find('.tabs li a').hover(
    function(){
        $(this).stop().animate({marginTop:"-7"},200);

    },function(){
        $(this).stop().animate({marginTop:"0px"},300);
    }
);




});