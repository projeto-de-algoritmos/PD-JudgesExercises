function canPartition(nums: number[]): boolean {
  // Calcula a soma total dos elementos do array
  const somaTotal = nums.reduce((soma, num) => soma + num, 0);

  // Se a soma total for ímpar, não é possível dividir em dois subconjuntos de soma igual
  if (somaTotal % 2 !== 0) {
    return false;
  }

  // Define o valor alvo como a metade da soma total
  const alvo = somaTotal / 2;

  // Cria uma matriz dp para armazenar os resultados intermediários
  const dp: boolean[] = new Array(alvo + 1).fill(false);

  // A primeira célula é definida como true, pois é possível formar a soma zero sem incluir nenhum elemento
  dp[0] = true;

  // Percorre os elementos do array
  for (const num of nums) {
    // Percorre de trás para frente a partir do alvo até o número atual
    for (let j = alvo; j >= num; j--) {
      // Atualiza a célula dp[j] se for possível formar a soma atual (j) incluindo ou não o elemento atual (num)
      dp[j] = dp[j] || dp[j - num];
    }
  }

  // Retorna o valor da célula dp[alvo], que indica se é possível dividir o array em dois subconjuntos de soma igual
  return dp[alvo];
}
