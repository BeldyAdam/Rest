export function getAdat(vegpont, callback) { //a callback egy olyan függvény ami egy másik függvény paramétere, de csak aszinkron hivás esetén
  fetch(vegpont)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
