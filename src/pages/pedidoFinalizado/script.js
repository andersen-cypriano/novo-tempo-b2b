const checkoutFinalizado = {
  updateLabels: function () {
    document.querySelector('#mensagemEntrega h3').textContent = 'Recebemos seu pedido';
    document.querySelector('#mensagemEntrega .lead').textContent = 'Em breve entraremos em contato com você.'
  },
  init: function () {
    this.updateLabels();
  }
}

window.addEventListener('load', ()=> {
  checkoutFinalizado.init()
})