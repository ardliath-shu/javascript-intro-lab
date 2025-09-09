(function() {
    let imageAr = [
        'images/view1.jpg',
        'images/view2.jpg',
        'images/view3.jpg',
        'images/view4.jpg',
        'images/view5.jpg',
        'images/view6.jpg'
    ];

    let currentIndex = 0;

    function chgImage() {
        currentIndex++;
        if (currentIndex >= imageAr.length) {
            currentIndex = 0;
        }
        document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
    }

    const intervalId = setInterval(chgImage, 2000);

    // Stop the interval after 10 seconds
    setTimeout(function() {
        clearInterval(intervalId);
        console.info('Image rotation stopped');
    }, 10000);
})();