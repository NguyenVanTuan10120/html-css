var password = document.querySelector(".password");
var eyeOpen = document.querySelector(".eye-open");
var eyeClose = document.querySelector(".eye-close");
var email = document.querySelector(".email");
var form = document.querySelector(".form");

// ẩn password
eyeOpen.addEventListener("click", function () {
  eyeOpen.classList.add("hidden");
  eyeClose.classList.remove("hidden");
  password.setAttribute("type", "password");
});
// hiện password
eyeClose.addEventListener("click", function () {
  eyeClose.classList.add("hidden");
  eyeOpen.classList.remove("hidden");
  password.setAttribute("type", "text");
});

// hàm
function showError(input, message) {
  var parent1 = input.parentElement;
  var parent = parent1.parentElement;
  console.log(parent);
  var small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}
function showSuccess(input) {
  var parent1 = input.parentElement;
  var parent = parent1.parentElement;
  var small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

// hàm kiểm tra lỗi chưa điền thông tin
function checkEmptyError(listInput) {
  var isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = true;
      showError(input, "Vui lòng nhập thông tin");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}

// hàm kiểm tra email hợp lệ
function checkEmailError() {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  var isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email không hợp lệ");
  }
  return isEmailError;
}

// hàm kiểm tra độ dài nôi dung nhập vào
function checkLengthError(input, min) {
  input.value = input.value.trim();
  if (input.value.Length < min) {
    showError(input, `phải có ít nhất ${min} ký tự`);
    return true;
  }
  return false;
}

// hành động chính
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var isPasswordLength = checkLengthError(password, 6);
  var isEmptyError = checkEmptyError([email, password]);
  var isEmailError = checkEmailError(email);
});
