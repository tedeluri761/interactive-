let slider = document.getElementById("slider");
let dollar = document.getElementById("dollar");
let circle = document.getElementById("circle");
let monthlybilling = document.getElementById("monthlyblilling");
let yearlybilling = document.getElementById("yearlybilling");

let originalPrice = "$8.00";

slider.addEventListener("input", function () {
  console.log(slider.value);
  if (parseInt(slider.value) === 1) {
    originalPrice = "$8.00";
    dollar.textContent = originalPrice;
    updatePageviews();
  } else if (parseInt(slider.value) === 2) {
    originalPrice = "$12.00";
    dollar.textContent = originalPrice;
    updatePageviews();
  } else if (parseInt(slider.value) === 3) {
    originalPrice = "$16.00";
    dollar.textContent = originalPrice;
    updatePageviews();
  } else if (parseInt(slider.value) === 4) {
    originalPrice = "$24.00";
    dollar.textContent = originalPrice;
    updatePageviews();
  } else if (parseInt(slider.value) === 5) {
    originalPrice = "$36.00";
    dollar.textContent = originalPrice;
    updatePageviews();
  }
});

let number = true;

function discount() {
  let dollarAmount = parseFloat(dollar.textContent.replace(/[$,]/g, ""));

  if (number === true) {
    circle.style.justifyContent = "flex-end";
    number = false;
    monthlybilling.style.color = "rgba(132, 142, 173, 1)";
    yearlybilling.style.color = "rgba(164, 243, 235, 1)";

    let lastdiscountNumber = (dollarAmount / 100) * 25;
    dollar.textContent = "$" + (dollarAmount - lastdiscountNumber);
  } else {
    circle.style.justifyContent = "";
    monthlybilling.style.color = "rgba(164, 243, 235, 1)";
    yearlybilling.style.color = "rgba(132, 142, 173, 1)";
    dollar.textContent = originalPrice;
    number = true;
  }
}

circle.addEventListener("click", discount);

function updatePageviews() {
  const pageviewsMap = {
    1: "10K",
    2: "50K",
    3: "100K",
    4: "500K",
    5: "1M",
  };

  document.getElementById("pageviews").textContent =
    `${pageviewsMap[slider.value]} PAGEVIEWS`;
}
