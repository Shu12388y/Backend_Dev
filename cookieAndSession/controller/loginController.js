const getLogin = (req, res, next) => {
  res.render("login.ejs", {
    title: "Log In",
  });
};

const postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true");
  res.redirect("/login");
};

module.exports = {
  getLogin,
  postLogin,
};
