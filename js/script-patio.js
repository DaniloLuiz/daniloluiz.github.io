$(function() {
  $('#sendForm').on('click', 'button', function(e) {
    e.preventDefault();

    var $form = $("#sendForm");
    
    var data = document.querySelector('#data').value;
    var dataf = new Date(data);
    var dataformatada = dataf.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    var horaTurno = document.querySelector('#horaTurno').value;
    var producao = document.querySelector('#producao').value;
    var pt01 = document.querySelector('#pt01').value;
    var pt02 = document.querySelector('#pt02').value;
    var dds = document.querySelector('#dds').value;
    var entupimentos = document.querySelector('#entupimentos').value;
    var enroscos = document.querySelector('#enroscos').value;
    var energia = document.querySelector('#energia').value;
    var mecanica = document.querySelector('#mecanica').value;
    var lubrificacao = document.querySelector('#lubrificacao').value;
    var outros = document.querySelector('#outros').value;
    var minTotal = +dds + +entupimentos + +enroscos + +energia + +mecanica + +lubrificacao + +outros;
    var intertravamento = document.querySelector('#intertravamento').value;
    var observacao = document.querySelector('#observacao').value;
    var afiado = document.querySelector('#afiado').value;
    var transbordo = document.querySelector('#transbordo').value;
    var pendencias = document.querySelector('#pendencias').value;
    
    var msg = "https://wa.me/?text=*UPDATE%20-%20Pátio%20de%20Madeiras*%0A" + dataformatada + "%20-%20" + horaTurno + "%0A%0A*Produção atual:*%20" + producao + "%20tn%0A%0A*Última%20troca%20de%20facas*%0A" + encodeURIComponent("✅") + "%20*PT-01:*%20" + pt01 + "%20hrs%0A"+ encodeURIComponent("✅") + "%20*PT-02:*%20" + pt02 + "%20hrs%0A%0A*Paradas%20do%20processo*%0A" + encodeURIComponent("✔️") +  "%20DDS:%20" + dds + "%20min%0A" + encodeURIComponent("✔️") +  "%20Entupimentos:%20" + entupimentos + "%20min%0A" + encodeURIComponent("✔️") +  "%20Enroscos:%20" + enroscos + "%20min%0A" + encodeURIComponent("✔️") +  "%20Falta de energia:%20" + energia + "%20min%0A" + encodeURIComponent("✔️") +  "%20Mecânica:%20" + mecanica + "%20min%0A" + encodeURIComponent("✔️") +  "%20Lubrificação:%20" + lubrificacao + "%20min%0A" + encodeURIComponent("✔️") +  "%20Outros:%20" + outros + "%20min%0A*Tempo%20total%20de%20paradas:%20" + minTotal + "%20min*%0A%0A" + encodeURIComponent("⏰") +  "%20*Intertravamento Descascador:%20" + intertravamento + "%20min*%0A%0A" + encodeURIComponent("✅") + "%20*Obervação:*%20" + observacao + "%0A%0A" + encodeURIComponent("✅") + "%20*Afiado:*%20" + afiado + "%20jogos%20de%20facas%0A%0A" + encodeURIComponent("✅") + "%20*Transbordo:*%20" + transbordo + "%20viagens%0A%0A" + encodeURIComponent("✅") + "%20*Pendências:*%20" + pendencias;
    
    $form.attr('action', msg);
    $form.attr('target', '_blank');
    $form.submit();
  });
});
