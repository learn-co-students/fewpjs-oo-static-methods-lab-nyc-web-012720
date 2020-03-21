class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "" );
  }

  static titleize(string) {
    let words = []
    let bad = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let arr = string.split(" ");
    for (let n = 0; n < arr.length; n++) {
      if (n == 0) {
        words.push(this.capitalize(arr[n]))
      } else {
        if (bad.includes(arr[n])) {
          words.push(arr[n])
        } else {
          words.push(this.capitalize(arr[n]))
        }
      }
    }
    return words.join(" ")
  }

}
  
