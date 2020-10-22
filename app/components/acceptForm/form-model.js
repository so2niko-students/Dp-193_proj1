export class FormModel { 

  getCardData = async (cardId) => {
    const response = await fetch('http://www.json-generator.com/api/json/get/ctRVcUtcfC?indent=2');
    const data = await response.json();

    return data.find((card) => card.id === cardId);
  };

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
        telephone: data['telephone'],
        
    };
    
  };

  sendToBot = (car,customer) =>{
    const url = 'https://kolimaga.herokuapp.com/';
    const payload = {
      payloadType: "confirm_order",
      car,
      customer,
    };

      fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      });
  }
  
  
}
