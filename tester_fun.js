
function breaker(clsname,tag){
    let cls = document.getElementsByClassName(clsname);
    let i;
    for (i of cls)
    {
        let labels = i.getElementsByTagName(tag);
        for (let label of labels)
        {
            let br1 = document.createElement("br");
            let br2 = document.createElement("br");
            label.parentNode.insertBefore(br1,label.nextSibling);
            label.parentNode.insertBefore(br2,label.nextSibling);
        }
    }
}
function breakers(){
    breaker("i2","label");
    breaker("i3","input");
    breaker("i3","textarea");
}
window.onload = function() {
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = function() {
            this.style.background = 'yellow';
        }
        inputs[i].onblur = function() {
            this.style.background = 'white';
        }
    }
}

document.addEventListener('DOMContentLoaded',breakers);

