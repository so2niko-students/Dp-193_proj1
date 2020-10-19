export class CallModel {
    validation = (data) => {
      const callNumber = data.target.value.replace(/[^\d]/g, '');
      return callNumber;
    }
}
