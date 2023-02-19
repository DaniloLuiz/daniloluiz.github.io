  $(function() {
    $('#sendForm').on('click', 'button', function(e) {
      e.preventDefault();
  
      var $form = $("#sendForm");
      var data = document.querySelector('#data').value;
      var dataf = new Date(data);
      var dataformatada = dataf.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      var horaTurno = document.querySelector('#horaTurno').value;
      var lote101 = document.querySelector('#lote101').value;
      var lote102 = document.querySelector('#lote102').value;
      var lote103 = document.querySelector('#lote103').value;
      var lote104 = document.querySelector('#lote104').value;
      var lote105 = document.querySelector('#lote105').value;
      var lote146 = document.querySelector('#lote146').value;
      var lote147 = document.querySelector('#lote147').value;
      var lote151 = document.querySelector('#lote151').value;
      var lote152 = document.querySelector('#lote152').value;
      var lote153 = document.querySelector('#lote153').value;
      
      /*var msg = "https://wa.me/?text=*UPDATE%20-%20Saldo%20Físico%20dos%20Lotes%20Internos*%0A" + dataformatada + "%20-%20" + horaTurno + "%0A%0A✓%20*Madeira%2008%20a%2018%20cm*%0A>>%20Lote%20101%20=%20" + lote101 + "%20tons%0A>>%20Lote%20102%20=%20" + lote102 + "%20tons%0A>>%20Lote%20103%20=%20" + lote103 + "%20tons%0A>>%20Lote%20104%20=%20" + lote104 + "%20tons%0A>>%20Lote%20105%20=%20" + lote105 + "%20tons%0A%0A✓%20*Madeira%2018%20a%2025%20cm*%0A>>%20Lote%20146%20=%20" + lote146 + "%20tons%0A>>%20Lote%20147%20=%20" + lote147 + "%20tons%0A%0A✓%20*Madeira%20de%20Eucalipto*%0A>>%20Lote%20151%20=%20" + lote151 + "%20tons%0A>>%20Lote%20152%20=%20" + lote152 + "%20tons%0A>>%20Lote%20153%20=%20" + lote153 + "%20tons";*/
      const msg = "https://wa.me/?text=*UPDATE%20-%20Saldo%20Físico%20dos%20Lotes%20Internos*%0A" + dataformatada + "%20-%20" + horaTurno + "%0A%0A" + encodeURIComponent("◻️") + "*Madeira%2008%20a%2018%20cm*%0A%20%20>>%20Lote%20101%20=%20" + lote101 + "%20tons%0A%20%20>>%20Lote%20102%20=%20" + lote102 + "%20tons%0A%20%20>>%20Lote%20103%20=%20" + lote103 + "%20tons%0A%20%20>>%20Lote%20104%20=%20" + lote104 + "%20tons%0A%20%20>>%20Lote%20105%20=%20" + lote105 + "%20tons%0A%0A" + encodeURIComponent("◻️") + "*Madeira%2018%20a%2025%20cm*%0A%20%20>>%20Lote%20146%20=%20" + lote146 + "%20tons%0A%20%20>>%20Lote%20147%20=%20" + lote147 + "%20tons%0A%0A" + encodeURIComponent("◻️") + "*Madeira%20de%20Eucalipto*%0A%20%20>>%20Lote%20151%20=%20" + lote151 + "%20tons%0A%20%20>>%20Lote%20152%20=%20" + lote152 + "%20tons%0A%20%20>>%20Lote%20153%20=%20" + lote153 + "%20tons";
      
      $form.attr('action', msg);
      $form.attr('target', '_blank');
      $form.submit();
    });
  });
