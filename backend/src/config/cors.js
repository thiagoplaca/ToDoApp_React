module.exports = function(req, res, next) {
    res.header('Acess-Content-Allow-Origin', '*')
    res.header('Acess-Content-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Content-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}