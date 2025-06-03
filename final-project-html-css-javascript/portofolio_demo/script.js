document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recommendation-form");
  const recommendationList = document.getElementById("recommendation-list");
  const textarea = document.getElementById("new-rec");
  const popup = document.getElementById("popup-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const recommendationText = textarea.value.trim();
    if (recommendationText.length === 0) {
      showPopup("Please enter a recommendation before submitting.");
      return;
    }

    const newRec = document.createElement("blockquote");
    newRec.textContent = recommendationText;
    recommendationList.appendChild(newRec);

    // Show confirmation bubble
    showPopup("Thank you for leaving a recommendation!");

    textarea.value = "";
  });

  function showPopup(message) {
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000); // Show for 3 seconds
  }
});
