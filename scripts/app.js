import {
    data
} from './data';
$(window).on('load', function () {
    $(".pageloader").fadeOut("slow");
});

$(function() {
   
    //variables
    const $slider = $('.slider');
    const $dialog = $('#dialog');
    const $dialogContent = $('.dialog-content');
    const $dialogOpen = $('#modal');
    const $closeDialog = $('.dialog-content-close');
    const $btnUniver = jQuery('.game-navigation__univer');
    const $girl = jQuery('#mygirl');
    const $table = $(".dialog-content-table-list")

    $slider.slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: false
    });
    $dialog.click(function () {
        $(this).toggleClass('show');
    })
    $dialogContent.click(function () {
        event.stopPropagation();
    })
    $dialogOpen.click(function () {
        $dialog.toggleClass("show");
    });
    $closeDialog.click(function () {
        $dialog.toggleClass("show");
    });

    let step = 0;
    $btnUniver.click(function () {
        $girl.removeAttr("class");
        step = step + 1;
        $girl.addClass('point' + step);
    })
    loadItems();
    $table.mCustomScrollbar({
        theme: "minimal",
        scrollInertia: 100,
        scrollEasing: "linear"
    });
});

function checkHighlight(arr) {
    const idset = new Set();
    data.friends.forEach(friend => {
        idset.add(friend.id)
    })
    return idset.has(arr.id)
}

function loadItems() {
    let dataSort = data.rating.sort((a, b) => {
        return b.points - a.points;
    });
    const out = dataSort.reduce((result, current, index) => {
        return result.concat(`<li class="dialog-content-table-list-item">
        <div class="dialog-content-table-list-item__place">${index + 1}</div>
        <div class="dialog-content-table-list-item__checkbox ${checkHighlight(current)?  'highlight': ''}"></div>
        <div class="dialog-content-table-list-item__fio">${current.lastName} ${current.name}</div>
        <div class="dialog-content-table-list-item__experience">${current.points}</div>
        </li>`);
    }, '')
    $('#items').html(out);

}