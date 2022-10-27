const data = {
    "rating": [
		{
			"id": "123",
			"name": "Владимир",
			"lastName": "Ларионов",
			"img": "./male.png",
			"points": "463"
		},
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png",
			"points": "521"
		},
		{
			"id": "231",
			"name": "Вениамин",
			"lastName": "Васильев",
			"img": "./male.png",
			"points": "865"
		},
		{
			"id": "321",
			"name": "Мария",
			"lastName": "Логинова",
			"img": "./female.png",
			"points": "865"
		},
		{
			"id": "492",
			"name": "Борис",
			"lastName": "Казанцев",
			"img": "./male.png",
			"points": "784"
		},
		{
			"id": "452",
			"name": "Полина",
			"lastName": "Калинина",
			"img": "./female.png",
			"points": "225"
		},
		{
			"id": "796",
			"name": "Даниил",
			"lastName": "Воробьёв",
			"img": "./male.png",
			"points": "642"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png",
			"points": "150"
		},
		{
			"id": "1155",
			"name": "Иван",
			"lastName": "Иванов",
			"img": "./male.png",
			"points": "100"
		},
		{
			"id": "12145",
			"name": "Артем",
			"lastName": "Алексеев",
			"img": "./male.png",
			"points": "1000"
		}
    ],
    "friends": [
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png"
        },
        {
            "id": "15411",
            "name": "Ирина",
            "lastName": "Чеснокова",
            "img": "./female.png"
        },
        {
            "id": "15564",
            "name": "Дарина",
            "lastName": "Боброва",
            "img": "./female.png"
        }
    ]
};

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
    const $table = $(".dialog-content-table-list");

    $slider.slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: false
    });
    $dialog.click(function () {
        $(this).toggleClass('show');
    });
    $dialogContent.click(function () {
        event.stopPropagation();
    });
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
    });
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
        idset.add(friend.id);
    });
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
    }, '');
    $('#items').html(out);

}
