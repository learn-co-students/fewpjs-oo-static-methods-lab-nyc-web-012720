// import console = require("console");

// import console = require("console");

class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let splitString = string.split(' ')
    // let cont = 0
    let finalString =[]
    for(var i = 0; i < splitString.length; i++)
    {
      if (['the','a','an','but','of','and','for','at','by','from'].includes(splitString[i])){
        // cont += 1
        finalString.push(splitString[i]);
      }else 
      {
        finalString.push(splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1));
      }
    }
    // console.log("*************************")
    // console.log(cont)
    // console.log("*************************")
    finalString = finalString.join(' ')
    finalString =  finalString.charAt(0).toUpperCase()+finalString.slice(1)
    return finalString

  }
}