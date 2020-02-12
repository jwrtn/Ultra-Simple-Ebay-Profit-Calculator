// INPUT VARIABLES

let ebaySalesPrice = 100
let productBuyCost = 50
let ebayShippingCost = 5
let otherCosts = 0
let totalWorkMinutes = 10
let marketplaceFees = .09
let paymentProcessingFees = .029
let promotionFees = .036

// FEE, COST, PROFIT & ROI CALCULATIONS

let totalFees = marketplaceFees + paymentProcessingFees + promotionFees
let revenueAfterFees = (ebaySalesPrice - (ebaySalesPrice * totalFees))
let totalCost = productBuyCost + ebayShippingCost + otherCosts
let netProfit = revenueAfterFees - totalCost
let profitPerMinute = netProfit / totalWorkMinutes
let profitPerHour = profitPerMinute * 60
let profitPercent = (netProfit / ebaySalesPrice) * 100
let netRoi =  (netProfit / totalCost) * 100

// FEEDBACK TEMPLATE

let feedbackTemplate = `$${Math.round(profitPerMinute * 100) / 100} profit per minute for ${totalWorkMinutes} minutes of work ($${Math.round(profitPerHour * 100) / 100} profit per hour) (${Math.round(netRoi * 100) / 100}% net ROI)`

// SHOW SALES PRICE, TOTAL COSTS, TOTAL FEES, NET PROFIT & GIVE FEEDBACK

let giveFeedback = function () {
    console.log()
    console.log(`Sales price = $${ebaySalesPrice}`)
    console.log(`Total costs = $${Math.round(totalCost * 100) / 100} ($${productBuyCost} buy cost + $${ebayShippingCost} ebay shipping cost + $${otherCosts} other costs)`)
    console.log(`Total fees = $${Math.round(ebaySalesPrice * totalFees * 100) / 100} (${Math.round(marketplaceFees * 100)}% marketplace + ${Math.round(paymentProcessingFees * 100)}% payment processing + ${Math.round(promotionFees * 100)}% promotions = ${Math.round(totalFees * 100)}% total)`)
    console.log(`Net profit = $${Math.round(netProfit * 100) / 100} (${Math.round(profitPercent * 100) / 100}%) ($${revenueAfterFees} revenue after fees - $${totalCost} total cost)`)
    console.log()

    if (netProfit <= 0 || profitPercent <= 0 || netRoi <= 0) {
        console.log('No go... you will lose money!')
    } else if (netProfit >= 20 || profitPercent >= 15 || netRoi >= 15) {
        if (profitPerMinute >= .5) {
        console.log(`Excellent buy. ${feedbackTemplate}`)
        } else {
            console.log(`No go. Not enough profit for your time. ${feedbackTemplate}`)
        }
    } else if (netProfit >= 10 || profitPercent >= 10 || netRoi >= 10) {
        if (profitPerMinute >= .5) {
        console.log(`Good buy. ${feedbackTemplate}`)
        } else {
            console.log(`No go. Not enough profit for your time. ${feedbackTemplate}`)
        }
    } else {
        console.log(`No go. Not enough profit. ${feedbackTemplate}`)
    }
}

giveFeedback()