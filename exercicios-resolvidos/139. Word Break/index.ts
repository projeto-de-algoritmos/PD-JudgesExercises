function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const dp: boolean[] = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // Obtém a palavra do sufixo da posição j até a posição i
      const palavra = s.substring(j, i);

      // Verifica se o sufixo anterior até a posição j pode ser formado por palavras presentes no dicionário
      // e se a palavra atual está presente no dicionário
      if (dp[j] && wordDict.includes(palavra)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
}
