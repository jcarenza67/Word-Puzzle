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

window.addEventListener("load", function() {
  const submitBtn = document.getElementById("submit");
  const inputField = document.getElementById("input");
  const resultDiv = document.getElementById("puzzle");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const inputString = inputField.value;
    const result = wordPuzzle(inputString);

    resultDiv.textContent = result;
  });
});
