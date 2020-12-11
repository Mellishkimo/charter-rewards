export const calculateRewards = (purchaseTotal) => {
    var rewardPoints = 0
    if (purchaseTotal > 100) {
        var doubleBonus = (purchaseTotal - 100) * 2
        rewardPoints = doubleBonus + 50
    }
    else if (purchaseTotal > 50) {
        rewardPoints = purchaseTotal - 50
    }
    return rewardPoints
}

export const calculateMonthlyRewards = (numberMonth, customerData) => {
    const monthlyTotals = {}
    const monthlyArray = []
    customerData.forEach(transaction => {
        var customerName = transaction.customer
        if (transaction.date[0] == numberMonth) {
            if (!monthlyTotals[customerName]) {
                monthlyTotals[customerName] = { purchases: 0, purchaseTotal: 0, rewards: 0 }
            }
            monthlyTotals[customerName] = {
                customer: customerName,
                purchases: monthlyTotals[customerName].purchases + 1,
                purchaseTotal: monthlyTotals[customerName].purchaseTotal + transaction.purchaseAmount,
                rewards: monthlyTotals[customerName].rewards + calculateRewards(transaction.purchaseAmount)
            }
        }
    })

    Object.values(monthlyTotals).forEach(total => {
        monthlyArray.push(total)
    })

    return monthlyArray
}

export const calculateTotalRewards = (customerData) => {
    const rewardsTotals = {}
    const rewardsArray = []
    customerData.forEach(transaction => {
        var customerName = transaction.customer
        if (!rewardsTotals[customerName]) {
                rewardsTotals[customerName] = { purchases: 0, purchaseTotal: 0, rewards: 0 }
            }
            rewardsTotals[customerName] = {
                customer: customerName,
                purchases: rewardsTotals[customerName].purchases + 1,
                purchaseTotal: rewardsTotals[customerName].purchaseTotal + transaction.purchaseAmount,
                rewards: rewardsTotals[customerName].rewards + calculateRewards(transaction.purchaseAmount)
            }
    })

    Object.values(rewardsTotals).forEach(total => {
        rewardsArray.push(total)
    })

    return rewardsArray
}