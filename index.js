// Write your solution in this file!
var customerName = "bob";


//2
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}


//3
var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}


//4
function overwriteBestCustomer(value = '') {
    bestCustomer = value
    return bestCustomer
}


//5 
const leastFavoriteCustomer = "definitely bob"
function changeLeastFavoriteCustomer() {
    //leastFavotriteCustomer = 'uncertainly bob'
    leastFavoriteCustomer = 'uncertianly bob'
}
