//Javascript File
function getPower(){
    // p is store as text so need to change it to number
    var p = Number(document.getElementById("power").value);
    return p;
}

function getResistance(){
    // r is store as text so need to change it to number
    var r = Number(document.getElementById("resistance").value);
    return r; 
}

function getVoltage(){
    // v is store as text so need to change it to number
    var v = Number(document.getElementById("voltage").value);
    return v; 
}

function getCurrent(){
    // i is store as text so need to change it to number
    var i = Number(document.getElementById("current").value);
    return i; 
}

function calculate(){
    // Initialized of the variables as number
    var p = -1;
    var r = -1;
    var v = -1;
    var i = -1;
    // Resign the value according to the user's input
    p = getPower();
    r = getResistance();
    v = getVoltage();
    i = getCurrent();
    if(p != 0 && r != 0){       // Calculate v and i
        document.getElementById('voltage').value = Math.sqrt(p * r);
        document.getElementById('current').value = Math.sqrt(p / r);
    }
    else if(p != 0 && v != 0){  // Calculate r and i
        document.getElementById('resistance').value = v * v / p;
        document.getElementById('current').value = p / v;
    }
    else if(p != 0 && i != 0){  // Calculate r and v
        document.getElementById('resistance').value = p / (i * i);
        document.getElementById('voltage').value = p / i;
    }
    else if(r != 0 && v != 0){  // Calculate p and i
        document.getElementById('power').value = v * v / r;
        document.getElementById('current').value = v / r;
    }
    else if(r != 0 && i != 0){  // Calculate p and v
        document.getElementById('power').value = i * i * r;
        document.getElementById('voltage').value = i * r;
    }
    else if(v != 0 && i != 0){  // Calculate p and r
        document.getElementById('power').value = v * i;
        document.getElementById('resistance').value = v / i;
    }
}

function reset(){
    document.getElementById('power').value = 0;
    document.getElementById('resistance').value = 0;
    document.getElementById('voltage').value = 0;
    document.getElementById('current').value = 0;
}