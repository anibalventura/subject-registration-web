$(document).ready(() => {
  const formInputs = [
    $("#name"),
    $("#email"),
    $("#province"),
    $("#city"),
    $("#neighborhood"),
    $("#street"),
    $("#study-program"),
  ];

  let valueName = "";
  let valueEmail = "";
  let valueProvince = "";
  let valueCity = "";
  let valueNeighborhood = "";
  let valueStreet = "";
  let valueStudyProgram = "";

  // Show current year in footer.
  $("#current-year").text(new Date().getFullYear());

  // Button clear event.
  $("#btn-clear").on("click", function () {
    clearForm();
  });

  // Button register event.
  $("#btn-register").on("click", function () {
    register();
  });

  // Generic toast options.
  toastr.options = {
    TimeOut: 1500,
    closeButton: true,
    preventDuplicates: true,
    positionClass: "toast-top-right",
  };

  // Clean student information form.
  const clearForm = () => {
    formInputs.forEach((input) => {
      input.val("");
      input.removeClass("input-invalid");
    });

    valueName = "";
    valueEmail = "";
    valueProvince = "";
    valueCity = "";
    valueNeighborhood = "";
    valueStreet = "";
    valueStudyProgram = "";
  };

  // Register student information.
  const register = () => {
    // Get student information.
    valueName = $("#name").val();
    valueEmail = $("#email").val();
    valueProvince = $("#province").val();
    valueCity = $("#city").val();
    valueNeighborhood = $("#neighborhood").val();
    valueStreet = $("#street").val();
    valueStudyProgram = $("#study-program").val();

    if (validateForm()) {
      clearForm();

      toastr.success("Register successfully.", "Notification");
    } else {
      toastr.error("Please complete all fields", "Notification");
    }
  };

  // Validate student information form.
  const validateForm = () => {
    let isValid = true;

    formInputs.forEach((input) => {
      if (
        input.val() == "" ||
        input.val() == undefined ||
        input.val() == null
      ) {
        isValid = false;
        input.addClass("input-invalid");
      } else {
        input.removeClass("input-invalid");
      }
    });

    return isValid;
  };
});
