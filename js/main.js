/*Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);
Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. Caso contrário, apenas repasse o valor do produto para variável de preço final;
Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;*/

let inputProd, inputPreco, text1, text2, num, button;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background("#008F8C");
  
  inputProd = createInput();
  inputProd.position(windowWidth/2-100, windowHeight/2 -100);

  text1 = createElement('h3', 'Informe nome do produto');
  text1.position(windowWidth/2-150, windowHeight/2-150);

  inputPreco = createInput();
  inputPreco.position(windowWidth/2-100, windowHeight/2);

  text2 = createElement('h3', 'Informe o valor');
  text2.position(windowWidth/2-150, windowHeight/2-50);

  button = createImg('../img/verifica.png');
  button.position(windowWidth/2 + 80, windowHeight/2 + 1);
  button.size(20,20);
  button.mouseClicked(verifica);
}

function draw() {

  
}

function verifica(){
  num = inputPreco.value();

  if(num >= 60){
    num = num - 10;
    console.log("entrou no if" + num);
  }else{
    console.log("entrou no if" + num);
  }

  swal(
    {
      title: "Você recebeu um desconto no(a) "+inputProd.value() +". O total a pagar é: R$" + num,
      imageUrl:
        "https://media.tenor.com/9CSjgBMp2fIAAAAM/emoji-party.gif",
      imageSize: "50x50",
      confirmButtonText: "Calcular novamente"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}

/*Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. Por exemplo o primeiro cliente está solicitando 10 produtos.
Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". Salve o total de cada cliente em um novo array que deverá começar vazio.
Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000", por exemplo. */

/*aqui confeço que tenho muita dificuldade com array, não sei se era bem isso a proposta mas resolvi :D
deixei no console mesmo pois a cabeça já tinha pifado hahaha*/

var demandas = [10,2,1,30,5];
let precoServico = 35
console.log("O cliente 1 deverá pagar: R$ " + demandas[0]*precoServico);
console.log("O cliente 2 deverá pagar: R$ " + demandas[1]*precoServico);
console.log("O cliente 3 deverá pagar: R$ " + demandas[2]*precoServico);
console.log("O cliente 4 deverá pagar: R$ " + demandas[3]*precoServico);
console.log("O cliente 5 deverá pagar: R$ " + demandas[4]*precoServico);

// lucro1 = demandas[0]*precoServico, demandas[1]*precoServico, demandas[2]*precoServico, demandas[3]*precoServico, demandas[4]*precoServico;

// console.log(lucro1)

lucro = demandas[0]*precoServico + demandas[1]*precoServico + demandas[2]*precoServico + demandas[3]*precoServico + demandas[4]*precoServico;
console.log("O total do lucro é: R$ " + lucro);

