$(document).ready(() => {
  let studentName = "";
  let studentEmail = "";
  let studentProvince = "";
  let studentCity = "";
  let studentNeighborhood = "";
  let studentStreet = "";
  let studentStudyProgram = "";
  let selectedStudyProgram = {};

  // Show current year in footer.
  $("#current-year").text(new Date().getFullYear());

  // Clear register form event.
  $("#content-container").on("click", "#btn-clear", () => {
    clearRegisterForm();
  });

  // Continue with selection event.
  $("#content-container").on("click", "#btn-continue", () => {
    registerStudent();
  });

  // Back to registration form.
  $("#content-container").on("click", "#btn-back", () => {
    generateRegistrationForm();
  });

  // Generic toast options.
  toastr.options = {
    TimeOut: 1500,
    closeButton: true,
    preventDuplicates: true,
    positionClass: "toast-top-right",
  };

  // Clean student information form.
  const clearRegisterForm = () => {
    const registerFormInputs = [
      $("#name"),
      $("#email"),
      $("#province"),
      $("#city"),
      $("#neighborhood"),
      $("#street"),
      $("#study-program"),
    ];

    registerFormInputs.forEach((input) => {
      input.val("");
      input.removeClass("input-invalid");
    });

    studentName = "";
    studentEmail = "";
    studentProvince = "";
    studentCity = "";
    studentNeighborhood = "";
    studentStreet = "";
    studentStudyProgram = "";
  };

  // Register student information.
  const registerStudent = () => {
    // Get student information.
    studentName = $("#name").val();
    studentEmail = $("#email").val();
    studentProvince = $("#province").val();
    studentCity = $("#city").val();
    studentNeighborhood = $("#neighborhood").val();
    studentStreet = $("#street").val();
    studentStudyProgram = $("#study-program").val();

    if (validateRegisterForm()) {
      generateSubjectsSelection();
    } else {
      toastr.error("Please complete all fields.", "Error!");
    }
  };

  // Validate student information form.
  const validateRegisterForm = () => {
    const registerFormInputs = [
      $("#name"),
      $("#email"),
      $("#province"),
      $("#city"),
      $("#neighborhood"),
      $("#street"),
      $("#study-program"),
    ];

    let isValid = true;

    registerFormInputs.forEach((input) => {
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

  const generateRegistrationForm = () => {
    $("#content-container").html(`
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="card shadow-sm">
            <div class="card-header bg-dark text-light">
              <h5 class="card-title mt-2">Student Information</h5>
            </div>
            <div class="card-body">
              <div id="resume-form">
                <div class="row form-group mb-3">
                  <div class="col">
                    <label for="name" class="form-label">
                      <strong>Name:</strong>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Ex. John Doe"
                      class="form-control shadow-sm"
                    />
                  </div>
                  <div class="col">
                    <label for="email" class="form-label">
                      <strong>Email:</strong>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Ex. johndoe@email.com"
                      class="form-control shadow-sm"
                    />
                  </div>
                </div>

                <div class="row form-group mb-3">
                  <div class="col">
                    <label for="province" class="form-label">
                      <strong>Province:</strong>
                    </label>
                    <input
                      id="province"
                      type="text"
                      placeholder="Ex. Ontario"
                      class="form-control shadow-sm"
                    />
                  </div>
                  <div class="col">
                    <label for="city" class="form-label">
                      <strong>City:</strong>
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Ex. Toronto"
                      class="form-control shadow-sm"
                    />
                  </div>
                </div>

                <div class="row form-group mb-3">
                  <div class="col">
                    <label for="neighborhood" class="form-label">
                      <strong>Neighborhood:</strong>
                    </label>
                    <input
                      id="neighborhood"
                      type="text"
                      placeholder="Ex. Westmount"
                      class="form-control shadow-sm"
                    />
                  </div>
                  <div class="col">
                    <label for="street" class="form-label">
                      <strong>Street:</strong>
                    </label>
                    <input
                      id="street"
                      type="text"
                      placeholder="Ex. 123 Main St"
                      class="form-control shadow-sm"
                    />
                  </div>
                </div>

                <div class="row form-group mb-3">
                  <div class="col-6">
                    <label for="study-program" class="form-label">
                      <strong>Study program:</strong>
                    </label>
                    <select id="study-program" class="form-select">
                      <option value="" selected>
                        Select an option
                      </option>
                      <option value="software-development">
                        Software Development
                      </option>
                      <option value="mechatronic">Mechatronic</option>
                      <option value="informatic-security">Informatic Security</option>
                    </select>
                  </div>
                </div>

                <div class="d-flex align-items-end justify-content-end mt-4">
                  <button
                    id="btn-clear"
                    class="btn btn-secondary shadow-sm px-4 me-3"
                  >
                    Clear
                  </button>
                  <button id="btn-continue" class="btn btn-primary shadow-sm px-3">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    $("#name").val(studentName);
    $("#email").val(studentEmail);
    $("#province").val(studentProvince);
    $("#city").val(studentCity);
    $("#neighborhood").val(studentNeighborhood);
    $("#street").val(studentStreet);
    $("#study-program").val(studentStudyProgram);
  };

  // Remove form and show subject selection.
  const generateSubjectsSelection = () => {
    $("#content-container").html(`
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="card shadow-sm">
            <div class="card-header bg-dark text-light">
              <h5 class="card-title mt-2">Subject Selection</h5>
            </div>
            <div class="card-body">
              <div id="accordion-container" class="accordion">
              </div>

              <div class="d-flex align-items-end justify-content-end mt-4">
                <button id="btn-back" class="btn btn-secondary shadow-sm px-4 me-3">
                  Back
                </button>
                <button id="btn-continue" class="btn btn-primary shadow-sm px-3">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    const studyPrograms = {
      software: [
        {
          subject: {
            name: "Programming II",
            value: "programming-ii",
            days: ["Mon 8:00 - 9:15", "Tue 9:30 - 10:45", "Wed 10:00 - 11:15"],
          },
        },
        {
          subject: {
            name: "Analysis and design of systems",
            value: "analysis-and-design-of-systems",
            days: ["Tue 11:30 - 12:45", "Wed 12:00 - 13:15"],
          },
        },
        {
          subject: {
            name: "Advanced Database",
            value: "advanced-database",
            days: ["Wed 13:30 - 14:45", "Thu 14:00 - 15:15"],
          },
        },
        {
          subject: {
            name: "Data Mining and Business Intelligence",
            value: "data-mining-and-business-intelligence",
            days: ["Thu 15:30 - 16:45", "Fri 16:00 - 17:15"],
          },
        },
        {
          subject: {
            name: "Web programming",
            value: "web-programming",
            days: ["Fri 17:30 - 18:45", "Sat 18:00 - 19:15"],
          },
        },
      ],
      mechatronic: [
        {
          subject: {
            name: "Electrical Circuits I",
            value: "electrical-circuits-i",
            days: ["Mon 8:00 - 9:15", "Tue 9:30 - 10:45", "Wed 10:00 - 11:15"],
          },
        },
        {
          subject: {
            name: "Mechanics physics",
            value: "mechanics-physics",
            days: ["Tue 11:30 - 12:45", "Wed 12:00 - 13:15"],
          },
        },
        {
          subject: {
            name: "Industrial Safety and Occupational Health",
            value: "industrial-safety-and-occupational-health",
            days: ["Wed 13:30 - 14:45", "Thu 14:00 - 15:15"],
          },
        },
        {
          subject: {
            name: "Metrology",
            value: "metrology",
            days: ["Thu 15:30 - 16:45", "Fri 16:00 - 17:15"],
          },
        },
        {
          subject: {
            name: "Probability and statistics",
            value: "probability-and-statistics",
            days: ["Fri 17:30 - 18:45", "Sat 18:00 - 19:15"],
          },
        },
      ],
      security: [
        {
          subject: {
            name: "Switching and Routing",
            value: "switching-and-routing",
            days: ["Mon 8:00 - 9:15", "Tue 9:30 - 10:45", "Wed 10:00 - 11:15"],
          },
        },
        {
          subject: {
            name: "Security of operating systems",
            value: "security-of-operating-systems",
            days: ["Tue 11:30 - 12:45", "Wed 12:00 - 13:15"],
          },
        },
        {
          subject: {
            name: "Legal aspects of Cybersecurity",
            value: "legal-aspects-of-cybersecurity",
            days: ["Wed 13:30 - 14:45", "Thu 14:00 - 15:15"],
          },
        },
        {
          subject: {
            name: "Fundamentals of Cryptography",
            value: "fundamentals-of-cryptography",
            days: ["Thu 15:30 - 16:45", "Fri 16:00 - 17:15"],
          },
        },
        {
          subject: {
            name: "Ethical Hacker I",
            value: "ethical-hacker-i",
            days: ["Fri 17:30 - 18:45", "Sat 18:00 - 19:15"],
          },
        },
      ],
    };

    if (studentStudyProgram === "software-development") {
      selectedStudyProgram = studyPrograms.software;
    } else if (studentStudyProgram === "mechatronic") {
      selectedStudyProgram = studyPrograms.mechatronic;
    } else if (studentStudyProgram === "informatic-security") {
      selectedStudyProgram = studyPrograms.security;
    }

    for (let i = 0; i < selectedStudyProgram.length; i++) {
      $("#accordion-container").append(`
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${i}">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse${i}"
              aria-expanded="false"
              aria-controls="collapse${i}"
            >
              ${selectedStudyProgram[i].subject.name}
            </button>
          </h2>
          <div
            id="collapse${i}"
            class="accordion-collapse collapse"
            aria-labelledby="heading${i}"
          >
            <div class="accordion-body">
              <div id="radio-container-${selectedStudyProgram[i].subject.value}" class="mb-3">
                
              </div>
            </div>
          </div>
        </div>
      `);

      selectedStudyProgram[i].subject.days.forEach((day) => {
        $(`#radio-container-${selectedStudyProgram[i].subject.value}`).append(`
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="${selectedStudyProgram[i].subject.value}"
              id="${day}"
              value="${day}"
            />
            <label class="form-check-label" for="${day}">
              ${day}
            </label>
          </div>
        `);
      });
    }
  };
});
