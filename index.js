class Formatter {
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase())
  }
  static sanitize(string) {
    return string.split(" ").map(w => w.replace(/[^A-Za-z0-9-']+/g, '')).join(" ")
  }

  static titleize(string) {
    let doNotCap = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let array = string.split(" ")
    let output = array.map(word => {
      if (doNotCap.includes(word) && array[0] !== word) {
        return word
      } else {
        return this.capitalize(word)
      }
    })
    return output.join(' ')
  }
}
