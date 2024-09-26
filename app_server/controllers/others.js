/* GET 'about' page */
const about = function (req, res) {
  res.render("generic-text", {
    title: "About Veltra",
    content:
      "Our mission is to inspire wanderlust and provide seamless, enriching journeys that connect our travelers with the beauty and culture of the world..",
  });
};
module.exports = {
  about,
};
