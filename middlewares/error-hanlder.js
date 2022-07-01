export function errorHandling(err, req, res, next) {
    if (err) {
        console.log(req.status);
        res.status(400).send({ message: err.message });
    }

    next();
}
