const checkout = {
  updateOption: function () {
    document.querySelectorAll('#id_escolher_tipo_pagamento option')[1].textContent = 'A combinar'
  },
  init: function () {
    this.updateOption();
  }
}

window.addEventListener('load', ()=> {
  window.location.pathname == '/checkout' ? checkout.init() : null;
})

