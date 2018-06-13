// Adds reverse to all String objects
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  return Boolean(this.match(/^\s*$/)) ;
}

Array.prototype.last = function() {
  return this.slice(-1) ;
}


// Defines a phrase object
function Phrase(content) {
  this.content = content;


// Returns content processed for palindrome testing
  this.processedContent = function processedContnent() {
    return this.content.toLowerCase();
  }
// Returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
