function verifyPalindrome() {
  let name = "teste";
  if (name === name.split("").reverse().join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
  return;
}

verifyPalindrome();
