var payData = JSON.parse(localStorage.getItem("payData")) || [];
document.querySelector("#formpay").addEventListener("submit", function () {
  event.preventDefault();
  var form = document.querySelector("#formpay");
  var cardNum = form.cardNum.value;
  var cvv = form.cvv.value;
  var name = form.name.value;
  var exp = form.exp.value;
  var flag = false;
  for (var i = 0; i < payData.length; i++) {
    if (
      payData[i].name == name &&
      payData[i].cardNum == cardNum &&
      payData[i].cvv == cvv &&
      payData[i].exp == exp
    ) {
      flag = true;
    }
  }
  if (flag) {
    var otp = prompt("Enter OTP", "");
    var chk = false;
    for (var i = 0; i < payData.length; i++) {
      if (payData[i].otp == otp) {
        chk = true;
      }
    }
    if (chk) {
      window.location.href = "confirm.html";
      alert("Payment Successful");
    } else {
      alert("Payment Failed");
    }
  } else {
    alert("Wrong Details");
  }
});