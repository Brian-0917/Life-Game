document.addEventListener("DOMContentLoaded", function() {
    var tlpic = new TimelineMax();

    // var i = -1;

    // var pic = TweenMax.to('.pic', 1, {
    //         x: i + '00%'
    //     })
    // var pic_two = TweenMax.to('.pic-2', 1, {
    //     x: '-100%'
    // })
    // var pic_three = TweenMax.to('.pic-3', 1, {
    //     x: '-100%'
    // })

    // tlpic.add([pic])

    // var pic_one = TweenMax.set('.mv1', {
    //     backgroundImage: 'url(../news/news_img/village.jpg)'
    // })

    tlpic.stop();

    var one_two = document.querySelector("div.left");
    var pic_ul = document.querySelector('ul.pic_run');
    // one_two.addEventListener("click", function() {
    //     tlpic.play();

    //     tlpic.to('.pic', 2, {
    //             x: '-100%'
    //         }).to('.pic', 0, {
    //             x: '0%'
    //         })
    //         // i--;

    //     let pic = document.querySelector('li.pic');
    //     clone = pic.outerHTML;
    //     // console.log(pic);
    //     // console.log(clone);

    //     setTimeout(function() {
    //         pic_ul.insertAdjacentHTML('beforeend', clone);
    //         pic.remove();
    //     }, 2000);
    //     // console.log(i);
    // })

    function renbow() {
        tlpic.play();

        tlpic.to('.pic', 2, {
                x: '-100%'
            }).to('.pic', 0, {
                x: '0%'
            })
            // i--;

        let pic = document.querySelector('li.pic');
        clone = pic.outerHTML;
        // console.log(pic);
        // console.log(clone);

        setTimeout(function() {
            pic_ul.insertAdjacentHTML('beforeend', clone);
            pic.remove();
        }, 2000);
        // console.log(i);
    }

    setInterval(function() {
        renbow();
    }, 4000); //計時器 數字=多久


})