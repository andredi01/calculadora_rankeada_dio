// Função para calcular o nível do jogador com base nas vitórias e derrotas fixas
function calcularNivel() {
    // Definindo valores fixos para vitórias e derrotas
    let vitorias = 200;  // Exemplo de vitórias
    let derrotas = 50;  // Exemplo de derrotas
  
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
  
    // Variável para armazenar o nível
    let nivel;
  
    // Estruturas de decisão para determinar o nível
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Exibindo a mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
  }
  
  // Chamando a função sem parâmetros
  calcularNivel();

