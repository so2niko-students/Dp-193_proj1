export class CallModel {
    validation = (data) => {
      const callNumber = data.replace(/[^\d]/g, '');
      return callNumber;
    }
}
