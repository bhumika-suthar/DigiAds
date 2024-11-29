const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Define the data
const cities = [
  {
    city: "Mehrabpur",
    routes: [
      {
        id: "mehrabpur-railway-station",
        name: "Mehrabpur Railway Station",
        description:
          "A historic railway station connecting Sindh to other parts of Pakistan.",
        screen: {
          id: "screen1",
          content: "Mehrabpur Railway Station content goes here.",
        },
      },
      {
        id: "mehrabpur-rural-farmlands",
        name: "Rural Farmlands",
        description:
          "Fertile lands surrounding Mehrabpur, showcasing Sindh’s agricultural roots.",
        screen: {
          id: "screen1",
          content: "Rural Farmlands content goes here.",
        },
      },
      {
        id: "mehrabpur-local-markets",
        name: "Local Markets and Shops",
        description:
          "Small, vibrant bazaars reflecting the culture of the town.",
        screen: {
          id: "screen1",
          content: "Local Markets and Shops content goes here.",
        },
      },
      {
        id: "mehrabpur-sugar-mill",
        name: "Mehrabpur Sugar Mill",
        description:
          "A significant industrial unit for sugar production in the area.",
        screen: {
          id: "screen1",
          content: "Mehrabpur Sugar Mill content goes here.",
        },
      },
      {
        id: "mehrabpur-public-parks",
        name: "Public Parks and Educational Institutions",
        description: "Community spaces promoting learning and recreation.",
        screen: {
          id: "screen1",
          content:
            "Public Parks and Educational Institutions content goes here.",
        },
      },
    ],
  },
  {
    city: "Sukkur",
    routes: [
      {
        id: "sukkur-lansdowne-bridge",
        name: "Lansdowne Bridge",
        description:
          "A historic iron bridge connecting Sukkur and Rohri, built during British rule.",
        screen: {
          id: "screen1",
          content: "Lansdowne Bridge content goes here.",
        },
      },
      {
        id: "sukkur-sukkur-barrage",
        name: "Sukkur Barrage",
        description:
          "A massive irrigation system on the Indus River, vital for agriculture in Sindh.",
        screen: {
          id: "screen1",
          content: "Sukkur Barrage content goes here.",
        },
      },
      {
        id: "sukkur-lab-e-mehran-park",
        name: "Lab-e-Mehran Park",
        description:
          "A scenic riverside park ideal for family outings and picnics.",
        screen: {
          id: "screen1",
          content: "Lab-e-Mehran Park content goes here.",
        },
      },
      {
        id: "sukkur-sadh-belo-temple",
        name: "Sadh Belo Temple",
        description:
          "A sacred Hindu temple located on an island in the Indus River.",
        screen: {
          id: "screen1",
          content: "Sadh Belo Temple content goes here.",
        },
      },
      {
        id: "sukkur-ghanta-ghar",
        name: "Ghanta Ghar (Clock Tower)",
        description: "A central landmark and bustling area in Sukkur city.",
        screen: {
          id: "screen1",
          content: "Ghanta Ghar content goes here.",
        },
      },
    ],
  },
  {
    city: "Lahore",
    routes: [
      {
        id: "lahore-badshahi-mosque",
        name: "Badshahi Mosque",
        description:
          "A grand Mughal-era mosque and one of Lahore's iconic landmarks.",
        screen: {
          id: "screen1",
          content: "Badshahi Mosque content goes here.",
        },
      },
      {
        id: "lahore-lahore-fort",
        name: "Lahore Fort",
        description: "A historic fort and UNESCO World Heritage Site.",
        screen: {
          id: "screen1",
          content: "Lahore Fort content goes here.",
        },
      },
      {
        id: "lahore-liberty-market",
        name: "Liberty Market",
        description: "A popular shopping destination in Lahore.",
        screen: {
          id: "screen1",
          content: "Liberty Market content goes here.",
        },
      },
      {
        id: "lahore-shalimar-gardens",
        name: "Shalimar Gardens",
        description:
          "A Mughal garden complex and a masterpiece of landscape design.",
        screen: {
          id: "screen1",
          content: "Shalimar Gardens content goes here.",
        },
      },
      {
        id: "lahore-food-street",
        name: "Lahore Food Street",
        description:
          "A vibrant area with a variety of traditional and modern eateries.",
        screen: {
          id: "screen1",
          content: "Lahore Food Street content goes here.",
        },
      },
    ],
  },
  {
    city: "Karachi",
    routes: [
      {
        id: "karachi-clifton-beach",
        name: "Clifton Beach",
        description:
          "A popular beach known for its picturesque sunsets and activities.",
        screen: {
          id: "screen1",
          content: "Clifton Beach content goes here.",
        },
      },
      {
        id: "karachi-quaid-e-azam-mausoleum",
        name: "Quaid-e-Azam Mausoleum",
        description:
          "The final resting place of Pakistan’s founder, Muhammad Ali Jinnah.",
        screen: {
          id: "screen1",
          content: "Quaid-e-Azam Mausoleum content goes here.",
        },
      },
      {
        id: "karachi-port-grand",
        name: "Port Grand",
        description: "A cultural and recreational complex near the harbor.",
        screen: {
          id: "screen1",
          content: "Port Grand content goes here.",
        },
      },
      {
        id: "karachi-dolmen-mall",
        name: "Dolmen Mall",
        description:
          "A modern shopping mall offering local and international brands.",
        screen: {
          id: "screen1",
          content: "Dolmen Mall content goes here.",
        },
      },
      {
        id: "karachi-saddar",
        name: "Saddar",
        description:
          "A bustling commercial area with shops and historical buildings.",
        screen: {
          id: "screen1",
          content: "Saddar content goes here.",
        },
      },
    ],
  },
  {
    city: "Multan",
    routes: [
      {
        id: "multan-fort",
        name: "Multan Fort",
        description:
          "A historic fortress with roots tracing back to ancient civilizations.",
        screen: {
          id: "screen1",
          content: "Multan Fort content goes here.",
        },
      },
      {
        id: "multan-shah-rukn-alam-tomb",
        name: "Tomb of Shah Rukn-e-Alam",
        description:
          "A beautiful Sufi shrine and a symbol of Multan's spiritual heritage.",
        screen: {
          id: "screen1",
          content: "Tomb of Shah Rukn-e-Alam content goes here.",
        },
      },
      {
        id: "multan-hussain-agahi-bazaar",
        name: "Hussain Agahi Bazaar",
        description:
          "A bustling market famous for Multani crafts and traditional items.",
        screen: {
          id: "screen1",
          content: "Hussain Agahi Bazaar content goes here.",
        },
      },
      {
        id: "multan-ghanta-ghar-chowk",
        name: "Ghanta Ghar Chowk",
        description:
          "A central hub of the city, surrounded by shops and eateries.",
        screen: {
          id: "screen1",
          content: "Ghanta Ghar Chowk content goes here.",
        },
      },
      {
        id: "multan-bahauddin-zakariya-shrine",
        name: "Shrine of Bahauddin Zakariya",
        description: "A prominent Sufi saint's tomb and a pilgrimage site.",
        screen: {
          id: "screen1",
          content: "Shrine of Bahauddin Zakariya content goes here.",
        },
      },
    ],
  },
  {
    city: "Hyderabad",
    routes: [
      {
        id: "hyderabad-pakka-qila",
        name: "Pakka Qila",
        description:
          "A historic fort built during the Kalhora Dynasty in Sindh.",
        screen: {
          id: "screen1",
          content: "Pakka Qila content goes here.",
        },
      },
      {
        id: "hyderabad-rani-bagh",
        name: "Rani Bagh (Hyderabad Zoo)",
        description:
          "A popular recreational spot with a zoo, park, and museum.",
        screen: {
          id: "screen1",
          content: "Rani Bagh content goes here.",
        },
      },
      {
        id: "hyderabad-tombs-talpur-mirs",
        name: "Tombs of Talpur Mirs",
        description:
          "The final resting place of Talpur rulers, showcasing unique architecture.",
        screen: {
          id: "screen1",
          content: "Tombs of Talpur Mirs content goes here.",
        },
      },
      {
        id: "hyderabad-resham-gali-market",
        name: "Resham Gali Market",
        description:
          "A vibrant market known for traditional Sindhi handicrafts and textiles.",
        screen: {
          id: "screen1",
          content: "Resham Gali Market content goes here.",
        },
      },
      {
        id: "hyderabad-sindh-museum",
        name: "Sindh Museum",
        description:
          "A museum preserving Sindh's rich cultural and historical heritage.",
        screen: {
          id: "screen1",
          content: "Sindh Museum content goes here.",
        },
      },
    ],
  },
  {
    city: "Islamabad",
    routes: [
      {
        id: "islamabad-faisal-mosque",
        name: "Faisal Mosque",
        description:
          "The largest mosque in Pakistan, set at the foot of the Margalla Hills.",
        screen: {
          id: "screen1",
          content: "Faisal Mosque content goes here.",
        },
      },
      {
        id: "islamabad-daman-e-koh",
        name: "Daman-e-Koh",
        description:
          "A popular viewpoint offering a panoramic view of Islamabad.",
        screen: {
          id: "screen1",
          content: "Daman-e-Koh content goes here.",
        },
      },
      {
        id: "islamabad-pakistan-monument",
        name: "Pakistan Monument",
        description:
          "A national symbol representing the four provinces of Pakistan.",
        screen: {
          id: "screen1",
          content: "Pakistan Monument content goes here.",
        },
      },
      {
        id: "islamabad-rawal-lake",
        name: "Rawal Lake",
        description: "A man-made reservoir, popular for boating and picnics.",
        screen: {
          id: "screen1",
          content: "Rawal Lake content goes here.",
        },
      },
      {
        id: "islamabad-shah-dara-park",
        name: "Shah Dara Park",
        description:
          "A beautiful park offering a peaceful retreat in the heart of the city.",
        screen: {
          id: "screen1",
          content: "Shah Dara Park content goes here.",
        },
      },
    ],
  },
];

async function insertData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Access the database
    const db = mongoose.connection.db;

    // Define the collection name
    const collectionName = "locations";

    // Drop the collection if it exists to avoid duplicates
    const collections = await db
      .listCollections({ name: collectionName })
      .toArray();
    if (collections.length > 0) {
      await db.collection(collectionName).drop();
      console.log(`${collectionName} collection dropped`);
    }

    // Insert the data
    await db.collection(collectionName).insertMany(cities);
    console.log("Data inserted successfully!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    mongoose.disconnect();
  }
}

// Run the function
insertData();
