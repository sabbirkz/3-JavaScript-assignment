 // https://github.com/sabbirkz/3-JavaScript-assignment

// Problem No.1 

function kilometerToMeter(km){  /// km for Kilometer Input
    var result = km * 1000;

    return result;
}
var calculation = kilometerToMeter(21);
console.log(calculation);


/// Problem No.2

function budgetCalculator(watch, mobile, laptop){
    var totalWatchPrice  = watch *  50;
    var totalMobilePrice = mobile * 100;
    var totalLaptopPrice = laptop * 500;

    var totalBudget = totalWatchPrice + totalMobilePrice + totalLaptopPrice;

    return totalBudget;
}

var shoppingCost = budgetCalculator(2, 1, 1);
console.log(shoppingCost);

/// Problem No.3

