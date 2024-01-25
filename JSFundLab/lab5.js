function censorWord(text, word) {
    // Use a regular expression with the global flag to find all occurrences of the word
    const regex = new RegExp(word, 'gi');
  
    // Use the replace method to replace each occurrence of the word with '*' repeated based on the word's length
    const censoredText = text.replace(regex, match => '*'.repeat(match.length));
  
    return censoredText;
  }
  
  // Example usage:
  const result1 = censorWord('A small sentence with some words', 'small');
  console.log(result1); // Output: 'A ***** sentence with some words'
  
  const result2 = censorWord('Find the hidden word', 'hidden');
  console.log(result2); // Output: 'Find the ****** word'
  