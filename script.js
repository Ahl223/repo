function checkOddEven() {
    let number = document.getElementById("numberInput").value;
    let result;
    if (number % 2 === 0) {
        result = number + " is even.";
    } else {
        result = number + " is odd.";
    }
    alert(result);
}
