function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      var imc = peso / (altura * altura);
      document.getElementById('resultado').textContent = imc.toFixed(2);

      var interpretacion = "";
      if (imc < 18.5) {
        interpretacion = "Bajo peso";
      } else if (imc >= 18.5 && imc < 24.9) {
        interpretacion = "Peso saludable";
      } else if (imc >= 25 && imc < 29.9) {
        interpretacion = "Sobrepeso";
      } else {
        interpretacion = "Obesidad";
      }

      document.getElementById('interpretacion').textContent = interpretacion;
    } else {
      document.getElementById('resultado').textContent = "Ingresa datos válidos";
      document.getElementById('interpretacion').textContent = "";
    }
  }
