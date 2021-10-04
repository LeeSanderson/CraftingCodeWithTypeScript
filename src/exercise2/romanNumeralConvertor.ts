
type RomanCharMap = { [key: string]: number };

const romanCharMap : RomanCharMap = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
};

type RomanToArabic = { arabic: number, roman: string };
const romanToArabicList : RomanToArabic[] = [
    {arabic: 1000, roman: "M"},
    {arabic: 900, roman: "CM"},
    {arabic: 500, roman: "D"},
    {arabic: 400, roman: "CD"},
    {arabic: 100, roman: "C"},
    {arabic: 90, roman: "XC"},
    {arabic: 50, roman: "L"},
    {arabic: 40, roman: "XL"},
    {arabic: 10, roman: "X"},
    {arabic: 9, roman: "IX"},
    {arabic: 5, roman: "V"},
    {arabic: 4, roman: "IV"},
    {arabic: 1, roman: "I"}
];

export class RomanNumeralConverter {

    public arabicToRoman(n: number): string {
        let roman: string = "";
        romanToArabicList.forEach((romanToArabic) => {
            while(n >= romanToArabic.arabic) {
                roman += romanToArabic.roman;
                n -= romanToArabic.arabic;
            };
        });

        return roman;
    }

    public romanToArabic(roman: string): number {
        let result: number = 0;
        let previous: number = 1000;
        [...roman].forEach((char, index) => {
            var next = romanCharMap[char] ?? this.throwInvalidCharacterError(char, roman);
            result += next;
            if (next > previous) {
                result -= previous * 2;
            }
            previous = next;
        });

        return result;
    }

    private throwInvalidCharacterError(char: string, roman: string): number {
        throw new Error(`Invalid roman numeral ${char} in input ${roman}`);
    }
}