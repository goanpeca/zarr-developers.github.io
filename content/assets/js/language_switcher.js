window.addEventListener("DOMContentLoaded", function() {
  let current_language = localStorage.getItem("current_language");
  let page_language = localStorage.getItem("page_language");
  if (current_language !== page_language) {
    // No language set, defaulting to English
    current_language = page_language || "en";
  }
  console.log(current_language);
  // Set the option in the select element to have the "selected" attribute
  var selectElement = document.getElementById("select_language");
  var selectedOption = selectElement.querySelector(
    'option[value="' + current_language + '"]'
  );
  if (selectedOption) {
    selectedOption.setAttribute("selected", "");
  }
});

// Change language for current page
function change_language() {
  let page_language = localStorage.getItem("page_language");
  var selectElement = document.getElementById("select_language");
  var new_language = selectElement.options[selectElement.selectedIndex].value;

  // Get the current page URL
  const currentPageUrl = window.location.href;
  localStorage.setItem("current_language", new_language);
  window.location.href = currentPageUrl.replace(
    "/" + page_language + "/",
    "/" + new_language + "/"
  );
}
