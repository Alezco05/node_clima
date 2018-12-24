const axios = require('axios');
const getLugarLatLng = async(dirrecion) => {
    const encodedUrl = encodeURI(dirrecion);
    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${dirrecion}`);
    }
    const location = resp.data.results[0];
    const coor = location.geometry.location;
    return {
        dirrecion: location.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }

}

module.exports = { getLugarLatLng };