window.addEventListener("load", function(){
  const submitBtn = document.getElementById("submit")

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const inputString = document.getElementById("input").value;
    const result = wordPuzzle(inputString);

    const resultDiv = document.getElementById("puzzle")
    resultDiv.textContent = result;
  });
});   
    function wordPuzzle(string) {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      let puzzle = '';
    
      for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (vowels.includes(letter.toLowerCase())) {
          puzzle += '-';
        } else {
          puzzle += letter;
        }
      }
    
      return puzzle;
    }
