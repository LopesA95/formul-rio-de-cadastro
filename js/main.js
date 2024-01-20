$(document).ready(function () {
  var masks = {
    "#telefone": "(00) 00000-0000",
    "#cpf": "000.000.000-00",
    "#cep": "00000-000",
  };

  for (var id in masks) {
    $(id).mask(masks[id]);
  }

  $("#signupForm").on("submit", function (e) {
    var isValid = true;
    for (var id in masks) {
      if ($(id).val() === "") {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});
