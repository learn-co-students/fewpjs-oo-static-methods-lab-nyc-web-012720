class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence){
    let dontCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newSentence = [];
    let word = sentence.split( " " );

    for (let i = 0; i < word.length; i++) {

      if (i === 0) {
        newSentence.push(this.capitalize(word[i]))
      } else {
        if (dontCap.includes(word[i])){
          newSentence.push(word[i])
        } else {
          newSentence.push(this.capitalize(word[i]))
        }
      }

    }
    return newSentence.join( " " );
  }

}