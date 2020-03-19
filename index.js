class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^0-9A-Za-z\s'-]/g, '');
  }

  static titleize(string){
    const forbidden = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let string_array = string.split(' ');
    let caps = string_array.map((str, i) => {
      if (i === 0 || !forbidden.includes(str)){
        return this.capitalize(str)
      } else {
        return str;
      }
    })
    return caps.join(" ");
  }
}