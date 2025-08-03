function handleOptionChange() {
  const optionType = document.getElementById("optionType").value;
  const interestSubOption = document.getElementById("interestSubOption");
  const simpleForm = document.getElementById("simpleForm");
  const compoundForm = document.getElementById("compoundForm");
  const discountForm = document.getElementById("discountForm");
  const taxForm = document.getElementById("taxForm");

  // Hide all sub-options/forms initially
  interestSubOption.style.display = "none";
  simpleForm.style.display = "none";
  compoundForm.style.display = "none";
  discountForm.style.display = "none";
  taxForm.style.display = "none";

  clearResults();

  if (optionType === "interest") {
    interestSubOption.style.display = "block";
  } else if (optionType === "discount") {
    discountForm.style.display = "block";
  } else if (optionType === "tax") {
    taxForm.style.display = "block";
  }
}

function handleInterestTypeChange() {
  const interestType = document.getElementById("interestType").value;
  const simpleForm = document.getElementById("simpleForm");
  const compoundForm = document.getElementById("compoundForm");

  simpleForm.style.display = "none";
  compoundForm.style.display = "none";

  clearResults();

  if (interestType === "simple") {
    simpleForm.style.display = "block";
  } else if (interestType === "compound") {
    compoundForm.style.display = "block";
  }
}

function calculateCompound() {
  const P = parseFloat(document.getElementById("P").value);
  const r = parseFloat(document.getElementById("r").value) / 100;
  const n = parseFloat(document.getElementById("n").value);
  const t = parseFloat(document.getElementById("t").value);

  if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t) || P < 0 || r < 0 || n < 1 || t < 0) {
    document.getElementById("result").innerText = "Please fill in all fields correctly.";
    return;
  }

  const S = P * Math.pow((1 + r / n), n * t);
  document.getElementById("result").innerText = `Final Amount (S) = ${S.toFixed(2)}`;
}

// New function to calculate simple interest (optional if you want consistency)
function calculateSimple() {
  const P = parseFloat(document.getElementById("simpleP").value);
  const r = parseFloat(document.getElementById("simpleR").value);
  const t = parseFloat(document.getElementById("simpleT").value);

  if (isNaN(P) || isNaN(r) || isNaN(t) || P < 0 || r < 0 || t < 0) {
    document.getElementById("simpleResult").innerText = "Please fill in all fields correctly.";
    return;
  }

  const SI = (P * r * t) / 100;
  document.getElementById("simpleResult").innerText = `Simple Interest (SI) = ${SI.toFixed(2)}`;
}

// Discount calculation function
function calculateDiscount() {
  const originalPrice = parseFloat(document.getElementById("discountOriginalPrice").value);
  const discountRate = parseFloat(document.getElementById("discountRate").value);

  if (isNaN(originalPrice) || isNaN(discountRate) || originalPrice < 0 || discountRate < 0) {
    document.getElementById("discountResult").innerText = "Please fill in all fields correctly.";
    return;
  }

  const discountAmount = (originalPrice * discountRate) / 100;
  const priceAfterDiscount = originalPrice - discountAmount;

  document.getElementById("discountResult").innerText = `Discount = ${discountAmount.toFixed(2)}\nPrice After Discount = ${priceAfterDiscount.toFixed(2)}`;
}

// Tax calculation function
function calculateTax() {
  const originalPrice = parseFloat(document.getElementById("taxOriginalPrice").value);
  const taxRate = parseFloat(document.getElementById("taxRate").value);

  if (isNaN(originalPrice) || isNaN(taxRate) || originalPrice < 0 || taxRate < 0) {
    document.getElementById("taxResult").innerText = "Please fill in all fields correctly.";
    return;
  }

  const taxAmount = (originalPrice * taxRate) / 100;
  const priceAfterTax = originalPrice + taxAmount;

  document.getElementById("taxResult").innerText = `Tax = ${taxAmount.toFixed(2)}\nPrice After Tax = ${priceAfterTax.toFixed(2)}`;
}

// Utility function to clear all results
function clearResults() {
  document.getElementById("result").innerText = "";
  document.getElementById("simpleResult").innerText = "";
  document.getElementById("discountResult").innerText = "";
  document.getElementById("taxResult").innerText = "";
}
