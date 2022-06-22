export function errorHandling(err, req, res, next) {
  if (err) {
    res.status(400).send({ message: err.message });
  }
}
