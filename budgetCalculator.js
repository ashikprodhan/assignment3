function budgetCalculator(ghori,phone,laptop){
    var ghoriPrice=50*ghori;
    if(ghori<=0){
        return -1;
    }
    var phonePrice=100*phone;
    if(phone<=0){
        return -1;
    }
    var laptopPrice=500*phone;
    var totalCost=ghoriPrice+phonePrice+laptopPrice;
    return totalCost;
}
var motKhoroch=budgetCalculator(1,-1,1);
console.log(motKhoroch);