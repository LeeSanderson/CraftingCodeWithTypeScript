
export class LeapYear {
    
    public static isLeapYear(year: number): boolean {
        return new LeapYear(year).leapYear();
    }

    private constructor(private year: number){
    }

    leapYear(): boolean {
        return this.divisibleBy(4) && !(this.divisibleBy(100) && this.notDivisibleBy(400));
    }

    private notDivisibleBy(number: number) {
        return this.year % number != 0;
    }

    private divisibleBy(number: number) {
        return this.year % number == 0;
    }
}