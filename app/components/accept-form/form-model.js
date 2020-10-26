export class FormModel {
  carData = {}

  setCardData = (carData) => {
    this.carData = carData;
  }
  getFormData = (event) => {
    const data = [...event.target].reduce((obj, el) => {
      const dataObj = obj;
      if (el.type !== 'submit') {
        dataObj[el.name] = el.value;
      }
      return dataObj;
    }, {});
    return {
      fullName: data['full-name'],
      telNumber: data['telephone'],
    };
  };

  sendToBot = (car, customer) => {
    const url = 'https://kolimaga.herokuapp.com/';
    const payload = {
      payloadType: 'confirm_order',
      car: this.carData,
      customer,
    };

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}
