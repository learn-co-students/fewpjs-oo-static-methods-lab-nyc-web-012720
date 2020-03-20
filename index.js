class Formatter {
  //add static methods here
  static capitalize(letter) {
    //capitalize the first letter
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }

  static sanitize(letter) {
    //remove non-alphanumeric characters,
    //except dashes, single qutoes and spaces
    return letter.replace(/[^\w\s\w-\w']/gi, '');
  }

  static titleize(letter) {
    //capitalize all words in a sentence except  "the","a"
    //,"an", "but", "of", "and","for","at","by","from"
    //and always capializes the first word
    const exceptWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const letterSplit = letter.split(" ");
    let firsLetter = letterSplit[0][0].toUpperCase() + letterSplit[0].slice(1);

    letterSplit.splice(letterSplit[0], 1, firsLetter);

    for (let i = 0; i < letterSplit.length; i++) {
      if (!exceptWords.find(function (word) {
        return letterSplit[i] === word;
      })) {
        let upperCaseLetter = letterSplit[i][0].toUpperCase() + letterSplit[i].slice(1);
        letterSplit.splice(i, 1, upperCaseLetter);
      }
    }
    return letterSplit.join(" ");
  }
}

