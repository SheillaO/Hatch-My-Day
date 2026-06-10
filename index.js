// Same event listener pattern as the original — just a new function name
document.getElementById("bored-bot").addEventListener("click", buildDay);

// Maps the user's energy level to three activity types (morning, afternoon, evening)
function getTypes(energy) {
  if (energy === "low") return ["relaxation", "education", "music"];
  if (energy === "medium") return ["recreational", "cooking", "music"];
  if (energy === "high") return ["social", "diy", "recreational"];
}

// Fetches one activity and puts it into the right card
// Same fetch + .then() pattern as the original — now reusable
function fetchActivity(type, participants, elementId) {
  const url =
    "https://www.boredapi.com/api/activity?type=" +
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
  // Read all three inputs
  const energy = document.querySelector('input[name="energy"]:checked').value;
  const participants = document.querySelector(
    'input[name="social"]:checked',
  ).value;
  const hours = parseInt(document.getElementById("hours").value);

  const types = getTypes(energy);

  // Update heading and background — same pattern as original
  document.getElementById("title").textContent = "Your Day, Hatched 🥚";
  document.body.classList.add("fun");

  // Show the blueprint section
  document.getElementById("blueprint").style.display = "flex";

  // Show the right number of blocks based on available hours
  // 1-3 hrs: afternoon only | 4-6 hrs: morning + afternoon | 7+ hrs: all three
  document.getElementById("morning-card").style.display =
    hours >= 7 ? "flex" : "none";
  document.getElementById("afternoon-card").style.display = "flex";
  document.getElementById("evening-card").style.display =
    hours >= 4 ? "flex" : "none";

  // Fetch one activity for each visible block
  if (hours >= 7) {
    fetchActivity(types[0], participants, "morning-activity");
  }
  fetchActivity(types[1], participants, "afternoon-activity");
  if (hours >= 4) {
    fetchActivity(types[2], participants, "evening-activity");
  }
}
