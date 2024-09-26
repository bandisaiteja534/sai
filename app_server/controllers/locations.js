const homelist = (req, res) => {
  res.render("locations-list", {
    title: "Veltra Services- Journey Beyond Expectations",
    pageHeader: {
      title: "Veltra Services",
      strapline: "Your Trusted Partner in Global Adventures",
    },
    sidebar:
      "Looking to travel around the world? Veltra helps you find best trips around the world. Perhaps with trips?Let Veltra help you find the place you're looking for.",
    locations: [
      {
        name: "Veltra Services ",
        address: "begumpet,Hyderabad",
        rating: 4,
        facilities: ["covers every state in north india"],
      },
      {
        name: "Veltra Services",
        address: "Jublie Hills",
        rating: 4,
        facilities: ["covers every state in south india"],
      },
      {
        name: "Veltra Services",
        address: "Mumbai",
        rating: 4,
        facilities: ["connects customer with top grade tour packages"],
      },
    ],
  });
};
const locationInfo = function (req, res) {
  res.render("location-info", {
    title: "Veltra Services",
    pageHeader: { title: "Veltra Services" },
    sidebar: {
      context:
        "At Veltra Services, we believe that travel is not just about reaching a destination but creating unforgettable experiences",
      callToAction:
        "If you've been and you like it - or if you don't -➥please leave a review to help other people just like you.",
    },
    location: {
      name: "Veltra Services",
      address: "Begumpet,Hyderabad",
      rating: 4,
      facilities: ["covers every state in north india"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday -Saturday",
          opening: "5:00am",
          closing: "9:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          opening: "4:00am",
          closing: "9:00pm",
          closed: false,
        },
      
      ],
      reviews: [
        {
          author: "Snigdha  ",
          rating: 5,
          timestamp: "14 August 2024",
          reviewText:
            "Great service.",
        },
        {
          author: "Sai teja  ",
          rating: 4,
          timestamp: "16 July 2024",
          reviewText:
            "What a great service. I can't say enough good things about it.",
        },
        {
          author: "Sai Niheth ",
          rating: 3,
          timestamp: "21 June 2023",
          reviewText:
            "experience was nice.",
        },
      ],
    },
  });
const addReview = function (req, res) {
  res.render("location-review-form", {
    title: "Review Veltra  on Veltra Services",
    pageHeader: { title: "Review Veltra" },
  });
};
const contactPage = (req, res) => {
  res.render("contact", {
    title: "Contact Veltra Services",
    pageHeader: { title: "Get in Touch with Veltra Services" },
    sidebar: "Have questions or feedback? We'd love to hear from you!",
  });
};


module.exports = {
  homelist,
  locationInfo,
  addReview,
  contactPage,
};
