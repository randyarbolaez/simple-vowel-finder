function vowelFinder(e) {
  e.preventDefault();

  let wordInput = document.getElementById('word-input').value;
  let vowels = document.getElementById('vowels');
  let vowelsCount = document.getElementById('vowels-count');

  const vowelsArray = [];

  for (let i = 0; i < wordInput.length; i++) {
    var eachLetter = wordInput[i].toLowerCase();

    if (
      eachLetter === 'a' ||
      eachLetter === 'e' ||
      eachLetter === 'i' ||
      eachLetter === 'o' ||
      eachLetter === 'u'
    ) {
      vowelsArray.push(wordInput[i]);
    }
  }
  vowels.innerHTML = `Vowels - ${vowelsArray} `;
  vowelsCount.innerHTML = `${vowelsArray.length} Vowel(s) Found`;
}
