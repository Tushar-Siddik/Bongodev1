var timer = new Timer();
timer.start({precision: 'seconds'});
timer.addEventListener('secondsUpdated', function (e) {
    $('#timer_count .hours').html(timer.getTimeValues().hours);
});