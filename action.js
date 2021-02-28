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

    // Initialized of variables as string
    var pUnit = document.getElementById("Power Unit").value;
    var rUnit = document.getElementById("Resistance Unit").value;
    var vUnit = document.getElementById("Voltage Unit").value;
    var iUnit = document.getElementById("Current Unit").value;

    // Resign the value according to the user's input
    p = getPower();
    r = getResistance();
    v = getVoltage();
    i = getCurrent();

    if(p != 0 && r != 0){       // Calculate v and i
        // Measure p in terms of Watts
        if(pUnit == "Kilowatts"){
            p = p * 1000;
        }
        else if(pUnit == "milliwatts"){
            p = p / 1000;
        }

        // Measure r in terms of ohms
        if(rUnit == "Kiloohms"){
            r = r * 1000;
        }
        else if(rUnit == "Milliohms"){
            r = r / 1000;
        }
        
        v = Math.sqrt(p * r);
        i = Math.sqrt(p / r);

        document.getElementById('voltage').value = v;
        document.getElementById('current').value = i;
    }
    else if(p != 0 && v != 0){  // Calculate r and i
        // Measure p in terms of Watts
        if(pUnit == "Kilowatts"){
            p = p * 1000;
        }
        else if(pUnit == "milliwatts"){
            p = p / 1000;
        }

        // Measure v in terms of volt
        if(vUnit == "Kilovolts"){
            v = v * 1000;
        }
        else if(vUnit == "Millivolts"){
            v = v / 1000;
        }
        
        r = v * v / p;
        i = p / v;
        
        document.getElementById('resistance').value = r;
        document.getElementById('current').value = i;
    }
    else if(p != 0 && i != 0){  // Calculate r and v
        // Measure p in terms of Watts
        if(pUnit == "Kilowatts"){
            p = p * 1000;
        }
        else if(pUnit == "milliwatts"){
            p = p / 1000;
        }

        // Measure i in terms of ampere
        if(iUnit == "Kiloampere"){
            i = i * 1000;
        }
        else if(iUnit == "Milliampere"){
            i = i / 1000;
        }

        r = p / (i * i);
        v = p / i;

        document.getElementById('resistance').value = r;
        document.getElementById('voltage').value = v;
    }
    else if(r != 0 && v != 0){  // Calculate p and i
        // Measure r in terms of ohms
        if(rUnit == "Kiloohms"){
            r = r * 1000;
        }
        else if(rUnit == "Milliohms"){
            r = r / 1000;
        }

        // Measure v in terms of volt
        if(vUnit == "Kilovolts"){
            v = v * 1000;
        }
        else if(vUnit == "Millivolts"){
            v = v / 1000;
        }
        
        p = v * v / r;
        i = v / r;
        
        document.getElementById('power').value = p;
        document.getElementById('current').value = i;
    }
    else if(r != 0 && i != 0){  // Calculate p and v
        // Measure r in terms of ohms
        if(rUnit == "Kiloohms"){
            r = r * 1000;
        }
        else if(rUnit == "Milliohms"){
            r = r / 1000;
        }

        // Measure i in terms of ampere
        if(iUnit == "Kiloampere"){
            i = i * 1000;
        }
        else if(iUnit == "Milliampere"){
            i = i / 1000;
        }

        p = i * i * r;
        v = i * r;

        document.getElementById('power').value = p;
        document.getElementById('voltage').value = v;
    }
    else if(v != 0 && i != 0){  // Calculate p and r
        // Measure v in terms of volt
        if(vUnit == "Kilovolts"){
            v = v * 1000;
        }
        else if(vUnit == "Millivolts"){
            v = v / 1000;
        }

        // Measure i in terms of ampere
        if(iUnit == "Kiloampere"){
            i = i * 1000;
        }
        else if(iUnit == "Milliampere"){
            i = i / 1000;
        }

        p = v * i;
        r = v / i;

        document.getElementById('power').value = p;
        document.getElementById('resistance').value = r;
    }
}

function reset(){
    document.getElementById('power').value = 0;
    document.getElementById('resistance').value = 0;
    document.getElementById('voltage').value = 0;
    document.getElementById('current').value = 0;
}