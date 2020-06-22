import shortid from 'shortid';


export default class ClockModel {
    constructor(name, timeZone) {
      this.timeZone = Number.parseInt(timeZone, 10);
      this.name = name;
      this.id = shortid.generate();
    }
}