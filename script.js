var countDownDate = new Date("2024-02-27T00:00:00").getTime();

function gettimeb()
{
    datebday=document.getElementById("birhtday").value
    if(datebday<new Date().getTime())
    {
        alert("date could be mayor than today");
    }
    else
    {
        countDownDate = new Date(datebday).getTime();

    }
    
    
}

function time()
{
    setInterval('runhour()',1000);
}
function runhour()
{
    var now=new Date().getTime();
    distance=countDownDate-now;
    if(distance>0)
    {
        console.log(distance);
        var days = Math.floor(distance / (3600 * 24*1000));
        var hours = Math.floor((distance % (3600 * 24*1000)) / (3600*1000));
        var minutes = Math.floor((distance % (3600*1000)) / (60000));
        var seconds = Math.floor((distance % (60000)) / 1000);
        days_string=days + " Days " ;
        hours_string=hours+" Hours "  ;
        minutes_string=minutes + " Minutes ";
        seconds_string=seconds+" Seconds " ;
        document.getElementById("days").innerHTML=days_string;
        document.getElementById("hours").innerHTML=hours_string;
        document.getElementById("minutes").innerHTML=minutes_string;
        document.getElementById("seconds").innerHTML=seconds_string;
    }
    else
    {
        document.getElementById("days").innerHTML="Happy Birhday";
        document.getElementById("hours").innerHTML="Happy Birhday";
        document.getElementById("minutes").innerHTML="Happy Birhday";
        document.getElementById("seconds").innerHTML="Happy Birhday";
    }


}