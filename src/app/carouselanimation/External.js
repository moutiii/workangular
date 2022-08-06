$(document).ready(function() {
    $('.box div').click(function() {

        if (this.classList.contains('spin')) {

            $('.box div').removeClass('spin');

        } else {

            $('.box div').removeClass('spin');
            $(this).addClass('spin');
            setTimeout(function() {
                $('.box div').removeClass('spin');
            }, 6000);
        }

    });
});