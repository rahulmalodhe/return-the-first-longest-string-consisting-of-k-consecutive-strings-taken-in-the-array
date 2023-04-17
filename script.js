function longestConsecutiveStrings(strarr, k) {
  let longestStr = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    const currentStr = strarr.slice(i, i + k).join("");
    if (currentStr.length > longestStr.length) {
      longestStr = currentStr;
    }
  }
  return console.log(longestStr);
}

const strarr = [
  "zone",
  "abigail",
  "theta",
  "form",
  "libe",
  "zas",
  "theta",
  "abigail"
];
const k = 2;

longestConsecutiveStrings(strarr, k);
