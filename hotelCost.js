function hotelCost(days){
    if(days<=10){
        var cost=100*days;
    }
    else if(days <=20){
        var firstTenDays=100*10;
        var remainingDays=days-10;
        var CostAfterTendays= remainingDays*80;
        cost=firstTenDays + CostAfterTendays;
    }
    else{
        var firstTenDays=100*10;
        var CostAfterTendays=10*80;
        var remainingDays=days-20;
        var costAfterTwentyDays=remainingDays*50;
        cost=firstTenDays+CostAfterTendays+costAfterTwentyDays;


    }
    return cost;
}
var motKhoroch=hotelCost(21);
console.log(motKhoroch);