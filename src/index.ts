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

export class DateBS{
    year: number
    month: number
    day: number
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
    
    static fromString(datestring: string): DateBS
    {
        let info: any  = datestring.match(/(\d+)-(\d+)-(\d+)/);
        return new DateBS(parseInt(info[1]),parseInt(info[2]),parseInt(info[3]));
    }

    toString(): string
    {
      return (this.year + "-" + this.month + "-" + this.day);
    }
    
    dayOfYear() : number
    {
        let months: Array<number>  = this.monthsInYear();
        return months.slice(0,this.month-1).reduce( (sum,daysInMonth) => sum = sum+daysInMonth,0) + this.day;
    }
    
    daysInYear() : number
    {
        return DateBS.daysInYear(this.year);
    }
    
    static daysInYear(year: number): number
    {
        return DateBS.monthsInYear(year).reduce( (sum:number,daysInMonth:number) => sum = sum+daysInMonth,0);
    }
    
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
    
    toAD(): Date
    {
        let startingDateAD: Date = new Date("1944-01-01T00:00");
        startingDateAD.setDate(1+this.daysSince());
        return startingDateAD;
    }
    
    static fromAD(date: Date =new Date()): DateBS
    {
        let startingDateAD: Date  = new Date("1944-01-01T00:00");
        let diff = DateBS.daysDiff(date,startingDateAD);
        let startingDateBS = new DateBS(2000,9,17);;
        startingDateBS.add(diff);
        return startingDateBS;
    }
    
    static daysDiff(a:any, b:any): number
    {
        let before: any  = new Date("2020-07-01");
        let after: any  = new Date("2020-07-02");
        return Math.floor((a-b)/(after-before));
    }
    
    monthsInYear(): any 
    {
        return DateBS.monthsInYear(this.year);
    }

    static monthsInYear(year:number): any
    {
        let yearIndex: number = year - 2000;
        if (yearIndex >= 0 )
        {
            return BSMonths[yearIndex];
        }
    }

    daysInMonth(): number
    {
        return DateBS.daysInMonth(this.year,this.month);
    }
    
    static daysInMonth(year:number ,month:number ): number
    {
        return DateBS.monthsInYear(year)[month-1];
    }

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
