(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "01/31/", // February 1st <3
    monthsaryDay = "1",
    anniversary = dayMonth + yyyy;

  let time = today.getHours();

  today = mm + "/" + dd + "/" + yyyy;
  if (today > anniversary) {
    anniversary = dayMonth + nextYear;
  }

  const isMonthsary = dd === monthsaryDay;

  const countDown = new Date(anniversary).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      if (time >= 13 && time < 18) {
        document.body.style.backgroundColor = "#3C6B3A";
      } else if (time >= 18 || time < 6) {
        document.body.style.backgroundColor = "#341e1b";
      } else {
        document.body.style.backgroundColor = "#683a3a";
      }

      if (isMonthsary) {
        document.getElementById("clock").style.display = "none";
        document.getElementById("headline").innerText = "Happy monthsary!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("monthsary").style.display = "block";
        clearInterval(x);
      }

      if (distance < 0) {
        document.getElementById("clock").style.display = "none";
        document.getElementById("headline").innerText =
          "Maming kooo cheers to another year!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("anniversary").style.display = "block";
        clearInterval(x);

        setTimeout(() => {
          window.location.href = "../countdown/pages/heart.html";
        }, 10000);
      }
    }, 0);
})();
