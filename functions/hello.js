exports.handler = async function(event, context){
  return{
    statusCode: 200,
    body: JSON.stringify({
      name:'JJGODCOM',
      age:85,
      email: 'jjgodcom1@gmail.com'
    })
  }
}