function storeData() {
    var inputText = document.getElementById("input").value;
    localStorage.setItem("userData", inputText);
    window.location.href = "thankyou.html";
}

var userData = localStorage.getItem("userData");
document.getElementById("display").innerText = "User Data: " + userData;