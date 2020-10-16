 gsap.from('.section2 h2', {
          scrollTrigger: {
            trigger: '.section2 h2',
            toggleActions: "restart none none none"
          },
          opacity:0,
          duration:1.5, 
          x:-200 
        });
gsap.from('.section2 p', {
          scrollTrigger: {
            trigger: '.section2 p',
            toggleActions: "restart none none none"
          },
          opacity:0,
          duration:1.5, 
          x:-200 
        });

        gsap.from('.section2 img', {
          scrollTrigger: {
            trigger: '.section2 img',
            toggleActions: "restart none none none"
          },
          opacity:0,
          duration:1.5, 
          x:200 
        });
        
        

var arr = document.getElementsByClassName("x");
    for(var i=0; i<arr.length;i++)
    {
        gsap.from(arr[i], {
        scrollTrigger: {
        trigger: arr[i],
        toggleActions: "restart none none none"
           },
        opacity:0,
        duration:1.5, 
        x: -50
         });  
}  

var arr = document.getElementsByClassName("y");
    for(var i=0; i<arr.length;i++)
    {
        gsap.from(arr[i], {
        scrollTrigger: {
        trigger: arr[i],
        toggleActions: "restart none none none"
           },
        opacity:0,
        duration:0.5, 
        y:-20,
        stagger:0.2,
        delay:0.5
         });  
} 

var arr = document.getElementsByClassName("z");
    for(var i=0; i<arr.length;i++)
    {
        gsap.from(arr[i], {
        scrollTrigger: {
        trigger: arr[i],
        toggleActions: "restart none none none"
           },
        opacity:0,
        duration:1.5, 
        x: -50
         });  
} 

var arr = document.getElementsByClassName("T1");
    for(var i=0; i<arr.length;i++)
    {
        gsap.from(arr[i], {
        scrollTrigger: {
        trigger: arr[i],
        toggleActions: "restart none none none"
           },
        opacity:0,
        duration:0.5, 
        x: -100
         });  
} 
var arr = document.getElementsByClassName("T2");
    for(var i=0; i<arr.length;i++)
    {
        gsap.from(arr[i], {
        scrollTrigger: {
        trigger: arr[i],
        toggleActions: "restart none none none"
           },
        opacity:0,
        duration:0.5, 
        x: 100
         });  
} 
$(document).ready(function(){
    $(" .debits").hover(function(){
        $(" .center-right").css("background-color", "#4997cd");
        }, function(){
        $(" .center-right").css("background-color", "#fff");
    }); 
});
$(document).ready(function(){
    $(".credits").hover(function(){
        $(".center-left").css("background-color", "#4997cd");
        }, function(){
        $(".center-left").css("background-color", "#fff");
    }); 
}); 

    $(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});
    var arr = document.getElementsByClassName("two");
    for (var i = 0; i < arr.length; i++) {
      gsap.from(arr[i], {
        scrollTrigger: {
          trigger: arr[i],
          toggleActions: "restart none none none"
        },
        opacity: 0,
        duration: 1.0,
        y: 50
      });
    }



