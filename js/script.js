  $(function() {
    $('#sendForm').on('click', 'button', function(e) {
      e.preventDefault();
  
      const $form = $("#sendForm");
      const celResponsavel = document.querySelector('#celResponsavel').value;
      switch (celResponsavel) {
        case 'DANILO':
          var celWhatsapp = 5515997876098;
          break;
        case 'DIEGO':
          var celWhatsapp = 5515997920740;
          break;
        case 'JACONIAS':
          var celWhatsapp = 5515998027236;
          break;
        case 'JAIRO':
          var celWhatsapp = 5515998169620;
          break;
        case 'JEFERSON':
          var celWhatsapp = 5515997442156;
          break;
        case 'REGINALDO':
          var celWhatsapp = 5515997703458;
          break;
        case 'RICARDO':
          var celWhatsapp = 5515997511084;
          break;
        default:
          console.log(`Responsavel não encontrado: ${celWhatsapp}.`);
      }
      const data = document.querySelector('#data').value;
      dataf = new Date(data);
      dataformatada = dataf.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes();
      const turno = document.querySelector('#turno').value;
      const horaTurno = document.querySelector('#horaTurno').value;
      const qtdToretePinus = document.querySelector('#qtdToretePinus').value;
      const tnToretePinus = document.querySelector('#tnToretePinus').value;
      const qtdToreteEuca = document.querySelector('#qtdToreteEuca').value;
      const tnToreteEuca = document.querySelector('#tnToreteEuca').value;
      totalQtd = parseFloat(qtdToretePinus) + parseFloat(qtdToreteEuca); 
      totalTn = parseFloat(tnToretePinus) + parseFloat(tnToreteEuca);
      const qtdCavacoPinus = document.querySelector('#qtdCavacoPinus').value;
      const tnCavacoPinus = document.querySelector('#tnCavacoPinus').value;
      const qtdCavacoEuca = document.querySelector('#qtdCavacoEuca').value;
      const tnCavacoEuca = document.querySelector('#tnCavacoEuca').value;
      const qtdCavacoCelulose = document.querySelector('#qtdCavacoCelulose').value;
      const tnCavacoCelulose = document.querySelector('#tnCavacoCelulose').value;
      const filaInterna = document.querySelector('#filaInterna').value;
      const filaExterna = document.querySelector('#filaExterna').value;

      const msg = "https://api.whatsapp.com/send?phone=" + celWhatsapp + "&text=*UPDATE%20-%20Recebimento%20de%20Madeiras*%0A_" + dataformatada + "%20-%20" + time + "_%0A_Turno%20" + turno + "%20das%20" + horaTurno +"_%0A--------------------------------------------------------------------%0A*Toretes*%20%0A✔️%20" + qtdToretePinus + "%20cargas%20de%20pinus%20=%20" + tnToretePinus + "%20tn%0A✔️%20" + qtdToreteEuca + "%20cargas%20de%20euca.%20=%20" + tnToreteEuca + "%20tn%0A_*Total:%20" + totalQtd + "%20cargas%20=%20" + totalTn + "%20tn*_%0A--------------------------------------------------------------------%0A*Cavaco*%0A✔️%20Pinus/Serraria: " + qtdCavacoPinus + "%20cargas%20=%20" + tnCavacoPinus + "%20tn%0A✔️%20Eucalipto: " + qtdCavacoEuca + "%20cargas%20=%20" + tnCavacoEuca + "%20tn%0A✔️%20Celulose: " + qtdCavacoCelulose + "%20cargas%20=%20" + tnCavacoCelulose + "%20tn%0A--------------------------------------------------------------------%0A*Fila*%0AInterna: " + filaInterna + "%0AExterna: " + filaExterna;
  
      $form.attr('action', msg);
      $form.attr('target', '_blank');
      $form.submit();
    });
  });
