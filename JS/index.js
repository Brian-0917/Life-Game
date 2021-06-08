document.addEventListener("DOMContentLoaded", function() {
    var tlmenu = new TimelineMax();

    var top_mv = TweenMax.to('.but_top', .3, {
        y: '11px',
        rotation: 45
    })
    var middle_mv = TweenMax.to('.middle', .1, {
        opacity: 0,

    })
    var bottom_mv = TweenMax.to('.but_bottom', .3, {
        rotation: -45,
        y: '-11px'
    })

    // });
    // timelinemax 同時執行動畫
    tlmenu.add([top_mv, middle_mv, bottom_mv])

    tlmenu.to('.header', .1, {
        height: 300,
    }).to('.items_other', .1, { display: 'block' }, {
        opacity: 1,
    }).staggerTo('.items_other li', .2, {
        opacity: 1
    }, .4)

    // 控制
    tlmenu.stop();

    var flag = 0;
    document.getElementById('nav').onclick = function() {
        if (flag == 0) {
            tlmenu.play();
            flag = 1;
        } else {
            tlmenu.reverse();
            flag = 0;
        }

    }

});