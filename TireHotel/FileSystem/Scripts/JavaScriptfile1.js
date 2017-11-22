$(document).ready(function() {     
  
    //select all the a tag with name equal to modal   
    $('a[name=modal]').click(function(e) {   
        //Cancel the link behavior   
        e.preventDefault();   
        //Get the A tag   
        var id = $(this).attr('href');   
       
        //Get the screen height and width   
        var maskHeight = $(document).height();   
        var maskWidth = $(window).width();   
       
        //Set height and width to mask to fill up the whole screen   
        $('#mask').css({'width':maskWidth,'height':maskHeight});   
           
        //transition effect        
        $('#mask').fadeIn(1000);       
        $('#mask').fadeTo("slow",0.8);     
       
        //Get the window height and width   
        var winH = $(window).height();   
        var winW = $(window).width();   
                 
        //Set the popup window to center   
        $(id).css('top',  winH/2-$(id).height()/2);   
        $(id).css('left', winW/2-$(id).width()/2);   
       
        //transition effect   
        $(id).fadeIn(2000);    
       
    });   
       
    //if close button is clicked   
    $('.window .close').click(function (e) {   
        //Cancel the link behavior   
        e.preventDefault();   
        $('#mask, .window').hide();   
    });        
       
    //if mask is clicked   
    $('#mask').click(function () {   
        $(this).hide();   
        $('.window').hide();   
    });            
       
});   

// Readmore /Readless Method ---------------------------------------------------------------------------
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
/*------------------------------------------------*/

$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state',(isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length === 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
            }
        }
        init();
    });
});
/*
 AngularJS v1.6.5
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
