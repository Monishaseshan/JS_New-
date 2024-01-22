//objects
//How to declare objects
//1st way 

var customerdetails = {
    "Name": "Riya",
    "age": 20,
    "mobile":"9876543210",

}
console.log(customerdetails)
customerdetails["ID"]="21ECR191"
console.log(customerdetails)


//2nd way

var customerdetails = {}
customerdetails["ID"]="21ECR191"
customerdetails["Name"]="sofia"
customerdetails["Age"]=20
customerdetails["Mobile"]="2345678901"

console.log(customerdetails)
*/

//3rd way

var kongu = new Object()
kongu["fees"]=100000
kongu["Accomodation"]="Excellent"
kongu["Food"]="Pretty Good"
kongu["Hostelcount"]=10
console.log(kongu)
console.log(kongu.Food)          //accessing object
console.log(kongu["fees"])    

