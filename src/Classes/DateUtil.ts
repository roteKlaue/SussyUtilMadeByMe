export default class DateUtil {
    static monthAbrs:string[] = ["jan","feb","mar","apr","may","jun","jul","aug","sep","okt","nov","dec"];
    static mFullNames:string[] = ["January","February","March", "April","May","June","July","August","September","October","November","December"];
    static dayAbrs:string[] = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    static dFullNames:string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];

    /**
     * Get the current date and time
     * @returns {Date}
     * */
    static getCurrentDate():Date {
        return new Date(Date.now());
    }

    static today():Date {
        const wash = this.getCurrentDate();
        wash.setHours(0,0,0,0);
        return wash;
    }

    static tomorrow():Date {
        const today = this.today();
        today.setDate(today.getDate() + 1);
        return today;
    }

    static yesterday():Date {
        const today = this.today();
        today.setDate(today.getDate() - 1);
        return today;
    }

    static compareDates(dt1:Date, dt2:Date):number {
        if(!(dt1 instanceof Date && dt2 instanceof Date)) throw new TypeError("expected Date for dt1 and dt2");
        return dt1.valueOf() - dt2.valueOf();
    }

    static equals(dt1:Date, dt2:Date):boolean {
        if(!(dt1 instanceof Date && dt2 instanceof Date)) throw new TypeError("expected Date for dt1 and dt2");
        return dt1.valueOf() === dt2.valueOf();
    }

    static getMonthAbbr(number:number):string {
        if(typeof number !== 'number') throw new TypeError("expected number for number");
        return this.monthAbrs[number]? this.monthAbrs[number]: "";
    }

    static getMonthFullName(number:number):string {
        if(typeof number !== 'number') throw new TypeError("expected number for number");
        return this.mFullNames[number]? this.mFullNames[number]: "";
    }

    static getDayAbbr(number:number):string {
        if(typeof number !== 'number') throw new TypeError("expected number for number");
        return this.dayAbrs[number]? this.dayAbrs[number]: "";
    }

    static getDayFullName(number:number):string {
        if(typeof number !== 'number') throw new TypeError("expected number for number");
        return this.dFullNames[number]? this.dFullNames[number]: "";
    }

    static isLeapYear(year:number):boolean {
        if(typeof year !== 'number') throw new TypeError("expected number for year");
        return !(year % (year % 100 ? 4 : 400));
    }

    static weekFirstDay() {
        const nowDate = this.getCurrentDate();
        return new Date(nowDate.getDate()-(nowDate.getDay()-1)*86400000);
    }

    static weekLastDay() {
        const firstDay = this.weekFirstDay();
        return new Date((firstDay.getDate() / 1000 + 6 * 86400) * 1000);
    }

    static leapYearsInRange(start:number, endYear:number):number[] {
        if(typeof start !== 'number' || typeof endYear !== 'number') throw new TypeError("expected number for start and endYear");
        const sus = [];

        for (let i = start; i <= endYear; i++) {
            if(this.isLeapYear(i)) sus.push(i);
        }

        return sus;
    }
}