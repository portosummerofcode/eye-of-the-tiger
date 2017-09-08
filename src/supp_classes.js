
export class Date{
    constructor(day, hour, min){
        this.day = day;
        this.hour = hour;
        this.min = min;
    }

    /*
        if a < b    : return -1
        if a == b   : return 0
        if a > b    : return 1
    */
    static compare(a, b){
        if (a.day<b.day)
            return -1;
        if (a.day>b.day)
            return 1;
        if (a.hour<b.hour)
            return -1;
        if (a.hour>b.hour)
            return 1;
        if (a.min<b.min)
            return -1;
        if (a.min>b.min)
            return 1;
        return 0;

    }
}

export class Event{
    constructor(name) {
        this.name = name;
    }
}

export class EventOption{
    constructor(event, option, instances) {
        this.event = event;
        this.option = option;
        this.instances = instances;
    }
}

export class EventOptionInstance{
    constructor(start, end){
        this.start = start;
        this.end = start;
    }
}
