//Looping
//For loop 
/*
sum=0
for(var i=0;i<10;i++)
{
    sum+=i
    
}
console.log(sum)

//while loop

i=0
sum =0
while(i<10)

{
    sum+=i
    i++
}
console.log(sum)

//dowhile

i=0
sum =0
do{
    sum+=i
    i++
}while(i<10)
console.log(sum)

//example 1
arr=[45, 60, 35]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
\\example2
arr=[45, 60, 20.5]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


//example3
arr=[45, 60, true, false]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example4
arr=[45, 60, true, "string","moni",false,90]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//for in

arr=[10,"string","kongu",20,true]
for(const index in arr)
{
    console.log(index)
    console.log("The value present is", index ,"is:",arr[index])
}

//for of
arr=[10,"string","kongu",20,true]
for(const index of arr)
{
    console.log(index)    //otherwise => console.log(value)
    
}


//for each
arr=[10,"string","kongu",20,true]
arr.forEach(value => {
    console.log(value)

});
*/
var kongu = new Object()
kongu["fees"]=100000
kongu["Accomodation"]="Excellent"
kongu["Food"]="Pretty Good"
kongu["Hostelcount"]=10
console.log(kongu)
//for in
for( key in kongu)
{
    console.log(key,kongu[key])
}

//for each
kongu.forEach((key,element)=>{
    console.log(key,element)
});

//for of
for(const value of kongu)
{
    console.log(value)
}

