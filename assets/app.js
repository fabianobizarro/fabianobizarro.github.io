(function () {

    var menutoggle = document.querySelector('#menuTogggle');
    var menuOptions = document.querySelector('.menu-options');

    menutoggle.addEventListener('click', function () {
        var classItems = menuOptions.classList;
        if (classItems.contains('is-active')) {
            menutoggle.classList.remove('is-active');
            classItems.remove('is-active');
        }
        else {
            menutoggle.classList.add('is-active');
            classItems.add('is-active');
        }
    });

})();