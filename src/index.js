module.exports = function toReadable (number) {

ones = [ // разряд единиц — от одного до девяти
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

teen = [ // разряд "надцать" — от десяти до девятнадцати
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

dozens = [ // разряд десятков
    "", //  пробел нужен для чисел типа 910 или 603
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

switch (true) {
  case number >= 0 && number < 10: // если число от 0 до 9, то
    return ones[number]; // указывает на массив единиц[индекс единиц]
    break;
  case number >= 10 && number < 20: // если число от 10 до 19, то
    return teen[number % 10]; // указывает на массив надцать[индекс надцать]
    break;
  case number >= 20 && number < 100 && number % 10 == 0: // если число от 20 до 90 (целые десятки), то
    return dozens[number / 10]; // возвращаем только десятки[индекс десятков]
    break;
  case number >= 20 && number < 100 && number % 10 != 0:  // если число от 21 до 99 (НЕ целые десятки), то
    return dozens[Math.floor(number / 10)] + " " + ones[number % 10]; // возвращаем десятки[индекс десятков] + пробел + единицы[индекс единиц]
    break;
  case number % 100 == 0: // если число делится на 100 без остатка, то
    return ones[Math.floor(number / 100)] + " hundred"; // возвращаем единицы[индекс единиц] + " hundred"
    break;
  case number % 100 != 0 && number % 100 > 19 && (number % 100) % 10 != 0: // если остаток от деления на 100 больше 19 и имеет десятки и единицы, то
    return ones[Math.floor(number / 100)] + " hundred " + dozens[Math.floor(number / 10) % 10] + " " + ones[number % 10]; // вернуть единицы[число / 100] + " hundred " + десятки[(число / 10 ) % 10] + " " + единицы[число % 10]
    break;
    case number % 100 != 0 && number % 100 > 19 && (number % 100) % 10 == 0: // если остаток от деления на 100 больше 19 и имеет только круглые десятки, то
    return ones[Math.floor(number / 100)] + " hundred " + dozens[Math.floor(number / 10) % 10]; // вернуть единицы[число / 100] + " hundred " + круглые десятки[(число / 10 ) % 10]
    break;
    case number % 100 != 0 && number % 100 < 20 && number % 100 >= 10: // если остаток от деления на 100 — от 10 до 19, то
    return ones[Math.floor(number / 100)] + " hundred " + teen[(Math.floor((number % 100) % 10))]; // вернуть единицы[число / 100] + " hundred " + надцать[индекс надцать]
    break;
    case number % 100 != 0 && number % 100 <= 9: // если остаток от деления на 100 — от 1 до 9, то
    return ones[Math.floor(number / 100)] + " hundred " + ones[number % 10];
    break;
  default:
    break;
  }
}
