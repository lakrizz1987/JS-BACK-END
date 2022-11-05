function checkForIdMiddleware(req, res, next) {
    const params = req.params;

    !params.name ?  res.send('You need params!') : next()
        
}

module.exports = checkForIdMiddleware;