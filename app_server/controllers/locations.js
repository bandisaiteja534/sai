const homelist = (req, res) => {
  res.render("locations-list", {
    title: "Veltra- Travel Packages",
    pageHeader: {
      title: "Veltra",
      strapline: "Explore With us",
    },
    sidebar:
      "Discover the World, One Adventure at a Time!",
    locations: [
      {
        name: "Veltra Services ",
        address: "road no 6,Gawtham nagar,Hyderabad",
        rating: 4,
        facilities: ["Travel Packages around the world"],
        distance: "100m",
      },
      {
        name: "Veltra Services",
        address: "Road no 4,Pune,Maharastra",
        rating: 4,
        facilities: ["Travel packages",],
        distance: "200m",
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
        "it is Veltra because we make people easy to explore all over the world.",
      callToAction:
        "If you've been and you like it - or if you don't -➥please leave a review to help other people just like you.",
    },
    location: {
      name: "Hyderabad",
      address: "Boduppal, Available, Road N0.6",
      rating: 4,
      facilities: ["Travel packages"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday - Friday",
          opening: "5:00am",
          closing: "9:00pm",
          closed: false,
        },
        {
          days: "Saturday",
          opening: "4:00am",
          closing: "9:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          closed: true,
        },
      ],
      reviews: [
    
        {
          author: "snigdha  ",
          rating: 4,
          timestamp: "16 July 2024",
          reviewText:
            "What a great place. I can't say enough good things about it.",
        },
        {
          author: "Sai Teja ",
          rating: 3,
          timestamp: "21 June 2023",
          reviewText:
            "It was okay. Halwa wasn't great, but the Milk and Curd werw Good.",
        },
      ],
    },
  });
};
const addReview = function (req, res) {
  res.render("location-review-form", {
    title: "Review Veltra on Veltra Services",
    pageHeader: { title: "Review Veltra" },
  });
};
module.exports = {
  homelist,
  locationInfo,
  addReview,
};
