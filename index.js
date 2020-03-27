class Formatter {
  // takes in a string and capitalizes the first letter.
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  // takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, 
  // and from; and always capitalizes the first word
  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleizedString = [];
    let arrayOfWords = sentence.split(" ")

    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        titleizedString.push(this.capitalize(arrayOfWords[n]))
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          titleizedString.push(arrayOfWords[n])
        } else {
          titleizedString.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    return titleizedString.join(" ");
  }
  
}