jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingslider-1").amazingslider({

            

        
        navthumbtitlehovercss:"text-decoration:underline;",

        navthumbmediumheight:64,

        texteffectresponsivesize:600,

        arrowwidth:48,

        texteffecteasing:"easeOutCubic",

        texteffect:"slide",

        lightboxthumbheight:60,

        navspacing:2,

        navarrowimage:"navarrows-28-28-0.png",

        ribbonimage:"ribbon_topleft-0.png",

        navwidth:200,

        navheight:200,

        arrowimage:"arrows-48-48-4.png",

        timeropacity:0.6,

        titlecssresponsive:"font-size:12px;",

        navthumbnavigationarrowimage:"carouselarrows-32-32-3.png",

        navshowplaypausestandalone:false,

        texteffect1:"slide",

        navpreviewbordercolor:"#ffffff",

        texteffect2:"slide",

        customcss:"",

        ribbonposition:"topleft",

        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",

        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",

        arrowstyle:"mouseover",

        navthumbmediumsize:800,

        navthumbtitleheight:20,

        navpreviewarrowheight:8,

        textpositionmargintop:24,

        navshowbuttons:false,

        buttoncssresponsive:"",

        texteffectdelay:500,

        navswitchonmouseover:false,

        playvideoimage:"playvideo-64-64-0.png",

        arrowtop:50,

        textstyle:"static",

        playvideoimageheight:64,

        navfonthighlightcolor:"#666666",

        showbackgroundimage:false,

        showpinterest:true,

        navpreviewborder:0,

        navshowplaypausestandaloneheight:48,

        navdirection:"horizontal",

        navbuttonshowbgimage:true,

        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",

        textbgcss:"display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#333333; opacity:0.6; filter:alpha(opacity=60);",

        playvideoimagewidth:64,

        buttoncss:"display:block; position:relative; margin-top:8px;",

        navborder:0,

        navshowpreviewontouch:false,

        bottomshadowimagewidth:110,

        showtimer:true,

        navmultirows:false,

        navshowpreview:false,

        navmarginy:10,

        navmarginx:10,

        navfeaturedarrowimage:"featuredarrow-16-8-1.png",

        texteffectslidedirection1:"right",

        showribbon:false,

        navstyle:"thumbnails",

        textpositionmarginleft:24,

        descriptioncss:"display:block; position:relative; font:0px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff; margin-top:8px;",

        navplaypauseimage:"navplaypause-48-48-0.png",

        backgroundimagetop:-10,

        timercolor:"#ffffff",

        numberingformat:"%NUM/%TOTAL ",

        navthumbmediumwidth:64,

        navfontsize:12,

        navhighlightcolor:"#333333",

        texteffectdelay1:1000,

        navimage:"bullet-24-24-5.png",

        texteffectdelay2:1500,

        texteffectduration1:600,

        navshowplaypausestandaloneautohide:true,

        texteffectduration2:600,

        navbuttoncolor:"",

        navshowarrow:false,

        texteffectslidedirection:"left",

        navshowfeaturedarrow:false,

        lightboxbarheight:0,

        showfacebook:true,

        titlecss:"display:block; position:relative; font:bold 0px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff;",

        ribbonimagey:0,

        ribbonimagex:0,

        texteffectresponsive:true,

        navthumbsmallheight:48,

        texteffectslidedistance1:120,

        texteffectslidedistance2:120,

        navrowspacing:1,

        navshowplaypausestandaloneposition:"bottomright",

        lightboxshowpinterest:true,

        lightboxthumbbottommargin:8,

        lightboxthumbtopmargin:12,

        arrowhideonmouseleave:1000,

        navshowplaypausestandalonewidth:48,

        showsocial:false,

        navthumbresponsive:false,

        navfeaturedarrowimageheight:8,

        navopacity:1.0,

        textpositionmarginright:24,

        backgroundimagewidth:120,

        bordercolor:"#ffffff",

        border:0,

        navthumbtitlewidth:120,

        navpreviewposition:"top",

        texteffectseparate:false,

        arrowheight:48,

        arrowmargin:0,

        texteffectduration:600,

        bottomshadowimage:"bottomshadow-110-95-4.png",

        lightboxshowfacebook:true,

        lightboxshowdescription:false,

        timerposition:"bottom",

        navfontcolor:"#333333",

        navthumbnavigationstyle:"arrowinside",

        borderradius:0,

        navbuttonhighlightcolor:"",

        textpositionstatic:"bottom",

        texteffecteasing2:"easeOutCubic",

        navthumbstyle:"imageonly",

        texteffecteasing1:"easeOutCubic",

        textcss:"display:block; padding:12px; text-align:left;",

        navthumbsmallwidth:48,

        navbordercolor:"#fff",

        navthumbmediumcolumn:4,

        navpreviewarrowimage:"previewarrow-16-8-0.png",

        showbottomshadow:false,

        texteffectslidedistance:30,

        shadowcolor:"#aaaaaa",

        showtwitter:true,

        textpositionmarginstatic:0,

        backgroundimage:"",

        navposition:"bottom",

        navthumbsmallsize:480,

        navpreviewarrowwidth:16,

        textformat:"Bottom bar",

        texteffectslidedirection2:"right",

        bottomshadowimagetop:98,

        textpositiondynamic:"bottomleft",

        shadowsize:5,

        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",

        textpositionmarginbottom:24,

        lightboxshowtitle:false,

        socialmode:"mouseover",

        slide: {

            duration:1000,

            easing:"easeOutCubic",

            checked:true

        },

        transition:"slide",

        scalemode:"fit",

        isfullscreen:false,

        textformat: {



        }

    });

});