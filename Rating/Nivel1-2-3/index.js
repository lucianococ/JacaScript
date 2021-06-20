var ratedIndex = -1;
$(document).ready(function () {
    resetStarColor();

    $('.fa-star').on('click', function (e) {
        ratedIndex = parseInt($(this).data('index'));
    });

    window.addEventListener('click', function (e) {

        if (document.getElementById('rows').contains(e.target)) {

        } else {
            $('.fa-star').css('color', 'black');
            ratedIndex = -1;
        }
       
    })

    $('.fa-star').mouseover(function () {
        resetStarColor();
        var currentIndex = parseInt($(this).data('index'));
        for (var i = 0; i <= currentIndex; i++)
            $('.fa-star:eq(' + i + ')').css('color', 'red');
    });


    $('.fa-star').mouseleave(function () {
        var currentIndex = parseInt($(this).data('index'));
        for (var i = currentIndex; i >= 0; i--) {
            $('.fa-star:eq(' + i + ')').css('color', 'black');

        }
        resetStarColor();
        if (ratedIndex != -1)
            for (var i = 0; i <= ratedIndex; i++)
                $('.fa-star:eq(' + i + ')').css('color', 'red');
    });

});




function resetStarColor() {
    $('.fa-star').css('color', 'black');
};