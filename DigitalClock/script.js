function digitalClock(){
    var date = new Date()

    var hours = date.getHours() + '';
    console.log(hours);
    var minutes = date.getMinutes() + '';
    console.log(minutes);

    var seconds = date.getSeconds() + '';
    console.log(seconds);

    var day = date.getDay();
    ///var day = date.getDate();
    console.log(day);

    if(hours.length < 2){
        hours = '0' + hours
    }

    
    if(minutes.length < 2){
        minutes = '0' + hours
    }
    
    // if(seconds.length < 2){
    //     seconds = '0' + hours
    // }


    var weekDays = ['Sun','Mun','Tue','Wed','Thu','Fri','Sat'];

    var clock = weekDays[day] +' '+ hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    console.log(clock)

}
digitalClock();

setInterval(digitalClock, 1000);