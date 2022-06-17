var paymentData = [
    {
      cardNum: "1234-5678-9123",
      cvv: "123",
      exp: "04/2025",
      name: "K S",
      otp: "123",
    },
    {
      cardNum: "9876-5432-1987",
      cvv: "321",
      exp: "05/2026",
      name: "J S",
      otp: "321",
    },
    {
      cardNum: "1234-5678-9123",
      cvv: "123",
      exp: "04/2022",
      name: "P S",
      otp: "000",
    },
  ];
  localStorage.setItem("payData", JSON.stringify(paymentData));
  