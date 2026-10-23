/* ------------------------------------------------------------
   NEW ENGLAND TRAVELER — SITE CONTENT
   Edit this file to add episodes, commercials, sponsors, photos.
   Leave a list empty to show placeholder cards.
   ------------------------------------------------------------ */
window.NET_CONTENT = {

  // Episodes: paste any YouTube link (watch, youtu.be, or shorts).
  // { title: "Episode title", place: "Town, State", youtube: "https://youtu.be/XXXX" }
  episodes: [],

  // Commercials: same format as episodes.
  commercials: [],

  // Sponsors: { name: "Business", url: "https://...", logo: "assets/sponsors/file.png" }  (use logos: [a, b] for two logos in one card)
  sponsors: [
    { name: "Cape Cod Central Railroad", url: "https://www.capetrain.com/", logo: "assets/sponsors/cape-cod-central-railroad.png" },
    { name: "Conway Scenic Railroad", url: "https://www.conwayscenic.com/", logo: "assets/sponsors/conway-scenic-railroad.png" },
    { name: "Mount Washington Cog Railway", url: "https://www.thecog.com/", logo: "assets/sponsors/mount-washington-cog-railway.png" },
    { name: "Hy-Line Cruises", url: "https://hylinecruises.com/", logo: "assets/sponsors/hy-line-cruises.png" },
    { name: "The Cabot and Off Cabot", url: "https://thecabot.org/", logos: ["assets/sponsors/the-cabot.png", "assets/sponsors/off-cabot.png"] },
    { name: "Wheelworks", url: "https://www.wheelworks.com/", logo: "assets/sponsors/wheelworks.png" },
    { name: "Witch City Walking Tours", url: "https://witchcitywalkingtours.com/", logo: "assets/sponsors/witch-city-walking-tours.png" },
    { name: "Woodman's of Essex", url: "https://www.woodmans.com/", logo: "assets/sponsors/woodmans-of-essex.png" }
  ],

  // New England gallery: { src, alt, caption, credit }
  gallery: [
    { src: "assets/photos/crawford-gateway-255.jpg", alt: "Red 255 locomotive in deep snow at the Gateway, Crawford Notch", caption: "Crawford Notch, New Hampshire", credit: "Mike Lacey" },
    { src: "assets/photos/greg-cockpit.jpg", alt: "Greg Boghosian in a cockpit wearing a headset, giving a thumbs up", caption: "Taking flight with CHI Aerospace, Pease Airport, Portsmouth, NH" },
    { src: "assets/photos/bts-salem-oysters.jpg", alt: "Two cameras filming a platter of oysters at a restaurant", caption: "Rolling on the oysters, Salem, Massachusetts" },
    { src: "assets/photos/hammond-castle.jpg", alt: "Stone towers of Hammond Castle under a bright sun", caption: "Hammond Castle, Gloucester, Massachusetts" },
    { src: "assets/photos/bts-ticonderoga-crew.jpg", alt: "Film crew setting up beside the steamboat Ticonderoga", caption: "Behind the scenes, Shelburne Museum, Vermont" },
    { src: "assets/photos/storyland-antique-cars.jpg", alt: "Pink antique car ride at Story Land", caption: "Story Land, Glen, New Hampshire" },
    { src: "assets/photos/woodstock-sign-autumn.jpg", alt: "Welcome to Woodstock Vermont sign with pumpkins", caption: "Woodstock, Vermont" },
    { src: "assets/photos/bts-locomotive-cab.jpg", alt: "Camera operator filming an engineer inside a locomotive cab", caption: "Filming in the cab, Conway Scenic Railroad" },
    { src: "assets/photos/shelburne-round-barn.jpg", alt: "Red round barn under a blue sky", caption: "Round Barn, Shelburne Museum, Vermont" },
    { src: "assets/photos/pumpkin-field.jpg", alt: "Field of orange pumpkins on a sunny fall day", caption: "Fall on the North Shore, Massachusetts" },
    { src: "assets/photos/greg-hangar.jpg", alt: "Greg standing in front of a blue floatplane in a CHI Aerospace hangar", caption: "CHI Aerospace, Pease Airport, Portsmouth, NH" },
    { src: "assets/photos/cog-railway.jpg", alt: "Red Cog Railway locomotive and coach in deep snow", caption: "Mount Washington Cog Railway, New Hampshire" },
    { src: "assets/photos/bts-hammond-corridor.jpg", alt: "Camera operator filming in an arched stone corridor", caption: "Behind the scenes, Hammond Castle" },
    { src: "assets/photos/big-e-night.jpg", alt: "Greg and his wife Deborah at night in front of a lit Ferris wheel at the fair", caption: "With Deborah at The Big E, West Springfield, Massachusetts" },
    { src: "assets/photos/vermont-teddy-bear.jpg", alt: "Greg with a staff member at the Teddy Bear Hospital", caption: "Vermont Teddy Bear, Vermont" },
    { src: "assets/photos/crawford-plow-extra.jpg", alt: "Green snowplow and red locomotive in fresh snow", caption: "Plow Extra, Crawford Notch, New Hampshire", credit: "Mike Lacey" },
    { src: "assets/photos/bts-rockport.jpg", alt: "Camera operator filming a shop on Bearskin Neck", caption: "Bearskin Neck, Rockport, Massachusetts" },
    { src: "assets/photos/woodstock-gillingham.jpg", alt: "F.H. Gillingham and Sons general store on a Woodstock street", caption: "F.H. Gillingham & Sons, Woodstock, Vermont" },
    { src: "assets/photos/bts-ticonderoga-deck.jpg", alt: "Camera operator filming on the deck of the Ticonderoga", caption: "Filming aboard the Ticonderoga" },
    { src: "assets/photos/zebs-general-store.jpg", alt: "Zeb's General Store sign", caption: "Zeb's General Store, North Conway, New Hampshire" },
    { src: "assets/photos/cab-view-255.jpg", alt: "View from a locomotive cab toward the red 255 engine in snow", caption: "The view from the cab, Crawford Notch" },
    { src: "assets/photos/topsfield-fair.jpg", alt: "Home of Topsfield Fair sign", caption: "Topsfield Fair, Massachusetts" },
    { src: "assets/photos/bts-shelburne-carousel.jpg", alt: "Crew filming on a vintage carousel", caption: "Carousel shoot, Shelburne Museum, Vermont" },
    { src: "assets/photos/conway-scenic-216.jpg", alt: "Nose of Conway Scenic Railroad locomotive 216", caption: "Conway Scenic Railroad, New Hampshire" },
    { src: "assets/photos/winter-mountaineer.jpg", alt: "Black locomotive pulling red passenger cars through snow", caption: "Winter Mountaineer, Conway Scenic Railroad", credit: "Mike Lacey" }
  ],

  // Beyond New England: each destination gets its own group.
  // Leave photos empty to show "coming soon".
  beyond: [
    { place: "Cancún, Mexico", note: "Atelier Playa Mujeres", photos: [
      { src: "assets/photos/mx-pool.jpg", alt: "Long turquoise resort pool lined with palm trees" },
      { src: "assets/photos/mx-chefs.jpg", alt: "Greg with two chefs at an outdoor food station" },
      { src: "assets/photos/mx-greg-water.jpg", alt: "Greg in a life vest and sun hat on turquoise water" },
      { src: "assets/photos/mx-beach.jpg", alt: "White sand beach and blue Caribbean water" },
      { src: "assets/photos/mx-palms.jpg", alt: "Tall palm trees against a blue sky" },
      { src: "assets/photos/mx-boardwalk.jpg", alt: "Wooden boardwalk leading toward the resort" }
    ]},
    { place: "Aruba", note: "Barceló Aruba, Palm Beach", photos: [
      { src: "assets/photos/aw-pink-sunset.jpg", alt: "Pink and orange sunset over palm trees and the sea" },
      { src: "assets/photos/aw-greg-drink.jpg", alt: "Greg in a sun hat sipping a drink on the beach" },
      { src: "assets/photos/aw-troupial.jpg", alt: "Orange and black troupial bird perched on a balcony rail" },
      { src: "assets/photos/aw-pool.jpg", alt: "Resort pool lined with palm trees" },
      { src: "assets/photos/aw-bts-stand.jpg", alt: "Greg on location at a local food stand" },
      { src: "assets/photos/aw-baby-beach.jpg", alt: "White sand and turquoise water at Baby Beach", caption: "Baby Beach" },
      { src: "assets/photos/aw-sailboats.jpg", alt: "Sailboats anchored in turquoise water" },
      { src: "assets/photos/aw-sunset-beach.jpg", alt: "Sun setting over calm water at Palm Beach" }
    ]},
    { place: "Los Angeles, California", photos: [
      { src: "assets/photos/la-hollywood-sign.jpg", alt: "The Hollywood sign on the hillside above power lines", caption: "Hollywood" },
      { src: "assets/photos/la-greg-dodgers.jpg", alt: "Greg in a Dodgers jersey on the field at Dodger Stadium", caption: "Dodger Stadium" },
      { src: "assets/photos/la-greg-live-steamers.jpg", alt: "Greg riding a miniature train at the Los Angeles Live Steamers", caption: "Los Angeles Live Steamers, Griffith Park" },
      { src: "assets/photos/la-greg-angels-flight.jpg", alt: "Greg smiling in front of an Angels Flight railway car", caption: "Angels Flight, Downtown LA" },
      { src: "assets/photos/la-santa-monica-pier.jpg", alt: "Santa Monica Yacht Harbor arch at the pier entrance", caption: "Santa Monica Pier" },
      { src: "assets/photos/la-greg-walt-barn.jpg", alt: "Greg standing in front of Walt Disney's red barn workshop", caption: "Walt Disney's Barn, Griffith Park" },
      { src: "assets/photos/la-dodger-stadium.jpg", alt: "Packed Dodger Stadium during a game", caption: "Game day at Dodger Stadium" },
      { src: "assets/photos/la-bts-merry-go-round.jpg", alt: "Greg filming with a camera at the Griffith Park Merry-Go-Round", caption: "Filming at the Griffith Park Merry-Go-Round" },
      { src: "assets/photos/la-disney-studio-marker.jpg", alt: "Historical marker for Walt Disney's original animation studio on Hyperion Avenue", caption: "Site of Walt Disney's first studio" },
      { src: "assets/photos/la-farmers-market.jpg", alt: "Farmers Market clock tower lit at night", caption: "The Original Farmers Market" },
      { src: "assets/photos/la-merry-go-round-detail.jpg", alt: "Painted canopy and lights of the vintage Griffith Park carousel", caption: "Griffith Park Merry-Go-Round" },
      { src: "assets/photos/la-el-coyote.jpg", alt: "El Coyote Mexican restaurant with its red neon signs", caption: "El Coyote, Beverly Boulevard" },
      { src: "assets/photos/la-bobs-coffee-doughnuts.jpg", alt: "Bob's Coffee and Doughnuts counter at the Farmers Market", caption: "Bob's Coffee & Doughnuts, Farmers Market" },
      { src: "assets/photos/la-world-series-trophies.jpg", alt: "Dodgers World Series trophies on display", caption: "World Series trophies" },
      { src: "assets/photos/la-venice-boardwalk.jpg", alt: "Venice Beach boardwalk lined with palms and shops", caption: "Venice Beach boardwalk" }
    ]}
  ]
};
