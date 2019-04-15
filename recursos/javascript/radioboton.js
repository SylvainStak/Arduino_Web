var l = document.getElementById("radio1");
var d = document.getElementById("radio2");




function swap() {
    if (l.checked == true) {
        d1.disabled = true;
        d1.value = "";
    }
    else {
        d1.disabled = false;
    }

    if (d.checked == true) {
        l1.disabled = true;
        l1.value = "";
        l2.disabled = true;
        l2.value = "";
    }
    else {
        l1.disabled = false;
        l2.disabled = false;
    }

}

setInterval(swap, 100);