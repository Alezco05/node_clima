const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');





const getInfo = async(dirrecion) => {
    try {
        let coors = await lugar.getLugarLatLng(dirrecion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.dirrecion} es de ${temp} °C`;
    } catch (e) {
        return `No se pudo determinar el clima en ${dirrecion}`;
    }
}
getInfo(argv.dirrecion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));