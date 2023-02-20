  $(function() {
    $('#sendForm').on('click', 'button', function(e) {
      e.preventDefault();
  
      var $form = $("#sendForm");
      var data = document.querySelector('#data').value;
      var dataf = new Date(data);
      var dataformatada = dataf.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      var segAmbiente = document.querySelector('#segAmbiente').value;
      var estoqueProcesso = document.querySelector('#estoqueProcesso').value;
      var estoqueProcessoDias = document.querySelector('#estoqueProcessoDias').value;
      var estoqueEnergia = document.querySelector('#estoqueEnergia').value;
      var estoqueEnergiaDias = document.querySelector('#estoqueEnergiaDias').value;
      var torasPinus = document.querySelector('#torasPinus').value;
      var torasEucalipto = document.querySelector('#torasEucalipto').value;
      var tonsPinus = document.querySelector('#tonsPinus').value;
      var cargasPinus = document.querySelector('#cargasPinus').value;
      var tonsEucalipto = document.querySelector('#tonsEucalipto').value;
      var cargasEucalipto = document.querySelector('#cargasEucalipto').value;
      var tonsCavaco = document.querySelector('#tonsCavaco').value;
      var cargasCavaco = document.querySelector('#cargasCavaco').value;
      var producao = document.querySelector('#producao').value;
      var kappaMedio = document.querySelector('#kappaMedio').value;
      var condutividadeMedia = document.querySelector('#condutividadeMedia').value;
      var perdaAlcalina = document.querySelector('#perdaAlcalina').value;
      var terebentina = document.querySelector('#terebentina').value;
      var cozTurno = document.querySelector('#cozTurno').value;
      var cozDia = document.querySelector('#cozDia').value;
      var tac = document.querySelector('#tac').value;
      var lpfTotal = document.querySelector('#lpfTotal').value;
      var solidos = document.querySelector('#solidos').value;

      const msg = "https://wa.me/?text=*UPDATE%20Fibras:%20Nova%20Campina*%0A" + dataformatada + "%0A%0ASegurança%20/%20Meio%20Ambiente:%0A" + segAmbiente + "%0A%0A*PREPARAÇÃO%20DE%20MADEIRAS*%0AEstoques%20de%20Cavacos:%0AProcesso:%20" + estoqueProcesso + "%20tons%20(" + estoqueProcessoDias + "%20dias)%0AEnergia:%20" + estoqueEnergia +"%20tons%20(" + estoqueEnergiaDias + "%20dias)%0A%0AEstoque%20de%20Madeira%20em%20toras:%0A》Pinus:%20" + torasPinus + "%20tons%0A》Eucalipto:%20" + torasEucalipto + "%20tons%0A%0AVolume%20Recebido:%0APinus:%20" + tonsPinus + "%20tons%20(" + cargasPinus + "%20cargas)%0AEucalipto:%20" + tonsEucalipto + "%20tons%20(" + cargasEucalipto + "%20cargas)%0ACavaco%20Processo:%20" + tonsCavaco + "%20tons%20(" + cargasCavaco + "%20cargas)%0A%0A*PRODUÇÃO%20DE%20FIBRAS*%0AProdução:%20" + producao + "%20tons%0AKappa%20médio:%20" + kappaMedio + "%0ACondutividade%20média:%20" + condutividadeMedia + "%20uS/cm²%0APerda%20Alcalina%20NaOH:%20" + perdaAlcalina + "%20kg/ton%0A%0A*TEREBENTINA*%0AEstoque:%20" + terebentina +"%20m³%0A%0A*RESUMO%20DO%20DIA*%0ATurno:%20" + cozTurno + "%20cozimentos%0ADia:%20" + cozDia + "%20cozimentos%0ATAC:%20" + tac + "%%0ALPF%20Total:%20" + lpfTotal + "m³%0ASólidos:%20" + solidos + "%";

      $form.attr('action', msg);
      $form.attr('target', '_blank');
      $form.submit();
    });
  });