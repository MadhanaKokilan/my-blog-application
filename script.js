//filter blogs
$(document).ready(function () {
    $('.filters').click(function () {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000');
            
        }
        else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    //add active to button
    $('.filters').click(function () {
        $(this).addClass('activefilters').siblings().removeClass('activefilters');
    })
});

//header bg edit
let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 10)
})