
//https://github.com/ashikprodhan/assignment3
// This is  kilometerToMeter function

function kilometerToMeter(km) {
    if (km < 0) {
        return 'invalid input';
    }

    var meter = 1000 * km; // it's convert km to meter
    return meter;
}








// This is budgetCalculator function 

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {  // This is condition for error handling
        return 'invalid input';
    }

    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var laptopPrice = 500 * laptop;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}







// This is hotelcost function

function hotelCost(days) {  // This is main function

    if (days < 0) {    // This is condition for error handling
        return ' invalid input';
    }
    if (days <= 10) {

        var cost = 100 * days;

    }
    else if (days <= 20) {
        var firstTenDays = 100 * 10;
        var remainingDays = days - 10; // remaining days after 10 days
        var afterTenDays = remainingDays * 10;  // cost after 10 days
        var cost = firstTenDays + afterTenDays;

    }
    else {
        var firstTenDays = 100 * 10;
        var afterTenDays = 80 * 10;
        var remainingDays = days - 20;  // remaining days after 20 days 
        var after20Days = remainingDays * 50;  // cost  after 20 days

        var cost = firstTenDays + afterTenDays + after20Days; // This is total cost 
    }
    return cost;


}





// This is megaFriend function 

function megaFriend(arr) {
    var bigLength = 0; // This is biglenth variable , I will store the big element inside this variable
    for (var i = 0; i < arr.length; i++) {
        if(arr=='' || arr[i]==''){
            return 'invalid input';
        }



        if (arr[i].length > bigLength) {
            bigLength = arr[i].length;
            index = arr[i];
        }

    }
    return index;

}





