export class CallModel {
    validation = (data) => {
      const callNumber = data.replace(/[^\d]/g, '');
      return callNumber;
    }

    sendData = (phone) => {
      const url = "https://kolimaga.herokuapp.com/";
      const payload = {
        payloadType: "call_me",
        phone,
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
