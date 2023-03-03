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

const trafficHourly = document.getElementById("hourly");
const trafficDaily = document.getElementById("daily");
const trafficWeekly = document.getElementById("weekly");
const trafficMonthly = document.getElementById("monthly");
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
let trafficDataWeekly = {
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
      borderWidth: 3,
    },
  ],
};
let trafficDataDaily = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesdays",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      data: [400, 600, 300, 625, 475, 750, 550],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 3,
    },
  ],
};
let trafficDataMonthly = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [
        2250, 3500, 4250, 2750, 3100, 2500, 3500, 4300, 3750, 3400, 2900, 3000,
      ],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 3,
    },
  ],
};
let trafficDataHourly = {
  labels: [
    "2AM",
    "4AM",
    "6AM",
    "8AM",
    "10AM",
    "12PM",
    "2PM",
    "4PM",
    "6PM",
    "8PM",
    "10PM",
    "12AM",
  ],
  datasets: [
    {
      data: [11, 15, 08, 13, 20, 25, 19, 30, 35, 43, 33, 21],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 3,
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

// event listeners for traffic nav

trafficHourly.addEventListener("click", (e) => {
  trafficChart.data.labels = trafficDataHourly.labels;
  trafficChart.data.datasets[0].data = trafficDataHourly.datasets[0].data;
  trafficChart.update();
});

trafficDaily.addEventListener("click", (e) => {
  trafficChart.data.labels = trafficDataDaily.labels;
  trafficChart.data.datasets[0].data = trafficDataDaily.datasets[0].data;
  trafficChart.update();
});

trafficWeekly.addEventListener("click", (e) => {
  trafficChart.data.labels = trafficDataWeekly.labels;
  trafficChart.data.datasets[0].data = trafficDataWeekly.datasets[0].data;
  trafficChart.update();
});

trafficMonthly.addEventListener("click", (e) => {
  trafficChart.data.labels = trafficDataMonthly.labels;
  trafficChart.data.datasets[0].data = trafficDataMonthly.datasets[0].data;
  trafficChart.update();
});

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesdays",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        data: [400, 600, 300, 625, 475, 750, 550],
        backgroundColor: "rgba(116, 119, 191, 0.3)",
        borderWidth: 1,
      },
    ],
  },
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
  responsive: true,
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
  responsive: true,
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
