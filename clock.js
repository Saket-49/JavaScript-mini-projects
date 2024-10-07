let angle = 0
d = function(){
    angle+=6
    document.getElementById("sh").style.transform = `rotate(${angle}deg)`
}
setInterval(d,1000)

ang1=0
f = function(){
    ang1+=30
    document.getElementById("ar").style.transform = `rotate(${ang1}deg)`
}
setInterval(f,3600000)
qw = 0
g = function(){
    qw += 6
    document.getElementById("row").style.transform= `rotate(${qw}deg)`
}
setInterval(g,61000)