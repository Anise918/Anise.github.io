const minEL=document.querySelector("min");
const secEL=document.querySelector("sec");
const hourEl=document.querySelector("hour");
//const date=newDate;
setInterval(function(){
    function r (el,deg){
        el.setAttribute('transform,rotate(+deg + 50 50')
    }
    var d=newDate()
    r(sec,6*d.getSeconds())
    r(mm,6*d.getMinutes())
    r(hour,30*(d.getHours()%12)+d.getMinutes()/2)
},1000
)

