export class FormModel {
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
      telNumber: data.telephone,
    };
  };

  sendToBot = (car, customer) => {
    const url = 'https://kolimaga.herokuapp.com/';
    const payload = {
      payloadType: 'confirm_order',
      car,
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
