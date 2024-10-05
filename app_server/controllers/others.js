/* GET 'about' page */
const about = function (req, res) {
  res.render("generic-text", {
    title: "About Veltra",
    content:
      "At Veltra Services, we believe that travel is more than just visiting new places; it's about creating unforgettable memories and experiencing the world in all its diversity. With a passion for exploration and a commitment to excellence, we specialize in crafting personalized travel packages tailored to suit every adventurer's desires. Whether you’re seeking a serene beach getaway, an exhilarating mountain trek, or a cultural immersion in a vibrant city, our dedicated team of travel experts is here to guide you every step of the way. We pride ourselves on our extensive network of partners and local insights, ensuring that each journey is seamless and enriching. Join us in discovering the beauty of the world, one destination at a time.",
  });
};
module.exports = {
  about,
};
