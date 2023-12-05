class Solution:
    def profitableSchemes(self, n: int, minProfit: int, group: List[int], profit: List[int]) -> int:
        MOD = 10 ** 9 + 7
        num_crimes = len(group)
        
        dp = [[[0] * (minProfit + 1) for _ in range(n + 1)] for _ in range(num_crimes + 1)]
        
        for i in range(num_crimes + 1):
            dp[i][0][0] = 1
        
        for i in range(1, num_crimes + 1):
            members_needed, curr_profit = group[i - 1], profit[i - 1]
            
            for j in range(n + 1):
                for k in range(minProfit + 1):
                    dp[i][j][k] = dp[i - 1][j][k]
                    
                    if j >= members_needed:
                        dp[i][j][k] += dp[i - 1][j - members_needed][max(0, k - curr_profit)]
                    
                    dp[i][j][k] %= MOD
        
        total_schemes = sum(dp[num_crimes][x][minProfit] for x in range(n + 1)) % MOD
        return total_schemes
        