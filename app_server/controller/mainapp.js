// Get home page
module.exports.index = function (req, res, next) {
  try {
    res.render('index', { title: 'Express' });
  } catch (err) {
    next(err); // Forward render errors
  }
};
