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
        name: "Ojas Services ",
        address: "Suryapet, Available, Road N0.6",
        rating: 4,
        facilities: ["Milk", "Curd", "Sweets"],
        distance: "100m",
      },
      {
        name: "Ojas Milk",
        address: "Rock Town Colony, Available, 1-45",
        rating: 4,
        facilities: ["Fresh Milk", "Curd",],
        distance: "200m",
      },
     
  });
};
const locationInfo = function (req, res) {
  res.render("location-info", {
    title: "Veltra Services",
    pageHeader: { title: "Veltra Services" },
    sidebar: {
      context:
        "is on Ojas because it has Milk and space to Eat the Sweets with your friends andnfamily and get some Joy.",
      callToAction:
        "If you've been and you like it - or if you don't -➥please leave a review to help other people just like you.",
    },
    location: {
      name: "Hyderabad",
      address: "Boduppal, Available, Road N0.6",
      rating: 4,
      facilities: ["Milk", "Curd", "Sweets"],
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
    title: "Review Ojas  on Ojas Services",
    pageHeader: { title: "Review Ojas" },
  });
};
module.exports = {
  homelist,
  locationInfo,
  addReview,
};
