export default class ModelDetails {
    details = {};

    constructor() {
      const lsDetails = localStorage.getItem('details');

      if (lsDetails) {
        this.details = JSON.parse(lsDetails);
      }
    }

    addDetails(car) {
      this.details = car;
      localStorage.setItem('details', JSON.stringify(this.details));
    }

    getDetails() {
      return this.details;
    }
}