const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
let newMessage = 0;
const messageSent = document.getElementById("messageSent");
const messageTo = document.getElementById("messageTo");
const notifications = document.getElementById("notifications");
// ================== alert banner ======================
notifications.addEventListener("click", () => {
  alertBanner.innerHTML = `<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>${newMessage}</strong> new message!</p>
<p class="alert-banner-close">X</p>
</div>`;

  alertBanner.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.innerHTML = ``;
    }
  });
});
// ================== traffic chart ======================
let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
};
let trafficOptions = {
  backgroundColor: "rgba(112, 104, 201, .5)",
  fill: true,
  lineTension: 0.4,
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
});
// ================== daily bar ======================
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};
const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});
// ================== mobile users ======================
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
};
const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
};
let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});
// ================== messages ======================
send.addEventListener("click", () => {
  event.preventDefault();
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    return;
  }

  if (user.value === "") {
    alert("Please fill out user field before sending");
    return;
  }

  if (message.value === "") {
    alert("Please fill out message field before sending");
    return;
  }

  messageTo.innerHTML = `<div class="sent-banner">
  <p>Message sent to: ${user.value}</p>
  <p class="sent-banner-close">X</p> </div>`;
  messageSent.classList.add("show");
  setTimeout(() => {
    messageSent.classList.remove("show");
  }, 3000);

  messageSent.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("sent-banner-close")) {
      messageSent.classList.remove("show");
    }
  });
  user.value = "";
  message.value = "";
  newMessage++;
  bubble();
});
function bubble() {
  const bubble = document.getElementById("bubble");
  if (newMessage > 0) {
    bubble.classList.add("notificationBubble");
  }
}
