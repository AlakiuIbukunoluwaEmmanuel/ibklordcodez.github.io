function clk(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clrdisp(){
    document.getElementsByClassName("screen").value=""
}

function eql(){
    var text=document.getElementsByClassName("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result
}