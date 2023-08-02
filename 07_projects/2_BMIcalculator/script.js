const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (parseInt(bmi) < 18) {
      results.innerHTML = `${bmi} you are under weight`;
    } else if (parseInt(bmi) > 24) {
      results.innerHTML = `${bmi} you are over weight`;
    } else if (parseInt(bmi) > 18 || parseInt(bmi) < 24) {
      results.innerHTML = `${bmi} you are in normal range`;
    }
  }
});
