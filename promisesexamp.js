var condition='positives'
var promise=new Promise(function(resolve,reject){
  if(condition=='positive')
   resolve("I am good")
  else
   reject("oops!")
})
promise.then(function(response){
  console.log(response)
})
.catch(function(errorResponse){
  console.log(errorResponse)
})