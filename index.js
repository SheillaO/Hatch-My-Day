document.getElementById("bored-bot").addEventListener("click", buildDay);

function getTypes(energy) {
  if (energy === "low") return ["relaxation", "education", "music"];
  if (energy === "medium") return ["recreational", "cooking", "music"];
  if (energy === "high") return ["social", "diy", "recreational"];
}


function fetchActivity(type, participants, elementId) {
 
  const url =
    "https://apis.scrimba.com/bored/api/activity?type=" +
    type +
    "&participants=" +
    participants;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(elementId).textContent =
        data.activity || "Try something spontaneous!";
    })
    .catch(function () {
      document.getElementById(elementId).textContent =
        "Could not load — try again!";
    });
}

function buildDay() {
  const energy = document.querySelector('input[name="energy"]:checked').value;
  const participants = document.querySelector(
    'input[name="social"]:checked',
  ).value;
  const hours = parseInt(document.getElementById("hours").value);

  const types = getTypes(energy);

  document.getElementById("title").textContent = "Your Day, Hatched 🥚";
  document.body.classList.add("fun");

  document.getElementById("blueprint").style.display = "flex";

  document.getElementById("morning-card").style.display =
    hours >= 7 ? "flex" : "none";
  document.getElementById("afternoon-card").style.display = "flex";
  document.getElementById("evening-card").style.display =
    hours >= 4 ? "flex" : "none";

  if (hours >= 7) {
    fetchActivity(types[0], participants, "morning-activity");
  }
  fetchActivity(types[1], participants, "afternoon-activity");
  if (hours >= 4) {
    fetchActivity(types[2], participants, "evening-activity");
  }
}
