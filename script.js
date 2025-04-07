const bands = [
  "Anywhere But Here",
  "The Bled",
  "Counterparts",
  "The Devil Wears Prada",
  "The Midway State",
  "Norma Jean",
  "Oh, Sleeper",
  "An Old Dog",
  "Pierce the Veil",
  "The Plot in You",
  "Say Anything"
];

const bandList = document.getElementById("bands");

bands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  bandList.appendChild(li);
});
