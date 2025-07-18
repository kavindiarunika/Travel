import logo from './logo.png';
import Hero from './Hero.jpg';
import colombo from './colombo.jpg';
import colombo1 from './colombo (1).jpeg';
import colombo2 from './colombo (2).jpeg';
import colombo3 from './colombo (3).jpeg';
import colombo4 from './colombo (3).jpeg';
import nilaveli from './nilaveli.jpg';
import nilaveli1 from './nilaveli (1).jpeg';
import nilaveli2 from './nilaveli (2).jpeg';
import nilaveli3 from './nilaveli (3).jpeg';
import nilaveli4 from './nilaveli (4).jpeg';
import sigiriya from './sigiriya (1).jpeg'
import sigiriya1 from './sigiriya (2).jpeg'
import sigiriya2 from './sigiriya (3).jpeg'
import temple from './temple.jpg'
import temple1 from './temple (3).jpg'
import temple2 from './temple (2).jpg'
import yala from './yala.jpg';
import yala4 from './yala1.jpeg';
import yala1 from './yala2.jpeg';
import yala2 from './yala3.jpeg';
import yala3 from './yala4.jpeg';
import ninearch from './ninearch.jpg'
import ninearch1 from './ninearch (1).jpeg'
import ninearch2 from './ninearch (2).jpeg'
import ninearch3 from './ninearch (3).jpeg'
import pkg1 from './pkg.jpg';
import pkg2 from './pkg1.jpg';
import pkg3 from './pkg2.jpg';
import pkg4 from './pkg3.jpg';
import pkg5 from './pkg4.jpg';
import pkg6 from './pkg5.jpg';
import contact from './contact.jpg';


export const assets={
    logo,
    Hero,
    contact
}

export const trending = [
  {
    _id:11,
    image:sigiriya,
    Subimage:[sigiriya,sigiriya1,sigiriya2],
    name: "Sigiriya Rock",
    subname: "The Lion's Rock of Sri Lanka",
    description: "Sigiriya, often called the Eighth Wonder of the World, is a majestic rock fortress rising nearly 200 meters above the jungle in central Sri Lanka. Built in the 5th century by King Kashyapa, this ancient citadel features stunning frescoes, a mirror wall, and beautifully landscaped water gardens. At the summit, visitors are rewarded with breathtaking panoramic views and the ruins of an ancient royal palace. Sigiriya is not only a masterpiece of architecture and engineering but also a symbol of Sri Lanka’s rich cultural heritage and history."
  },
  {
     _id:22,
     image:ninearch,
     Subimage:[ninearch,ninearch1,ninearch2,ninearch3],
    name: "Nine Arch Bridge",
    subname: "The Bridge in the Sky",
    description: "The Nine Arch Bridge, located in the lush hills of Ella, Sri Lanka, is a stunning architectural marvel built entirely of stone and bricks—with no steel used. Constructed during the British colonial era, this iconic bridge has nine graceful arches stretching across a deep jungle valley, surrounded by misty mountains and tea plantations. When the train glides slowly over the bridge, it's like a scene from a dream—making it a favorite spot for photographers and travelers from all around the world."
  },
  {
     _id:33,
     image:temple,
     Subimage:[temple,temple1,temple2],
    name: "Temple of the Tooth",
    subname: "Sacred Heart of Sri Lanka",
    description: "The Temple of the Tooth Relic (Sri Dalada Maligawa), located in the historic city of Kandy, is one of the most sacred Buddhist sites in the world. It houses the left canine tooth of Lord Buddha, preserved inside a golden casket and protected within the royal palace complex. This sacred temple is not only a spiritual center but also a symbol of Sri Lanka’s deep cultural heritage. A visit to the Temple of the Tooth is a journey of serenity, history, and devotion."
  },
  {
     _id:44,
     image:yala,
     Subimage:[yala,yala1,yala2,yala3,yala4],
    name: "Yala National Park",
    subname: "Where the Wild Roams Free",
    description: "Yala National Park, located in the southeast of Sri Lanka, is the island’s most famous wildlife sanctuary. Known for having one of the highest leopard densities in the world, Yala is a paradise for nature lovers and wildlife photographers. This breathtaking park is home to majestic leopards, elephants, sloth bears, crocodiles, and over 200 species of birds. A safari through Yala offers a thrilling chance to witness Sri Lanka’s wild heart—untamed, raw, and unforgettable."
  },
  {
     _id:55,
     image:nilaveli,
     Subimage:[nilaveli,nilaveli1,nilaveli2,nilaveli3,nilaveli4],
    name: "Nilaveli Beach",
    subname: "A Hidden Paradise on the East Coast",
    description: "Nilaveli Beach, located near Trincomalee on Sri Lanka’s eastern coast, is a picture-perfect stretch of soft white sand, calm turquoise waters, and endless sunshine. Far from the busy crowds, Nilaveli offers a peaceful and untouched tropical escape. Ideal for swimming, snorkeling, and relaxing, it’s also the gateway to Pigeon Island, a stunning marine sanctuary filled with colorful coral reefs and tropical fish. Whether you're chasing sunsets or just enjoying the gentle waves, Nilaveli is where serenity meets the sea."
  },
  {
     _id:66,
     image:colombo,
    name: "Colombo",
    Subimage:[colombo,colombo1,colombo2,colombo3,colombo4],
    subname: "The Heartbeat of Sri Lanka",
    description: "Colombo, the bustling capital of Sri Lanka, is a vibrant mix of modern city life and rich cultural heritage. From gleaming skyscrapers and luxury malls to ancient temples and colonial-era buildings, Colombo beautifully blends the old and the new. Stroll along Galle Face Green, explore the colorful Pettah Market, visit the peaceful Gangaramaya Temple, or enjoy the nightlife, cafes, and seaside views. It’s a city full of energy, diversity, and charm—perfect for both adventure and relaxation."
  }
];


export const packeges = [
  {
    _id:1111,
    name: "Fast Ceylon",
    subImage:[yala,yala1,yala2,yala3],
    visitingPlaces:["colombo","Nine Arch Bridge","Nilaveli Beach"],
    includes:[
      {
        image:"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528",
        name:"Hiking"
      },
      {
        image:"https://media.istockphoto.com/id/1377841262/photo/the-beautiful-scenery-of-a-tent-in-a-pine-tree-forest-at-pang-oung-mae-hong-son-province.jpg?s=612x612&w=0&k=20&c=1JvDx-16zTIeytdcC-Fa27nVJ_8SveP-omNKKlUJ-lQ=",
        name:"Camping"
      },
      {
        image:"https://img.freepik.com/free-photo/photo-through-tree-branches-with-leaves-evening-time-friends-have-dinner-gorgeous-outdoor-place_146671-14465.jpg?semt=ais_hybrid&w=740",
        name:"OutDoor Dinner"
      },
      {

        image:"https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM=",
        name:"Swimming"
      }
    ],
    Hotel :["All meals","All meals","All meals","All meals","All meals","All meals"],
    price: 200,
    duration: "4 Day",
    image: pkg1,
    description: "This is our basic package. Here we bring you in the most attractive place in Sri Lanka",
    MoreDetail:"This package is valid for bookings made in the All Market 11th January 2025 and 31st March 2025, and for travel completed by 23 December 2025, subject to availability and the applicable terms and conditions specific to this market.Cancellation policy - All travel offers listed on our website are discounted. As such, all orders are non-refundable, and cannot be used in conjunction with any other promotion. Thus, no refund for Cancellations made with less than 32 days from the start of a tour and for No-show.For circumstances beyond our control, such as unfavourable weather conditions, cancellation of flights, international flight delays, etc. Transfers may be cancelled, preponed and /or changed to the alternative transfer available in which case neither Olanka Travels, the resort nor the transfers provider will be liable for any related expenses to the guests."
    
  },
  {
     _id:2222,
    name: "Ancient Lanka",
    subImage:[yala,yala1,yala2,yala3],
     
    includes:[
      {
        image:"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528",
        name:"Hiking"
      },
      {
        image:"https://media.istockphoto.com/id/1377841262/photo/the-beautiful-scenery-of-a-tent-in-a-pine-tree-forest-at-pang-oung-mae-hong-son-province.jpg?s=612x612&w=0&k=20&c=1JvDx-16zTIeytdcC-Fa27nVJ_8SveP-omNKKlUJ-lQ=",
        name:"Camping"
      },
      {
        image:"https://img.freepik.com/free-photo/photo-through-tree-branches-with-leaves-evening-time-friends-have-dinner-gorgeous-outdoor-place_146671-14465.jpg?semt=ais_hybrid&w=740",
        name:"OutDoor Dinner"
      },
      {

        image:"https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM=",
        name:"Swimming"
      }
    ],
    Hotel :["All meals","All meals","All meals","All meals","All meals","All meals"],
    price: 200,
    duration: "6 Day",
    image: pkg2,
    description: "This also our best package. Here we bring you the most ancient places in Sri Lanka.",
    MoreDetail:"This package is valid for bookings made in the All Market 11th January 2025 and 31st March 2025, and for travel completed by 23 December 2025, subject to availability and the applicable terms and conditions specific to this market.Cancellation policy - All travel offers listed on our website are discounted. As such, all orders are non-refundable, and cannot be used in conjunction with any other promotion. Thus, no refund for Cancellations made with less than 32 days from the start of a tour and for No-show.For circumstances beyond our control, such as unfavourable weather conditions, cancellation of flights, international flight delays, etc. Transfers may be cancelled, preponed and /or changed to the alternative transfer available in which case neither Olanka Travels, the resort nor the transfers provider will be liable for any related expenses to the guests."
    
  },
  {
     _id:3333,
    name: "Discover Lanka",
     subImage:[yala,yala1,yala2,yala3],
    includes:[
      {
        image:"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528",
        name:"Hiking"
      },
      {
        image:"https://media.istockphoto.com/id/1377841262/photo/the-beautiful-scenery-of-a-tent-in-a-pine-tree-forest-at-pang-oung-mae-hong-son-province.jpg?s=612x612&w=0&k=20&c=1JvDx-16zTIeytdcC-Fa27nVJ_8SveP-omNKKlUJ-lQ=",
        name:"Camping"
      },
      {
        image:"https://img.freepik.com/free-photo/photo-through-tree-branches-with-leaves-evening-time-friends-have-dinner-gorgeous-outdoor-place_146671-14465.jpg?semt=ais_hybrid&w=740",
        name:"OutDoor Dinner"
      },
      {

        image:"https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM=",
        name:"Swimming"
      }
    ],
    Hotel :["All meals","All meals","All meals","All meals","All meals","All meals"],
    price: 200,
    duration: "12 Day",
    image: pkg3,
    description: "This is our popular package. Here you can see all of the Sri Lanka as a summary",
    MoreDetail:"This package is valid for bookings made in the All Market 11th January 2025 and 31st March 2025, and for travel completed by 23 December 2025, subject to availability and the applicable terms and conditions specific to this market.Cancellation policy - All travel offers listed on our website are discounted. As such, all orders are non-refundable, and cannot be used in conjunction with any other promotion. Thus, no refund for Cancellations made with less than 32 days from the start of a tour and for No-show.For circumstances beyond our control, such as unfavourable weather conditions, cancellation of flights, international flight delays, etc. Transfers may be cancelled, preponed and /or changed to the alternative transfer available in which case neither Olanka Travels, the resort nor the transfers provider will be liable for any related expenses to the guests."
    
  },
  {
     _id:4444,
    name: "Adventure Escape",
    price: 200,
    duration: "10 Day",
    image: pkg4,
    description: "This is our basic package. Here we bring you in the most attractive place in Sri Lanka",
    MoreDetail:"This package is valid for bookings made in the All Market 11th January 2025 and 31st March 2025, and for travel completed by 23 December 2025, subject to availability and the applicable terms and conditions specific to this market.Cancellation policy - All travel offers listed on our website are discounted. As such, all orders are non-refundable, and cannot be used in conjunction with any other promotion. Thus, no refund for Cancellations made with less than 32 days from the start of a tour and for No-show.For circumstances beyond our control, such as unfavourable weather conditions, cancellation of flights, international flight delays, etc. Transfers may be cancelled, preponed and /or changed to the alternative transfer available in which case neither Olanka Travels, the resort nor the transfers provider will be liable for any related expenses to the guests."
    
  },
  {
    _id:5555,
    name: "Luxury Ceylon",
    price: 200,
    duration: "12 Day",
    image: pkg5,
    description: "This is our basic package. Here we bring you in the most attractive place in Sri Lanka"
  },
  {
     _id:6666,
    name: "Romantic Lanka",
    price: 200,
    duration: "12 Day",
    image: pkg6,
    description: "This is our basic package. Here we bring you in the most attractive place in Sri Lanka"
  }
];


