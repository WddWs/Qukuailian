$(document).ready(function() {
    var topma = '.top-right>div:first';
    for (i = 0; i <= 6; i++) {
     ( function(x){
      	 $(topma).click(function() {
            var hig = document.body.clientHeight;
            console.log(hig*x);
             window.scrollTo(0,hig*x);
          
        });
        })(i);
        topma = topma + '+div';
    }
    $(".top-right div").hover(function() {
        $(this).children('hr').animate({
            width: "65%"
        }, 300);
    }, function() {
        $(this).children('hr').animate({
            width: "0"
        }, 300);
    });
    $(".stage2-content > div").hover(function() {
        $(this).animate({
            marginTop: "-2%"
        }, 300);
    }, function() {
        $(this).animate({
            marginTop: "-1%"
        }, 300);
    });
    $('.stage4-content img').hover(function() {
        $(this).siblings().css('font-size', '18px');
    }, function() {
        $(this).siblings().css('font-size', '14px');
    });
    $('.stage5-content>div .man').mouseenter(function() {
        $(this).css('animation', 'rotateOut 2s');
    });
    $(window).scroll(function() {
        var a = document.body.clientHeight;
        var s = $(window).scrollTop();
        console.log(a * 0.4);
        if (a - s <= a * 0.4 && flagxx == 0) {
            flagxx = 1;
            $(".stage2-content>div:first ").animate({
                opacity: 1,
                marginTop: "-1%"
            }, 500, function() {
                $(".stage2-content>div:first + div").animate({
                    opacity: 1,
                    marginTop: "-1%"
                }, 500, function() {
                    $(".stage2-content>div:first +div+div").animate({
                        opacity: 1,
                        marginTop: "-1%"
                    }, 500, function() {
                        $(".stage2-content>div:first +div+div+div").animate({
                            opacity: 1,
                            marginTop: "-1%"
                        }, 500);
                    });
                });
            });
        }
        if (s - a >= 0) {
            var inter = '.Nav div:first';
            var i = parseInt((s - a) / a);
            for (j = 0; j < i; j++) {
                inter = inter + '+div';
            }
            $('.Nav div').html("<span class='fa fa-circle fa-lg'></span>");
            $(inter + '+div').html("<i class='fa fa-rocket fa-2x'></i>");
        } else {
            if (s - a < -700) {
                $('.Nav div').html("<span class='fa fa-circle fa-lg'></span>");
                $('.Nav div:first').html("<i class='fa fa-rocket fa-2x'></i>");
            }
        }
        if (s - a >= a * 1.7 && flagxxx == 0) {
            flagxxx = 1;
            $(".stage4-content>div>div:first ").animate({
                opacity: 1
            }, 500, function() {
                $(".stage4-content>div>div:first +div").animate({
                    opacity: 1
                }, 500, function() {
                    $(".stage4-content>div>div:first +div+div").animate({
                        opacity: 1
                    }, 500, function() {
                        $(".stage4-content>div>div:first +div+div+div").animate({
                            opacity: 1
                        }, 300, function() {
                            $('.xian-rig1').addClass('xian-rig');
                            $('.xian11').addClass('xian1');
                            setInterval("show()", 300);
                            setInterval("show2()", 900);
                            setInterval("show3()", 1200);
                            $(".stage4-content>div>div:first +div+div+div+div").delay(2200).animate({
                                opacity: 1
                            }, 300);
                        });
                    });
                });
            });
        }
        if (s - a >= a * 2.7 && flagxxxx == 0) {
            flagxxx = 1;
            $(".stage5-content>div:first ").animate({
                opacity: 1
            }, 500, function() {
                $(".stage5-content>div:first +div").animate({
                    opacity: 1
                }, 500, function() {
                    $(".stage5-content>div:first +div+div").animate({
                        opacity: 1
                    }, 500, function() {
                        $(".stage5-content>div:first +div+div+div").animate({
                            opacity: 1
                        }, 500);
                    });
                });
            });
        }
    });
    $('.stage3-content > div').mouseenter(function() {
        $('.stage3-content > div').removeClass('stage3-content-2');
        $(this).addClass('stage3-content-2');
    });
});
var flagxx = 0;
var flagxxx = 0;
var flagxxxx = 0;

function show() {
    $('.xian-lft2').addClass('xian-lft');
    $('.xian22').addClass('xian2');
}

function show2() {
    $('.xian-rig3').addClass('xian-rig');
    $('.xian13').addClass('xian1');
}

function show3() {
    $('.xian-huo4').addClass('xian-huo');
    $('.xian34').addClass('xian3');
}

function show3() {
    $('.xian-huo4').addClass('xian-huo');
    $('.xian34').addClass('xian3');
}