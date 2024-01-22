//ex 1

setexample = new Set(["aiadmk","bjp","congress"])
console.log(setexample)
setexample.add("dmk")
setexample.add("aiadmk")
for(const value of setexample)
{
    console.log(value)
}
//for in
for(key in setexample)
{
    console.log(key[setexample])

}


//Maps

map=new Map([
    ["id","21ECR119"],
    ["name","moni"],
    ["dept","ece"]
])

for ( value of map )
{
    console.log(value)
}
for(key in map)
{
    console.log(key[map])
}

console.log(map.has("name"))


map=new Map([
    ["id","21ECR119"],
    ["name","moni"],
    ["dept","ece"]
])
console.log(map)
map.set("age","20")
map.set("mobile","1234567890")
console.log(map)
map.delete("mobile","1234567890")
console.log(map)
