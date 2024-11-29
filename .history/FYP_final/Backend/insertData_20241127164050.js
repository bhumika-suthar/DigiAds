const mongoose = require('mongoose');
const dotenv = require('dotenv');

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
            description: "A historic railway station connecting Sindh to other parts of Pakistan.",
            screen: {
              id: "screen1",
              content: "Mehrabpur Railway Station content goes here."
            }
          },
          {
            id: "mehrabpur-rural-farmlands",
            name: "Rural Farmlands",
            description: "Fertile lands surrounding Mehrabpur, showcasing Sindh’s agricultural roots.",
            screen: {
              id: "screen1",
              content: "Rural Farmlands content goes here."
            }
          },
          {
            id: "mehrabpur-local-markets",
            name: "Local Markets and Shops",
            description: "Small, vibrant bazaars reflecting the culture of the town.",
            screen: {
              id: "screen1",
              content: "Local Markets and Shops content goes here."
            }
          },
          {
            id: "mehrabpur-sugar-mill",
            name: "Mehrabpur Sugar Mill",
            description: "A significant industrial unit for sugar production in the area.",
            screen: {
              id: "screen1",
              content: "Mehrabpur Sugar Mill content goes here."
            }
          },
          {
            id: "mehrabpur-public-parks",
            name: "Public Parks and Educational Institutions",
            description: "Community spaces promoting learning and recreation.",
            screen: {
              id: "screen1",
              content: "Public Parks and Educational Institutions content goes here."
            }
          }
    //   { id: "mehrabpur-route1", name: "Main Bazar", description: "The central market area of Mehrabpur." },
    //   { id: "mehrabpur-route2", name: "Station Road", description: "Connects the railway station to the main city." },
    ],
  },
  {
    city: "Sukkur",
    routes: [
        {
            id: "sukkur-lansdowne-bridge",
            name: "Lansdowne Bridge",
            description: "A historic iron bridge connecting Sukkur and Rohri, built during British rule.",
            screen: {
              id: "screen1",
              content: "Lansdowne Bridge content goes here."
            }
          },
          {
            id: "sukkur-sukkur-barrage",
            name: "Sukkur Barrage",
            description: "A massive irrigation system on the Indus River, vital for agriculture in Sindh.",
            screen: {
              id: "screen1",
              content: "Sukkur Barrage content goes here."
            }
          },
          {
            id: "sukkur-lab-e-mehran-park",
            name: "Lab-e-Mehran Park",
            description: "A scenic riverside park ideal for family outings and picnics.",
            screen: {
              id: "screen1",
              content: "Lab-e-Mehran Park content goes here."
            }
          },
          {
            id: "sukkur-sadh-belo-temple",
            name: "Sadh Belo Temple",
            description: "A sacred Hindu temple located on an island in the Indus River.",
            screen: {
              id: "screen1",
              content: "Sadh Belo Temple content goes here."
            }
          },
          {
            id: "sukkur-ghanta-ghar",
            name: "Ghanta Ghar (Clock Tower)",
            description: "A central landmark and bustling area in Sukkur city.",
            screen: {
              id: "screen1",
              content: "Ghanta Ghar content goes here."
            }
          },
    //   { id: "sukkur-route1", name: "Mission Road", description: "Bustling markets and shops." },
    //   { id: "sukkur-route2", name: "Military Road", description: "Strategic and connects key locations." },
     ],
  },
  {
    city: "Lahore",
    routes: [
        
    //   { id: "lahore-route1", name: "Mall Road", description: "Famous for its historical landmarks and markets." },
    //   { id: "lahore-route2", name: "Liberty Market", description: "Popular shopping destination in Lahore." },
    ],
  },
  {
    city: "Karachi",
    routes: [
      { id: "karachi-route1", name: "Clifton", description: "Known for its beach and upscale neighborhoods." },
      { id: "karachi-route2", name: "Saddar", description: "Bustling commercial and residential area." },
    ],
  },
  {
    city: "Multan",
    routes: [
        {
            id: "multan-fort",
            name: "Multan Fort",
            description: "A historic fortress with roots tracing back to ancient civilizations.",
            screen: {
              id: "screen1",
              content: "Multan Fort content goes here."
            }
          },
          {
            id: "multan-shah-rukn-alam-tomb",
            name: "Tomb of Shah Rukn-e-Alam",
            description: "A beautiful Sufi shrine and a symbol of Multan's spiritual heritage.",
            screen: {
              id: "screen1",
              content: "Tomb of Shah Rukn-e-Alam content goes here."
            }
          },
          {
            id: "multan-hussain-agahi-bazaar",
            name: "Hussain Agahi Bazaar",
            description: "A bustling market famous for Multani crafts and traditional items.",
            screen: {
              id: "screen1",
              content: "Hussain Agahi Bazaar content goes here."
            }
          },
          {
            id: "multan-ghanta-ghar-chowk",
            name: "Ghanta Ghar Chowk",
            description: "A central hub of the city, surrounded by shops and eateries.",
            screen: {
              id: "screen1",
              content: "Ghanta Ghar Chowk content goes here."
            }
          },
          {
            id: "multan-bahauddin-zakariya-shrine",
            name: "Shrine of Bahauddin Zakariya",
            description: "A prominent Sufi saint's tomb and a pilgrimage site.",
            screen: {
              id: "screen1",
              content: "Shrine of Bahauddin Zakariya content goes here."
            }
          }
    //   { id: "karachi-route1", name: "Clifton", description: "Known for its beach and upscale neighborhoods." },
    //   { id: "karachi-route2", name: "Saddar", description: "Bustling commercial and residential area." },
    ],
  },

  {
    city: "Hyderabad",
    routes: [
        {
            id: "hyderabad-pakka-qila",
            name: "Pakka Qila",
            description: "A historic fort built during the Kalhora Dynasty in Sindh.",
            screen: {
              id: "screen1",
              content: "Pakka Qila content goes here."
            }
          },
          {
            id: "hyderabad-rani-bagh",
            name: "Rani Bagh (Hyderabad Zoo)",
            description: "A popular recreational spot with a zoo, park, and museum.",
            screen: {
              id: "screen1",
              content: "Rani Bagh content goes here."
            }
          },
          {
            id: "hyderabad-tombs-talpur-mirs",
            name: "Tombs of Talpur Mirs",
            description: "The final resting place of Talpur rulers, showcasing unique architecture.",
            screen: {
              id: "screen1",
              content: "Tombs of Talpur Mirs content goes here."
            }
          },
          {
            id: "hyderabad-resham-gali-market",
            name: "Resham Gali Market",
            description: "A vibrant market known for traditional Sindhi handicrafts and textiles.",
            screen: {
              id: "screen1",
              content: "Resham Gali Market content goes here."
            }
          },
          {
            id: "hyderabad-sindh-museum",
            name: "Sindh Museum",
            description: "A museum preserving Sindh's rich cultural and historical heritage.",
            screen: {
              id: "screen1",
              content: "Sindh Museum content goes here."
            }
          }
    //   { id: "karachi-route1", name: "Clifton", description: "Known for its beach and upscale neighborhoods." },
    //   { id: "karachi-route2", name: "Saddar", description: "Bustling commercial and residential area." },
    ],
  },
];

async function insertData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    // Access the database
    const db = mongoose.connection.db;

    // Define the collection name
    const collectionName = 'locations';

    // Drop the collection if it exists to avoid duplicates
    const collections = await db.listCollections({ name: collectionName }).toArray();
    if (collections.length > 0) {
      await db.collection(collectionName).drop();
      console.log(`${collectionName} collection dropped`);
    }

    // Insert the data
    await db.collection(collectionName).insertMany(cities);
    console.log('Data inserted successfully!');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    mongoose.disconnect();
  }
}

// Run the function
insertData();







