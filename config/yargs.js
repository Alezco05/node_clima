const argv = require('yargs').options({
    dirrecion: {
        alias: 'd',
        desc: 'Dirrecion de la ciudad para obtener el clina',
        demand: true
    }
})

module.exports = argv;