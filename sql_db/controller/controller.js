const model = require("../model/model");

const homeController = async (req, res, next) => {
  const [data] = await model.fetch();

  res.render("home.ejs", {
    title: "home Page",
    data: JSON.stringify(data),
  });
};

module.exports = homeController;
