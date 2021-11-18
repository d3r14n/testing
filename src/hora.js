const time = () => {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    if(hours < 10) { hours = "0" + hours; }
    if(minutes < 10) { minutes = "0" + minutes; }
    return hours + ":" + minutes;
}

module.exports = 
{
    time
}