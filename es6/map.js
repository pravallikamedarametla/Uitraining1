var users = [
    {
    name:"pravallika",
    age:22
},
{
    name:"pranathi",
    age:24
}];

var filMap = users.filter(function(item, index){
    return item.age>23
}).map(function(item, index){
    return {name:item.name}
});
console.log(filMap);