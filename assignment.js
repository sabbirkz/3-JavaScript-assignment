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

function hotelCost(night){
    var cost;
    if(night >0 && night<=10){  // This condition is for 1st to 10th night
        cost = night * 100;
    }
    else if (night >=11 && night <=20){  // This condition is for 11 to 20 nights
        cost = (night - 10) * 80 + 1000;
    }
    else{
        cost = (night - 20) * 50 + 1800;
    }

    return cost;
}

var totalHotelCost = hotelCost(44);
console.log(totalHotelCost);
