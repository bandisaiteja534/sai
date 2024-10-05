// Controller for Veltra Services

const homelist = (req, res) => {
  res.render("locations-list", {
    title: "Veltra Services - Journey Beyond Expectations",
    pageHeader: {
      title: "Veltra Services",
      strapline: "Your Trusted Partner in Global Adventures",
    },
    sidebar:
      "Looking to travel around the world? Veltra helps you find the best trips around the world. Let Veltra help you find the place you're looking for.",
    locations: [
      {
        name: "Yogi",
        address: "Begumpet, Hyderabad",
        rating: 4,
        facilities: ["Covers every state in North India"],
      },
      {
        name: "Laxmi",
        address: "Begumpet, Hyderabad",
        rating: 4,
        facilities: ["Covers holy places in India"],
      },
      {
        name: "The Boys",
        address: "Begumpet, Hyderabad",
        rating: 4,
        facilities: ["Covers every state in South India"],
      },
    ],
  });
};

const sidebarData = {
  context:
    "At Veltra Services, we believe that travel is not just about reaching a destination but creating unforgettable experiences.",
  callToAction:
    "If you've been and you like it - or if you don't - please leave a review to help other people just like you.",
};

const locationInfo = (req, res) => {
  res.render("location-info", {
    title: "Veltra Services",
    pageHeader: { title: "Yogi" },
    sidebar: sidebarData,
    location: {
      name: "Yogi",
      address: "Begumpet, Hyderabad",
      rating: 4,
      facilities: ["Covers every state in North India, includes food, stay, and travel. For pricing contact 8096886240"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday - Saturday",
          opening: "10:00am",
          closing: "7:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          opening: "11:00am",
          closing: "6:00pm",
          closed: false,
        },
      ],
      reviews: [
        {
          author: "Snigdha",
          rating: 5,
          timestamp: "14 August 2024",
          reviewText: "Great service.",
        },
        {
          author: "Sai Teja",
          rating: 4,
          timestamp: "16 July 2024",
          reviewText: "What a great service. I can't say enough good things about it.",
        },
        {
          author: "Sai Niheth",
          rating: 3,
          timestamp: "21 June 2023",
          reviewText: "Experience was nice.",
        },
      ],
    },
  });
};

const locationInfo1 = (req, res) => {
  res.render("location-info1", {
    title: "Veltra Services",
    pageHeader: { title: "Laxmi" },
    sidebar: sidebarData,
    location: {
      name: "Laxmi",
      address: "Jublie Hills",
      rating: 4,
      facilities: ["Covers holy places in India, includes food, stay, and travel. For pricing contact 8498090780"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday - Saturday",
          opening: "10:00am",
          closing: "7:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          opening: "11:00am",
          closing: "6:00pm",
          closed: false,
        },
      ],
      reviews: [
        {
          author: "John Doe",
          rating: 5,
          timestamp: "20 July 2024",
          reviewText: "Exceptional service and experiences.",
        },
        {
          author: "Jane Smith",
          rating: 4,
          timestamp: "22 June 2024",
          reviewText: "Very good, would recommend.",
        },
      ],
    },
  });
};

const locationInfo2 = (req, res) => {
  res.render("location-info2", {
    title: "Veltra Services",
    pageHeader: { title: "The Boys" },
    sidebar: sidebarData,
    location: {
      name: "The Boys",
      address: "Mahatma Phule Rd, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001, India",
      rating: 4,
      facilities: ["Covers every state in South India, includes food, stay, and travel. For pricing contact 888888888"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday - Saturday",
          opening: "10:00am",
          closing: "7:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          opening: "11:00am",
          closing: "6:00pm",
          closed: false,
        },
      ],
      reviews: [
        {
          author: "Alice",
          rating: 5,
          timestamp: "10 August 2024",
          reviewText: "Amazing experience visiting holy places.",
        },
        {
          author: "Bob",
          rating: 4,
          timestamp: "15 July 2024",
          reviewText: "Great service and hospitality.",
        },
      ],
    },
  });
};

const addReview = (req, res) => {
  res.render("location-review-form", {
    title: "Review Veltra on Veltra Services",
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

// Export the functions for use in other modules
module.exports = {
  homelist,
  locationInfo,
  locationInfo1,
  locationInfo2,
  addReview,
  contactPage,
};
