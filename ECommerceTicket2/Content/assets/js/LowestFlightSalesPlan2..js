// Lấy tham chiếu đến nút
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
    scrollToTopBtn.classList.remove("show");
  }
});

// Lắng nghe sự kiện click nút để cuộn lên đầu
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelectorAll(".toggle-menu").forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    // Lấy target từ data-target
    const targetId = toggleButton.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      if (targetElement.classList.contains("visible")) {
        targetElement.classList.remove("visible");
        targetElement.classList.add("hidden");
      } else {
        targetElement.classList.remove("hidden");
        targetElement.classList.add("visible");
      }
    }
  });
});

const form__checkbox = document.querySelectorAll(".form__checkbox");
console.log("🚀 ~ form__checkbox:", form__checkbox);
form__checkbox.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".khuhoihienthidate").classList.add("khuhoi");
    document.querySelector(".khuhoihienthiimg").classList.add("khuhoi");
    document.querySelector("#khuhoiimgnone").classList.remove("khuhoi");
    const btn__add = document.querySelector(".add__Changduong");
    btn__add.style.display = "none";
    const addthemright2 = document.querySelectorAll(".addthemright2");
    addthemright2.forEach((e) => {
      e.style.display = "none";
    });
  });
  document.querySelectorAll(".addthemright3").forEach((e) => {
    e.remove();
  });
});
const khuhoiinput = document.querySelector(".khuhoiinput");
khuhoiinput.addEventListener("click", () => {
  document.querySelector(".khuhoihienthidate").classList.remove("khuhoi");
  document.querySelector(".khuhoihienthiimg").classList.remove("khuhoi");
  document.querySelector("#khuhoiimgnone").classList.add("khuhoi");
  const btn__add = document.querySelector(".add__Changduong");
  btn__add.style.display = "none";
  const addthemright2 = document.querySelectorAll(".addthemright2");
  addthemright2.forEach((e) => {
    e.style.display = "none";
  });
  document.querySelectorAll(".addthemright3").forEach((e) => {
    e.remove();
  });
});

const nhieuchanginput = document.querySelector(".nhieuchanginput");

nhieuchanginput.addEventListener("click", () => {
  const btn__add = document.querySelector(".add__Changduong");
  btn__add.style.display = "flex";
  const addthemright2 = document.querySelectorAll(".addthemright2");
  addthemright2.forEach((e) => {
    e.style.display = "flex";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Biến lưu số lượng form hiện tại
  let formCount = 0;

  // Hàm tạo một form chuyến bay
  function createJourneyForm() {
    // Tạo phần tử div cha
    const journeyForm = document.createElement("div");
    journeyForm.className = `journey-form journey-form-location btm addthemright3 journey-form-${formCount}`; // Thêm class với số form

    // Tạo journey-box departure
    const departureBox = document.createElement("div");
    departureBox.className =
      "journey-box journey-box--departure b uppercase-text";

    const departureLabel = document.createElement("label");
    departureLabel.setAttribute("for", "departure");

    const departureImg = document.createElement("img");
      departureImg.src = "~/Content/assets/svg/icons/plane_search.svg";
    departureImg.alt = "";
    departureLabel.appendChild(departureImg);
    departureLabel.appendChild(document.createTextNode("Điểm đi:"));

    const departureLocation = document.createElement("p");
    departureLocation.className = "location-span";
    departureLocation.textContent = "Ha Noi";

    // Thêm các phần tử vào departureBox
    departureBox.appendChild(departureLabel);
    departureBox.appendChild(departureLocation);

    // Tạo icon-togle
    const iconTogle = document.createElement("div");
    iconTogle.className = "icon-togle";

    const khuhoiDiv = document.createElement("div");
    khuhoiDiv.className = "khuhoi khuhoihienthiimg";

    const khuhoiImg = document.createElement("img");
      khuhoiImg.src = "~/Content/assets/svg/icons/round-trip.svg";
    khuhoiImg.alt = "";
    khuhoiDiv.appendChild(khuhoiImg);

    const motchieuImg = document.createElement("img");
    motchieuImg.id = "khuhoiimgnone";
      motchieuImg.src = "~/Content/assets/svg/motchieu.svg";
    motchieuImg.alt = "";

    // Thêm các phần tử vào iconTogle
    iconTogle.appendChild(khuhoiDiv);
    iconTogle.appendChild(motchieuImg);

    // Tạo journey-box destination
    const destinationBox = document.createElement("div");
    destinationBox.className =
      "journey-box journey-box--destination b uppercase-text";

    const destinationLabel = document.createElement("label");
    destinationLabel.setAttribute("for", "destination");

    const destinationImg = document.createElement("img");
      destinationImg.src = "~/Content/assets/svg/icons/map_search.svg";
    destinationImg.alt = "";
    destinationLabel.appendChild(destinationImg);
    destinationLabel.appendChild(document.createTextNode("Điểm đến:"));

    const destinationLocation = document.createElement("p");
    destinationLocation.className = "location-span";
    destinationLocation.textContent = "Ho Chi Minh";

    // Thêm các phần tử vào destinationBox
    destinationBox.appendChild(destinationLabel);
    destinationBox.appendChild(destinationLocation);

    // Thêm tất cả các phần tử con vào journeyForm
    journeyForm.appendChild(departureBox);
    journeyForm.appendChild(iconTogle);
    journeyForm.appendChild(destinationBox);

    return journeyForm;
  }

  // Hàm tạo form đơn giản
  function createSimpleJourneyForm() {
    // Tạo div cha
    const journeyForm = document.createElement("div");
    journeyForm.className = `journey-form btm addthemright3 journey-form-${formCount}`; // Thêm class với số form

    // Tạo box Ngày đi
    const departureDateBox = document.createElement("div");
    departureDateBox.className =
      "journey-box journey-box--date journey-date--departure b";

    const departureDateLabel = document.createElement("label");
    departureDateLabel.setAttribute("for", "departure-date");
      departureDateLabel.innerHTML = `<img src="~/Content/assets/svg/icons/date_search.svg" alt="">Ngày đi`;

    const departureDateInput = document.createElement("input");
    departureDateInput.type = "date";
    departureDateInput.id = "departure-date";

    departureDateBox.appendChild(departureDateLabel);
    departureDateBox.appendChild(document.createElement("br")); // Xuống dòng
    departureDateBox.appendChild(departureDateInput);

    // Tạo box Ngày về
    const returnDateBox = document.createElement("div");
    returnDateBox.className =
      "journey-box journey-box--date journey-date--return b khuhoi khuhoihienthidate";

    const returnDateLabel = document.createElement("label");
    returnDateLabel.setAttribute("for", "return-date");
      returnDateLabel.innerHTML = `<img src="~/Content/assets/svg/icons/date_search.svg" alt="">Ngày về`;

    const returnDateInput = document.createElement("input");
    returnDateInput.type = "date";
    returnDateInput.id = "return-date";

    returnDateBox.appendChild(returnDateLabel);
    returnDateBox.appendChild(document.createElement("br")); // Xuống dòng
    returnDateBox.appendChild(returnDateInput);

    // Tạo box Hành khách
    const customerBox = document.createElement("div");
    customerBox.className = "journey-box journey-box--customer";

    const customerLabel = document.createElement("label");
      customerLabel.innerHTML = `<img src="~/Content/assets/svg/icons/user_search.svg" alt=""> Hành Khách`;

    const customerInfo = document.createElement("u");
    customerInfo.innerHTML = `<span class="b">1</span> Người lớn, <span class="b">1</span> trẻ em, <span class="b">1</span> em bé`;

    customerBox.appendChild(customerLabel);
    customerBox.appendChild(document.createElement("br")); // Xuống dòng
    customerBox.appendChild(customerInfo);

    // Gắn tất cả các phần tử vào form chính
    journeyForm.appendChild(departureDateBox);
    journeyForm.appendChild(returnDateBox);
    journeyForm.appendChild(customerBox);

    // // Thêm nút xóa
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "x";
    deleteButton.className = `delete-flight-btn delete-form-${formCount}`;

    // Thêm thuộc tính mới vào nút xóa, ví dụ: data-id với giá trị formCount
    deleteButton.setAttribute("data-id", `journey-form-${formCount}`);

    // const deleteButton = document.createElement("span");
    // deleteButton.textContent = "x";
    // deleteButton.className = `delete-flight-btn delete-form-${formCount}`;
    // deleteButton.addEventListener("click", function () {
    //   // Call the deleteJourneyForm function when the button is clicked
    //   deleteJourneyForm(formCount);
    // });

    journeyForm.appendChild(deleteButton);

    return journeyForm;
  }

  // Bắt sự kiện click vào nút "Thêm chuyến bay"
  const addFlightButton = document.querySelector(".add__Changduong");
  const addFlightContainer = document.querySelector(".addThemFormLeft");
  const addthemFormRight = document.querySelector(".addthemFormRight");
  addFlightButton.addEventListener("click", function () {
    formCount++;

    const newJourneyForm = createJourneyForm();
    const newaddthemFormRight = createSimpleJourneyForm();
    addFlightContainer.appendChild(newJourneyForm);
    addthemFormRight.appendChild(newaddthemFormRight);

    document.querySelectorAll(".delete-flight-btn").forEach((e) => {
      e.addEventListener("click", () => {
        console.log(e.getAttribute("data-id"));
        deleteJourneyForm(e.getAttribute("data-id"));
      });
    });
  });
});
function deleteJourneyForm(formCount) {
  // Tìm tất cả các phần tử có class tương ứng với formCount và xóa chúng
  document.querySelectorAll(`.${formCount}`).forEach((element) => {
    element.remove();
  });
}
