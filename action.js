//Javascript File
function getPower(){
    var p = Number(document.getElementById("power").value);
    return p;
}

function getResistance(){
    var r = Number(document.getElementById("resistance").value);
    return r; 
}

function getVoltage(){
    var v = Number(document.getElementById("voltage").value);
    return v; 
}

function getCurrent(){
    var i = Number(document.getElementById("current").value);
    return i; 
}

function myFunction(){
    var p = -1;
    var r = -1;
    var v = -1;
    var i = -1;
    p = getPower();
    r = getResistance();
    v = getVoltage();
    i = getCurrent();
    document.write(p + r + v + i);
}