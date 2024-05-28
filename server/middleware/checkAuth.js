exports.isLoggedIn = function (req, res, next) {
    // console.log(req);
    if(req.users) {
        // console.log('rakesh');
        next();
    }
    else
    {
        return res.status(401).send('Access Denied');
    }
}
