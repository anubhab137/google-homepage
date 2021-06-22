//I'm feeling lucky button  
var luckyele = document.getElementById("lucky");

luckyele.onclick = function () {
    location.href = "https://www.google.com/doodles";
};

//Sign-in button
var signinele = document.getElementById("sign-in");

signinele.onclick = function () {
    location.href = "https://myaccount.google.com/";
}


//Google searching the text
function search() {
    var text = document.getElementById("gsearch").value;
    location.replace("https://www.google.com/search?q=" + text + "");
}