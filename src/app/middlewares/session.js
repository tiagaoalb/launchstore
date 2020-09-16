function onlyUsers(req, res, next) {
  if (!req.session.userId)
    return res.redirect('/users/login')

  next()
}

function isLoggedredirectToUsers(req, res, next) {
  if (req.session.userId)
    return res.redirect('/users')

    next()
}

module.exports = {
  onlyUsers,
  isLoggedredirectToUsers
}