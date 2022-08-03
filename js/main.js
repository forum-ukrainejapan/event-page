function scroll_to(num) {
    changeMenu();
    $("html,body").animate({
        scrollTop: $('.' + num).offset().top - 100,
    });
}

$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    const maxInt = $('.get_height').innerHeight() * 0.7;
    if (scroll < maxInt) {
        $('.background_img').css('opacity', 1 - (0.7 * scroll / maxInt));
        $('.background_img_sm').css('opacity', 1 - (0.7 * scroll / maxInt));

    } else {
        $('.background_img').css('opacity', '.3');
        $('.background_img_sm').css('opacity', '.3');
    }
});

let menu_opened = false;

function changeMenu() {
    menu_opened = !menu_opened;
    let _text;
    if (location.href.indexOf('/en/') < 0) {
        _text = 'img';
    } else {
        _text = '../img'
    }
    if (menu_opened) {
        $('.menu_icon').attr('src', _text + '/menu_close.svg');
        $('.menu_open').css('height', '300px');
    } else {
        $('.menu_icon').attr('src', _text + '/menu_open.svg');
        $('.menu_open').css('height', '0px');
    }
}

let comment_expanded = false;

function expand_comment() {
    comment_expanded = !comment_expanded;

    if (comment_expanded) {
        $('.comment_outer').css('height', 'auto');
        $('.more_comment_button').css('transform', 'rotateX(180deg)');
    } else {
        $('.comment_outer').css('height', '200px');
        $('.more_comment_button').css('transform', 'rotateX(180deg)');
    }
}

let clicked_count = 0;

function event_move() {
    clicked_count++;
    if (clicked_count == 3) {
        setTimeout(() => {
            if (clicked_count == 3) {
                location.href = 'https://ray-o-0509.github.io/cpipc_nazotoki/towers/hf39f3.html';
            }
        }, 1000);
    }

}