document.addEventListener("DOMContentLoaded", function() {
    // var tlrank = new TimelineMax();

    // tlrank.to('.rank', .2, { display: 'block' }, {

    // }).to('.rank', .5, {
    //     opacity: 1
    // })

    // tlrank.stop();


    var tltag = new TimelineMax();
    tltag.to('.slmv1', .5, { display: 'block' }, {

    }).to('.slmv1', .5, {
        right: 0
    })

    tltag.stop();




    var ck = 0;
    // var rank_block = document.querySelector("div.but_title");
    // rank_block.addEventListener('click', function() {
    //     if (ck == 0) {
    //         tlrank.play();
    //         ck = 1;
    //     } else {
    //         tlrank.reverse();
    //         ck = 0;
    //     }
    // });
    var select_block = document.querySelector("div.selecter");
    select_block.addEventListener('click', function() {
        if (ck == 0) {
            tltag.play();
            ck = 1;
        } else {
            tltag.reverse();
            ck = 0;
        }
    });









})

//89
// 82.display:none