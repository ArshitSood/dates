export class SimpleDate {
    constructor(date = Date()) {
        this.date = new Date(date)
    }

    toString() {
        return this.date.toString();
    }
    year() {
        return this.date.getFullYear();
    }
    month(inpStr) {
        const inpstr = inpStr.toUpperCase();
        switch (inpstr) {
            case ('MMMM'):
                const month = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                const d = this.date;
                let name = month[d.getMonth()];
                return name;

            case ('MMM'):
                const month1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const d1 = this.date;
                let name1 = month1[d1.getMonth()];
                return name1;

            case ('MM'):
                const d2 = this.date.getMonth();
                const d3 = (d2 < 10 ? '0' : '') + (this.date.getMonth() + 1);
                return d3;

            default:
                return this.date.getMonth() + 1;

        }


    }
    date() {
        return this.date.getDate();
    }
    day(formatStr) {
        switch (formatStr.toUpperCase()) {
            case 'D':
                return this.date.getDate();
            case 'DD':
                return (this.date.getDate() < 10 ? '0' : '') + this.date.getDate();
            default:
                return this.date.getDay();
        }
    }
    hours() {
        return this.date.getHours();
    }
    minutes() {
        return this.date.getMinutes();
    }
    seconds() {
        return this.date.getSeconds();
    }
    timeMsec() {
        return this.date.getTime()

    }
    time() {
        let z, ms, secs, mins, hrs;
        ms = this.date.getMilliseconds()
        secs = this.date.getSeconds()
        mins = this.date.getMinutes()
        hrs = this.date.getHours()

        return hrs + ':' + mins + ':' + secs + '.' + ms;
    }
    add(amount, period) {
        const period1 = period.toLowerCase()
        switch (period1) {
            case 'years':
            case 'year':
                this.date.setFullYear(this.date.getFullYear() + amount);
                return this;
                break;
            case 'months':
            case 'month':
                this.date.setMonth(this.date.getMonth() + amount);
                return this;
                break;
            case 'days':
            case 'day':
                this.date.setDate(this.date.getDate() + amount);
                return this;
                break;
            case 'hours':
            case 'hour':
                this.date.setHours(this.date.getHours() + amount);
                return this;
                break;
            case 'minute':
            case 'minutes':
                this.date.setMinutes(this.date.getMinutes() + amount);
                return this;
                break;
            case 'seconds':
            case 'second':
                this.date.setSeconds(this.date.getSeconds() + amount);
                return this;
                break;
        }
    }
    subtract(amount, period) {
        const period1 = period.toLowerCase()
        switch (period1) {
            case 'years':
            case 'year':
                this.date.setFullYear(this.date.getFullYear() - amount);
                return this;
                break;
            case 'months':
            case 'month':
                this.date.setMonth(this.date.getMonth() - amount);
                return this;
                break;
            case 'days':
            case 'day':
                this.date.setDate(this.date.getDate() - amount);
                return this;
                break;
            case 'hours':
            case 'hour':
                this.date.setHours(this.date.getHours() - amount);
                return this;
                break;
            case 'minute':
            case 'minutes':
                this.date.setMinutes(this.date.getMinutes() - amount);
                return this;
                break;
            case 'seconds':
            case 'second':
                this.date.setSeconds(this.date.getSeconds() - amount);
                return this;
                break;
        }
    }
    isSame(newDate) {
        const x = this.date.toString();
        const y = newDate.toString();
        if (x === y) {
            return true;
        }
        else {
            return false;
        }
    }
    isAfter(date) {
        const x = this.date.getTime();
        const y = date.timeMsec();
        if (x > y) {
            return true;
        }
        else {
            return false;
        }
    }
    isBefore(date) {
        const x = this.date.getTime();
        const y = date.timeMsec();
        if (x < y) {
            return true;
        }
        else {
            return false;
        }
    }
    utc() {
        return this.date.toUTCString();
    }
    format(formatStr) {
        const YYYY = this.year();
        const YY = String(YYYY).slice(-2);
        const MM = this.month('MM');
        const MMM = this.month('MMM');
        const MMMM = this.month('MMMM');
        const DD = this.day('DD');
        const D = this.day('D');
        const HH = this.hours();
        const mm = this.minutes();
        const ss = this.seconds();

        return formatStr
            .replace('YYYY', YYYY)
            .replace('YY', YY)
            .replace('MMMM', MMMM)
            .replace('MMM', MMM)
            .replace('MM', MM)
            .replace('DD', DD)
            .replace('D', D)
            .replace('HH', HH)
            .replace('mm', mm)
            .replace('ss', ss)

    }
}
export function simpleDate(date = new Date()) {
    return new SimpleDate(date);
}