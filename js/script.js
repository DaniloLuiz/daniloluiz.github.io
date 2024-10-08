  $(function() {
  $('#sendForm').on('click', 'button', function(e) {
    e.preventDefault();

    var $form = $("#sendForm");
    
    var assistente = document.querySelector('#assistente').value;
    var auxiliar = document.querySelector('#auxiliar').value;
    var data = document.querySelector('#data').value;
    var dataf = new Date(data);
    var dataformatada = dataf.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    /*
    var today = new Date().toLocaleTimeString('pt-BR', { hour12: false, hour: "numeric", minute: "numeric"});
    */
    var turno = document.querySelector('#turno').value;
    var horaTurno = document.querySelector('#horaTurno').value;
    var qtdToretePinus = document.querySelector('#qtdToretePinus').value;
    var tnToretePinus = document.querySelector('#tnToretePinus').value;
    var qtdToreteEuca = document.querySelector('#qtdToreteEuca').value;
    var tnToreteEuca = document.querySelector('#tnToreteEuca').value;
    var totalQtd = parseInt(qtdToretePinus) + parseInt(qtdToreteEuca);
    var totalTn = parseFloat(tnToretePinus) + parseFloat(tnToreteEuca);
    totalTn = totalTn.toFixed(2);
    var qtdCavacoPinus = document.querySelector('#qtdCavacoPinus').value;
    var tnCavacoPinus = document.querySelector('#tnCavacoPinus').value;
    var qtdCavacoEuca = document.querySelector('#qtdCavacoEuca').value;
    var tnCavacoEuca = document.querySelector('#tnCavacoEuca').value;
    var qtdCavacoCelulose = document.querySelector('#qtdCavacoCelulose').value;
    var tnCavacoCelulose = document.querySelector('#tnCavacoCelulose').value;
    var qtdTransbordoTurno = document.querySelector('#qtdTransbordoTurno').value;
    var tnTransbordoTurno = document.querySelector('#tnTransbordoTurno').value;
    var qtdTransbordoDia = document.querySelector('#qtdTransbordoDia').value;
    var tnTransbordoDia = document.querySelector('#tnTransbordoDia').value;
    var resCasca = document.querySelector('#resCasca').value;
    var resCarbonato = document.querySelector('#resCarbonato').value;
    var resCinza = document.querySelector('#resCinza').value;
    var resLodo = document.querySelector('#resLodo').value;
    var resPlastico = document.querySelector('#resPlastico').value;
    var resEscoria = document.querySelector('#resEscoria').value;
    var filaInterna = document.querySelector('#filaInterna').value;
    var filaExterna = document.querySelector('#filaExterna').value;
    var cb1 = document.querySelector('#cb1').value;
    var cb2 = document.querySelector('#cb2').value;

    if(auxiliar == "Nenhum..."){
      var msg = "https://wa.me/?text=*UPDATE%20-%20Recebimento%20de%20Madeiras*%0A" + dataformatada + "%0A_Turma%20" + turno + "%20das%20" + horaTurno +"_%0A------------------------------------------------------------%0A*Toretes*%0A✓%20" + qtdToretePinus + "%20cargas%20de%20pinus%20=%20" + tnToretePinus + "%20tn%0A✓%20" + qtdToreteEuca + "%20cargas%20de%20euca.%20=%20" + tnToreteEuca + "%20tn%0A_*Total:%20" + totalQtd + "%20cargas%20=%20" + totalTn + "%20tn*_%0A------------------------------------------------------------%0A*Cavaco*%0A✓%20Pinus/Serraria:%20" + qtdCavacoPinus + "%20cargas%20=%20" + tnCavacoPinus + "%20tn%0A✓%20Eucalipto:%20" + qtdCavacoEuca + "%20cargas%20=%20" + tnCavacoEuca + "%20tn%0A✓%20Celulose:%20" + qtdCavacoCelulose + "%20cargas%20=%20" + tnCavacoCelulose + "%0A%0A_Distribuição%20das%20cargas_%0A*CB1:*%20" + cb1 + "%20cargas%0A*CB2:*%20" + cb2 + "%20cargas%0A------------------------------------------------------------%0A*Transbordo*%0A✓%20Turno%20" + turno + ":%20" + qtdTransbordoTurno + "%20cargas%20=%20" + tnTransbordoTurno + "%20tn%0A✓%20Dia:%20" + qtdTransbordoDia + "%20cargas%20=%20" + tnTransbordoDia +"%20tn%0A------------------------------------------------------------%0A*Resíduos*%0A" + resCasca + "%20Casca%0A" + resCarbonato + "%20Carbonato%0A" + resCinza + "%20Cinza%0A" + resLodo + "%20Lodo%0A" + resPlastico + "%20Plástico%0A" + resEscoria + "%20Escória%0A------------------------------------------------------------%0A*Fila*%0AInterna:%20" + filaInterna + "%0AExterna:%20" + filaExterna + "%0A%0A_*Responsável:*%20" + assistente + "_";
    }else{
      var msg = "https://wa.me/?text=*UPDATE%20-%20Recebimento%20de%20Madeiras*%0A" + dataformatada + "%0A_Turma%20" + turno + "%20das%20" + horaTurno +"_%0A------------------------------------------------------------%0A*Toretes*%0A✓%20" + qtdToretePinus + "%20cargas%20de%20pinus%20=%20" + tnToretePinus + "%20tn%0A✓%20" + qtdToreteEuca + "%20cargas%20de%20euca.%20=%20" + tnToreteEuca + "%20tn%0A_*Total:%20" + totalQtd + "%20cargas%20=%20" + totalTn + "%20tn*_%0A------------------------------------------------------------%0A*Cavaco*%0A✓%20Pinus/Serraria:%20" + qtdCavacoPinus + "%20cargas%20=%20" + tnCavacoPinus + "%20tn%0A✓%20Eucalipto:%20" + qtdCavacoEuca + "%20cargas%20=%20" + tnCavacoEuca + "%20tn%0A✓%20Celulose:%20" + qtdCavacoCelulose + "%20cargas%20=%20" + tnCavacoCelulose + "%0A%0A_Distribuição%20das%20cargas_%0A*CB1:*%20" + cb1 + "%20cargas%0A*CB2:*%20" + cb2 + "%20cargas%0A------------------------------------------------------------%0A*Transbordo*%0A✓%20Turno%20" + turno + ":%20" + qtdTransbordoTurno + "%20cargas%20=%20" + tnTransbordoTurno + "%20tn%0A✓%20Dia:%20" + qtdTransbordoDia + "%20cargas%20=%20" + tnTransbordoDia +"%20tn%0A------------------------------------------------------------%0A*Resíduos*%0A" + resCasca + "%20Casca%0A" + resCarbonato + "%20Carbonato%0A" + resCinza + "%20Cinza%0A" + resLodo + "%20Lodo%0A" + resPlastico + "%20Plástico%0A" + resEscoria + "%20Escória%0A------------------------------------------------------------%0A*Fila*%0AInterna:%20" + filaInterna + "%0AExterna:%20" + filaExterna + "%0A%0A_*Responsável:*%20" + assistente + "/" + auxiliar + "_";
    }
    
    $form.attr('action', msg);
    $form.attr('target', '_blank');
    $form.submit();
  });
});
