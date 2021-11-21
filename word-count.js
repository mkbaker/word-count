//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  phrase = phrase.replace(/[!@#$%&*();:.^]/g, '')
  let words = phrase.split(/[\s,]/)

  let obj = {}
  words.forEach(word => {
    word = word.toLowerCase()
    if (word[0] === "'") {
      word = word.substring(1, word.length -1)
    }
    if (word !== '') {
      if (!obj[word]) {
      obj[word] = 1
    } else {
      obj[word] = obj[word] + 1 
    }
    }
  })
  return obj
};
