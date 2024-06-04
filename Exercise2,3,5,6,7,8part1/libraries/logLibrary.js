//This code works as expected, but it is convention to have class names use Pascal Case
//Where each word starts with a capital letter, e.g:
//LoggingLibrary
//PureComponent
//Logging
class logging {
  constructor(){
    
  }
  
  log(id, result){
    console.log(`id:${id}, result:${result}`)
  }
}

module.exports = logging