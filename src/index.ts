/**
 * no of days in months from year 2000 to 2100 BS
 * @constant
 **/
const BSMonths : Array<Array<number>> = [[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],  //2000
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],  //2001
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
	  [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
	  [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],
		[ 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],  //2071
		[ 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],  //2072
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 ],  //2073
		[ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 ],
		[ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 ],
		[ 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30 ],
		[ 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],  //2090
		[ 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30 ],
		[ 30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30 ],
		[ 30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 ],
		[ 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 ],
		                 [ 31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31 ],
		[ 31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30 ]   //2099
                    ];

/**
 * class that facilates in conversion of date from BS to AD and vice versa
* @class DateBS
 **/
export class DateBS {
    year: number
    month: number
    day: number

    /**
     * create BS Date using numbers
     * @constructor
     **/
    constructor(year: number  , month:number ,day:number)
    {
        this.year = year;
        this.month = month;
        this.day = day;
        //this.startingDateAD = new Date("1944-01-01T00:00");
        /*
          this.startingDateBS = {
            "year": 2000,
            "month": 9,
            "day": 17,
        };
        */
        return this;
    }

    /**
     * create BS Date using string format %Y-%m-%d
     * @param {string} datestring: BS date in string format %Y-%m-%d
     * @static
     **/
    static fromString(datestring: string): DateBS
    {
        let info: any  = datestring.match(/(\d+)-(\d+)-(\d+)/);
        return new DateBS(parseInt(info[1]),parseInt(info[2]),parseInt(info[3]));
    }

    /**
     * converts BS Date to string
     **/
    toString(): string
    {
      return (this.year + "-" + this.month + "-" + this.day);
    }

    /**
     * get the day of the year
     **/
    dayOfYear() : number
    {
        let months: Array<number>  = this.monthsInYear();
        return months.slice(0,this.month-1).reduce( (sum,daysInMonth) => sum = sum+daysInMonth,0) + this.day;
    }

    /**
     * get the day in year
     * @class DateBS
     **/
    daysInYear() : number
    {
        return DateBS.daysInYear(this.year);
    }

    /**
     * get the no of days in a year
     * @param {number} year: number in year
     * @static
     **/
    static daysInYear(year: number): number
    {
        return DateBS.monthsInYear(year).reduce( (sum:number,daysInMonth:number) => sum = sum+daysInMonth,0);
    }

    /**
     * get number of days since specific day in BSMonths
     * @param {DateBS} date: date in DateBS format which is by default 2000-9-17
     **/
    daysSince(date: DateBS = new DateBS(2000,9,17) ) : number
    {
        let days:number = 0;
        for (let year = date.year; year < this.year; year++)
        {
            days += DateBS.daysInYear(year);
        }
        days = days + this.dayOfYear() - date.dayOfYear();
        return days;     
    }

    /**
     * get the date in BS greater than specific day, month and year
     * @param {number} day: no of days to add
     * @param {number} month: no of months to add
     * @param {number} year: no of years to add
     **/
    add(day:number ,month: number =0,year: number =0) : DateBS
    {
        this.month += month;
        this.year += (year + Math.floor(this.month / 12));
        this.month = (this.month % 12);
        let diff:number = day;
        while (diff > 0)
        {
            let daysInMonth: number = this.daysInMonth();
            let daysLeft: number = daysInMonth - this.day + 1;
            if (diff >= daysLeft)
            {
                if ( this.month === 12 )
                {
                    this.year += 1;
                    this.month = 1;
                    this.day = 1;
                }
                else
                {
                    this.month += 1;
                    this.day = 1;
                }        
                diff -= daysLeft;
            }
            else 
            {
                this.day += diff;
                diff -= diff;
            }
        }
        return this;
    }

    /**
     * converts the date in BS to date in AD
     **/
    toAD(): Date
    {
        let startingDateAD: Date = new Date("1944-01-01T00:00");
        startingDateAD.setDate(1+this.daysSince());
        return startingDateAD;
    }

    /**
     * converts the date in AD to date in BS
     * @static
     **/
    static fromAD(date: Date =new Date()): DateBS
    {
        let startingDateAD: Date  = new Date("1944-01-01");
        let diff = DateBS.daysDiff(date,startingDateAD);
        let startingDateBS = new DateBS(2000,9,17);;
        startingDateBS.add(diff);
        return startingDateBS;
    }

    /**
     * get the number of days in between two days
     * @param {Date} a: first date
     * @param {Date} b: second date
     * @static
     **/
    static daysDiff(a:any, b:any): number
    {
        let before: any  = new Date("2020-07-01");
        let after: any  = new Date("2020-07-02");
        return Math.floor((a-b)/(after-before));
    }

    /**
     * get tge number of days in months of the year
     * @class DateBS
     */
    monthsInYear(): any
    {
        return DateBS.monthsInYear(this.year);
    }

    /**
     * get the list of days in months of the year
     * @param {number} year: year in BS
     * @static
     **/
    static monthsInYear(year:number): any
    {
        let yearIndex: number = year - 2000;
        if (yearIndex >= 0 )
        {
            return BSMonths[yearIndex];
        }
    }

    /**
     * get the list of days in month of the year
     **/
    daysInMonth(): number
    {
        return DateBS.daysInMonth(this.year,this.month);
    }

    /**
     * get the day in the specific month
     * @param {number} year: year in BS
     * @param {number} month: month in BS
     * @static
     **/
    static daysInMonth(year:number ,month:number ): number
    {
        return DateBS.monthsInYear(year)[month-1];
    }

    /**
     * converts the month to string
     **/
    monthInString(): string
    {
        let monthBS = [ "Baishakh",
                        "Jestha",
                        "Ashadh",
                        "Shrawan",
                        "Bhadra",
                        "Ashwin",
                        "Kartik",
                        "Mangsir",
                        "Poush",
                        "Magh",
                        "Falgun",
                        "Chaitra"
                      ];
        return monthBS[this.month-1];
    }

    /**
     * converts the month to nepali string
     **/
    monthInStringNepali(): string
    {
        let monthBS = [ "वैशाख",
                        "ज्येष्ठ",
                        "असार",
                        "साउन",
                        "भदौ",
                        "असोज",
                        "कात्तिक",
                        "मंसिर",
                        "पुष",
                        "माघ",
                        "फागुन",
                        "चैत"
                  ];
        return monthBS[this.month-1];
    }

    /**
     * get the financial year
     **/
    financialYear(): string
    {
        if ( this.month > 3){
            return this.year + "/" + (this.year % 100 + 1);
        }
        else {
            return (this.year-1) + "/" + (this.year % 100);
        }
    }
}
