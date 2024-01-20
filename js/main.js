$(document).ready(function(){
  var masks = {
    '#telefone': '(00) 00000-0000',
    '#cpf': '000.000.000-00',
    '#cep': '00000-000'
  };

  for (var id in masks) {
    $(id).mask(masks[id]);
  }

  // Adicione um evento de submit ao seu formulário
  $('#signupForm').on('submit', function(e) {
    // Verifique se todas as validações foram preenchidas
    var isValid = true;
    for (var id in masks) {
      if ($(id).val() === '') {
        isValid = false;
        break;
      }
    }

    // Se não estiver válido, evite a submissão do formulário
    if (!isValid) {
      e.preventDefault();
    }
  });
});

