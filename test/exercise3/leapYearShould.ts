import { suite, test } from "@testdeck/mocha";
import { LeapYear } from "../../src/exercise3/leapYear";
import { assert } from "chai";


@suite class LeapYearShould  {
    @test "return false when year is not divisible by 4"() {
        assert(LeapYear.isLeapYear(1997) == false);
    }
    
    @test "return true when year divisible by 4"() {
        assert(LeapYear.isLeapYear(1996) == true);
    }

    @test "return true when year divisible by 400"() {
        assert(LeapYear.isLeapYear(1600) == true);
    }

    @test "return false when year divisible by 100 but not 400"() {
        assert(LeapYear.isLeapYear(1800) == false);
    }
}