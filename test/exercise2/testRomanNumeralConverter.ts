import { suite, test, params } from "@testdeck/mocha";
import { RomanNumeralConverter } from "../../src/exercise2/romanNumeralConvertor";
import { assert, expect } from "chai";


@suite class RomanNumeralConverterTests  {

    private converter: RomanNumeralConverter = new RomanNumeralConverter()

    @params({expectedRoman: "I", value: 1})
    @params({expectedRoman: "II", value: 2})
    @params({expectedRoman: "V", value: 5})
    @params({expectedRoman: "IV", value: 4})
    @params({expectedRoman: "X", value: 10})
    @params({expectedRoman: "IX", value: 9})
    @params({expectedRoman: "L", value: 50})
    @params({expectedRoman: "XL", value: 40})
    @params({expectedRoman: "C", value: 100})
    @params({expectedRoman: "XC", value: 90})
    @params({expectedRoman: "D", value: 500})
    @params({expectedRoman: "CD", value: 400})
    @params({expectedRoman: "M", value: 1000})
    @params({expectedRoman: "CM", value: 900})
    @params({expectedRoman: "MMCDXCIX", value: 2499})
    @params({expectedRoman: "MMMCMXLIX", value: 3949})
    @params.naming(({expectedRoman, value}) => `Arabic value ${value} converts to roman numeral text ${expectedRoman}`)
    testConvertArabicToRoman({expectedRoman, value}) {
        let actualRoman = this.converter.arabicToRoman(value); 
        assert(actualRoman === expectedRoman, `Expected ${expectedRoman} but was ${actualRoman}`);
    }


    @params({roman: "I", expectedValue: 1})
    @params({roman: "II", expectedValue: 2})
    @params({roman: "V", expectedValue: 5})
    @params({roman: "X", expectedValue: 10})
    @params({roman: "L", expectedValue: 50})
    @params({roman: "C", expectedValue: 100})
    @params({roman: "D", expectedValue: 500})
    @params({roman: "M", expectedValue: 1000})
    @params({roman: "MMCDXCIX", expectedValue: 2499})
    @params({roman: "MMMCMXLIX", expectedValue: 3949})
    @params.naming(({roman, expectedValue}) => `Roman numeral text ${roman} converts to ${expectedValue}`)
    testConvertRomanToArabic({roman, expectedValue}) {
        let actualValue = this.converter.romanToArabic(roman); 
        assert(actualValue === expectedValue, `Expected ${expectedValue} but was ${actualValue}`);
    }
}