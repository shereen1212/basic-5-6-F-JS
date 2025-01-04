/**** Basic  ********/

//1//
function findSmallest(arr) {
  return Math.min(...arr);
}
document.write(findSmallest([30, 45, 60, 7]));
document.write("<br><br>");

//2//

function AlphabeticalOrder(str) {
  return str.split("").sort().join("");
}
document.write(AlphabeticalOrder("hello"));
document.write("<br><br>");

//3//
function oddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
document.write(oddOrEven(9));
document.write("<br><br>");

//4//
function evenNum(arr) {
  return arr.filter((num) => num % 2 === 0);
}
document.write(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
document.write("<br><br>");

//5//
function getAbsSum(arr) {
  return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}
document.write(getAbsSum([-1, -3, -5, -4, -10, 0]));
document.write("<br><br>");

/***** Mid    *******/

//1//
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
document.write(factorial(8));
document.write("<br><br>");

//2//
function numbersOnly(arr) {
  return arr.filter((el) => typeof el === "number");
}
document.write(numbersOnly(["Ayham", 3, 7, "Alaa", 13, "coding"]));
document.write("<br><br>");

//3//
function addUp(n) {
  return (n * (n + 1)) / 2;
}
document.write(addUp(8));
document.write("<br><br>");

//4//
function minMaxLengthAverage(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const avg = arr.reduce((sum, num) => sum + num, 0) / length;
  return [min, max, length, avg];
}
document.write(minMaxLengthAverage([7, 13, 3, 77, 100]));
document.write("<br><br>");

//5//
function romanNumbers(num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let result = "";
  for (let i of romanMap) {
    while (num >= i.value) {
      result += i.symbol;
      num -= i.value;
    }
  }
  return result;
}
document.write(romanNumbers(1989));
document.write("<br><br>");

/** Advanced     *****/

//1//
function countWords(str) {
  return str.split(" ").filter((word) => word).length;
}
document.write("hello from CodingAcademy!");
document.write("<br><br>");

//2//
function MultiplyByLength(arr) {
  return arr.map((num) => num * arr.length);
}
document.write(MultiplyByLength([4, 2, 5]));
document.write("<br><br>");

//3//
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}
document.write(checkEnding("CodingSchool", "Ac"));
document.write("<br><br>");

//4//
function doubleChar(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}
document.write(doubleChar("Coding"));
document.write("<br><br>");

//5//
function findIndex(arr, element) {
  return arr.indexOf(element);
}
document.write(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));
