
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let naira = document.getElementById("naira").value;
    let ringgit = document.getElementById("ringitt");
    let dollar = document.getElementById("dollar");
    ringgit.value = naira / 100;
    dollar.value = naira / 413;
});