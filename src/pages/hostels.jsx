import kike from "../assets/images/Kike 1.png";
import kike2 from "../assets/images/Kike 2.png";
import kike3 from "../assets/images/Kike 3.png";
import sanusi from "../assets/images/Sanusi.png";
import sanusi2 from "../assets/images/Sanusi 2.png";
import sanusi3 from "../assets/images/Sanusi 3.png";
import sanusi4 from "../assets/images/Sanusi 4.png";
import bethany from "../assets/images/Bethany.png";
import bethany2 from "../assets/images/Bethany 2.png";
import bethany3 from "../assets/images/Bethany 3.png";
import bethany4 from "../assets/images/Bethany 4.png";
import bethany5 from "../assets/images/Bethany 5.png";
import bethany6 from "../assets/images/Bethany 6.png";
import albanic from "../assets/images/Albanic.png";
import albanic2 from "../assets/images/Albanic 2.png";
import albanic3 from "../assets/images/Albanic 3.png";
import arafims from "../assets/images/Arafims.png";
import arafims2 from "../assets/images/Arafims 2.png";
import arafims3 from "../assets/images/Arafims 3.png";
import arafims4 from "../assets/images/Arafims 4.png";
import arafims5 from "../assets/images/Arafims 5.png";
import moremi from "../assets/images/Moremi.png";
import moremi2 from "../assets/images/Moremi 2.png";
import moremi3 from "../assets/images/Moremi 3.png";
import moremi4 from "../assets/images/Moremi 4.png";
import ibidun from "../assets/images/Ibidun.png";
import ibidun2 from "../assets/images/Ibidun 2.png";
import takleema from "../assets/images/Takleema.png";
import takleema2 from "../assets/images/Takleema 2.png";
import hawa from "../assets/images/Hawa.png";
import hawa2 from "../assets/images/Hawa 2.png";
import zapel from "../assets/images/Zapel.png";
import zapel2 from "../assets/images/Zapel 2.png";
import zapel3 from "../assets/images/Zapel 3.png";
import eq from "../assets/images/Easy and Quiet.png";
import pyramid from "../assets/images/Pyramid.png";
import pyramid2 from "../assets/images/Pyramid 2.png";
import pyramid3 from "../assets/images/Pyramid 3.png";
import pyramid4 from "../assets/images/Pyramid 4.png";
import gulf from "../assets/images/Gulf.png";
import mubarak from "../assets/images/Mubarak.png";
import mubarak2 from "../assets/images/Mubarak 2.png";
import robiat from "../assets/images/Robiat.png";
import robiat2 from "../assets/images/Robiat 2.png";
import atlantic from "../assets/images/Atlantic.png";
import atlantic2 from "../assets/images/Atlantic 2.png";
import atlantic3 from "../assets/images/Atlantic 3.png";
import atlantic4 from "../assets/images/Atlantic 4.png";
import uillogo from "../assets/images/UIL Logo.png"

export const hostels = [
  {
    id: 1,
    name: 'Kikelomo Rusenwe Hall',
    gender: "male", 
    rating: 4,
    price: 190,
    image: kike,
    images: [kike, kike2, kike3],
    description: "Nice male hostel",
    contact: "+234 808 909 6132",
    email: "kikelomo.r_hall@hotmail.com",
    slug: "kikelomo-rusenwe-hall",
    lat: 8.489160404453791, 
    lng: 4.6684200332389,
    amenities: ['water-supply' ,'CCTV', 'study-room', 'parking-space', 'reading-table', 'laundry-services', 'backup-generator', 'solar-power-support', 'restaurant', 'tuckshop'],
    roomTypes: [
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "250" },
      { type: '4 in a Room', price: "198,000" }
    ],
  },
  {
    id: 2,
    name: 'Sanusi Hostel',
    gender: "male",
    rating: 4,
    price: 190,
    image: uillogo,
    images: [ sanusi2, sanusi3, sanusi4,],                      
    description: "Nice male hostel",
    contact: "+234 704 634 2937",
    email: "sanusi_hostel@gmail.com",
    slug: "sanusi-hostel", 
    lat: 8.48469562852251,        
    lng: 4.667509540633116,
    amenities: ['water-supply' ,  'parking-space', 'reading-table', 'backup-generator', 'CCTV'],
    roomTypes: [
      { type: '2 in a Room', price: "180" },
      { type: '4 in a Room', price: "189,000" }
    ]
  }, 
  {
    id: 3,
    name: 'Sanusi Hostel 2',
    gender: "male",
    rating: 5,
    price: 190,
    image: sanusi,
    images: [sanusi, sanusi2,],
    description: "Nice male hostel",
    contact: "+234 704 634 2937",
    email: "sanusi_hostel@gmail.com",
    slug: "sanusi-hostel2",
    lat: 8.48469562852251,        
    lng: 4.667509540633116,
    amenities: ['water-supply' ,'parking-space', 'reading-table', 'backup-generator'],
    roomTypes: [
      { type: '2 in a Room', price: "230" },
      { type: '4 in a Room', price: "180,000" }
    ]
  },
  {
    id: 4,
    name: 'Albanic Hostel',
    gender: "female",
    rating: 1,
    price: 190,
    image: albanic,
    images: [albanic, albanic2, albanic3,],
    description: "Nice female hostel",
    contact: "+234 813 826 0563",
    email: "hostel.albanic@gmail.com",
    slug: "albanic-hostel",
    lat: 8.485648162339707,
    lng: 4.669992235644696,
    amenities: ['water-supply', 'backup-generator', 'reading-table'],
    roomTypes: [
      { type: 'Single Room', price: "250 "},
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "275,000"},
      { type: '4 in a Room', price: "190" }
    ]
  },
  {
    id: 5,
    name: 'Ibidun Hostel',
    gender: "female",
    price: 190,
    image: ibidun,
    images: [ibidun, ibidun2],
    description: "Nice female hostel",
    contact: "+234 716 394 7268",
    email: "ibidun.hostel@hotmail.com",
    slug: "ibidun-hostel",
    lat: 8.48557477376253, 
    lng: 4.670475041197359,
    amenities: ['water-supply' ,],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "275"},
      { type: '4 in a Room', price: "190" }
    ]
  },
  {
    id: 6,
    name: 'Takleema Hostel',
    gender: "male",
    rating: 3,
    price: 190,
    image: takleema,
    images: [takleema, takleema2],
    description: "Nice male hostel",
    contact: "+234 738 927 9372", 
    email: "hostel_takleema@gmail.com",
    slug: "takleema-hostel",
    lat: 8.479643887945826,
    lng: 4.664724958391535,
    amenities: ['water-supply', 'tuckshop', 'wifi', 'backup-generator', 'study-room', 'parking-space', 'restaurant', 'shuttle-bus', 'reading-table', 'laundry-services'],
    roomTypes: [
      { type: '2 in a Room', price: "225,000" },
      { type: '3 in a Room', price:" 180 "},
      { type: '4 in a Room', price: "190,000" }
    ]
  },
  {
    id: 7,
    name: 'Arafims Hostel',
    gender: "male",
    rating: 4,
    price: 190,
    image: arafims,
    images: [arafims, arafims2, arafims3, arafims4, arafims5],
    description: "Nice male hostel",
    contact: "+234 825 937 1974",
    email: "arafimshostel@gmail.com",
    slug: "arafims-hostel",
    lat: 8.486212550766073, 
    lng: 4.668571781113552,
    amenities: ['water-supply', 'reading-table', 'restaurant', 'parking-space', 'backup-generator', 'wifi', 'CCTV'],
    roomTypes: [
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "180 "},
      { type: '4 in a Room', price: "196,000" }
    ]
  },
  {
    id: 8,
    name: 'Arafims Hostel 2',
    gender: "male",
    rating: 4,
    price: 190,
    image: uillogo,
    images: [ arafims2],
    description: "Nice male hostel",
    contact: "+234 825 937 1974",
    email: "arafimshostel@gmail.com",
    slug: "arafims-hostel2",
    lat: 8.48072492201884, 
    lng: 4.665310197018079,
    amenities: ['water-supply', 'wifi', 'parking-space'],
    roomTypes: [
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "180" },
      { type: '4 in a Room', price: "196,000" }
    ]
  },
  {
    id: 9,
    name: 'Zapel Hostel',
    gender: "male",
    rating: 5,
    price: 190,
    image: uillogo,
    images: [zapel, zapel2, zapel3,],
    alt: "none",
    description: "Nice male hostel",
    contact: "+234 715 439 1094",
    email: "zapelhostel@yahoo.com",
    slug: "zapel-hostel",
    lat: 8.485278482697911,
    lng: 4.668322076122135,
    amenities: ['water-supply', 'reading-table', ],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180" },
      { type: '4 in a Room', price: "195,000" }
    ]
  },
  {
    id: 10,
    name: 'Easy and Quiet Hostel',
    gender: "female",
    rating: 6,
    price: 190,
    image: eq,
    images: [uillogo],
    alt: "none",
    description: "Nice female hostel",
    contact: "+234 710 937 9264",
    email: "e&qhostel@yahoo.com",
    slug: "easy-and-quiet-hostel",
    lat: 8.492960313256258,
    lng: 4.669456862567037,
    amenities: ['water-supply', 'wifi', 'reading-table', 'backup-generator', 'tuckshop' ] ,
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "180" },
      { type: '4 in a Room', price: "196,500" }
    ]
  },
  {
    id: 11,
    name: 'Charis Hostel',
    gender: "female",
    rating: 2,
    price: 190,
    image: uillogo,
    images: [uillogo],
    alt: "none",
    description: "Nice female hostel",
    contact: "+234 710 937 9264",
    email: "charis_hostel@gmail.com",
    slug: "charis-hostel",
    lat: 8.489167494757336,
    lng: 4.671471671884074,
    amenities: ['water-supply', "CCTV", "reading-table", "study-room"],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "180" },
      { type: '4 in a Room', price: "175,000" }
    ]
  },
  {
    id: 12,
    name: 'Moremi Hostel',
    gender: "female",
    rating: 2,
    price: 190,
    image: moremi4,
    images: [moremi, moremi4, moremi2, moremi3],
    alt: "none",
    description: "Nice female hostel",
    contact: "+234 706 172 5009",
    email: "moremigirls@gmail.com",
    slug: "moremi-hostel",
    lat: 8.491756782244273,
    lng: 4.6738731681823555,
    amenities: ['water-supply', 'study-room', 'reading-table'],
    roomTypes: [
      { type: '2 in a Room', price: "180" },
      { type: '3 in a Room', price: "205,000"},
      { type: '4 in a Room', price: "190" }
    ]
  },
  {
    id: 13,
    name: 'Bethany Hostel',
    gender: "female",
    rating: 6,
    price: 190,
    image: bethany,
    images: [bethany, bethany2, bethany3, bethany4, bethany5, bethany6],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "bethany_hostel@yahoo.com",
    slug: "bethany-hostel",
    lat: 8.480027522404667, 
    lng: 4.66828592215215,
    amenities: ['water-supply', 'backup-generator', 'CCTV', 'study-room', 'reading-table', 'parking-space', 'restaurant'],
    roomTypes: [
      { type: 'Single Room', price: "250"},
      { type: '2 in a Room', price: "353,000" },
      { type: '4 in a Room', price: "218,000" }
    ]
  },
  {
    id: 14,
    name: 'Queens Hostel',
    gender: "female",
    price: 190,
    image: uillogo,
    images: [uillogo],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "queens_hostel@yahoo.com",
    slug: "queens-hostel",
    lat: 8.480292922257824,
    lng: 4.67419913564465,
    amenities: ['water-supply',],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180"},
      { type: '4 in a Room', price: "219" }
    ]
  },
  {
    id: 15,
    name: 'Sky Hostel',
    gender: "male",
    rating: 2,
    price: 190,
    image: uillogo,
    images: [uillogo],
    description: "Nice male hostel",
    contact: "+234 917 394 9274",
    email: "sky_hostel@yahoo.com",
    slug: "sky-hostel",
    amenities: ['water-supply', 'solar-power-support',],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180"},
      { type: '4 in a Room', price: "219,000" }
    ]
  },
  {
    id: 16,
    name: 'Scientific Hostel',
    gender: "female",
    rating: 3,
    price: 190,
    image: uillogo,
    images: [uillogo],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "scientific_hostel@yahoo.com",
    slug: "scientific-hostel",
    lat: 8.491175593756147,
    lng: 4.674085460242562,
    amenities: ['water-supply', 'backup-generator'],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "160,000" },
      { type: '4 in a Room', price: "190" }
    ]
  },
  {
    id: 17,
    name: 'Pyramid Hostel',
    gender: "male",
    rating: 6,
    price: 190,
    image: pyramid2,
    images: [pyramid, pyramid2, pyramid3, pyramid4,],
    description: "Nice male hostel",
    contact: "+234 917 394 9274",
    email: "pyramid_hostel@yahoo.com",
    slug: "pyrmaid-hostel",
    lat: 8.480437822177715,
    lng: 4.666630987227378,
    amenities: ['water-supply', 'CCTV', 'backup-generator'],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "280,000" },
      { type: '4 in a Room', price: "190" }
    ]
  },
  {
    id: 18,
    name: 'Hawa Hostel',
    gender: "female",
    rating: 7,
    price: 190,
    image: hawa,
    images: [hawa, hawa2,],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "hostel.hawa@gmail.com",
    slug: "hawa-hostel",
    lat: 8.484962885443137, 
    lng: 4.669716150988018,
    amenities: ['water-supply', 'backup-generator', 'restaurant'],
    roomTypes: [
      { type: '2 in a Room', price: "180" },
      { type: '4 in a Room', price: "189,000" }
    ]
  },
  {
    id: 19,
    name: 'Gulf Pearl Hostel',
    gender: "female",
    rating: 1,
    price: 190,
    image: gulf,
    images: [gulf,],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "hostel.gulf.pearl@gmail.com",
    slug: "gulf-pearl-hostel",
    lat: 8.49112202634969,
    lng: 4.669749070033251,
    amenities: ['water-supply',],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180" },
      { type: '4 in a Room', price: "201,000" }
    ]
  },
  {
    id: 20,
    name: 'Rubiks Hostel',
    gender: "female",
    price: 190,
    image: uillogo,
    images: [uillogo],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "hostel.rubiks@gmail.com",
    slug: "rubiks-hostel",
    lat: 8.48871416282642,
    lng: 4.67090549463098,
    amenities: ['water-supply',],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180"},
      { type: '4 in a Room', price: "219,000" }
    ]
  },
  {
    id: 21,
    name: 'El-mubarak Hostel',
    gender: "female",
    price: 190,
    image: mubarak,
    images: [mubarak2],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "el-mubarak_hostel@gmail.com",
    slug: "el-mubarak-hostel",
    lat: 8.490639360265577,
    lng: 4.669720710510651,
    amenities: ['water-supply',],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180"},
      { type: '4 in a Room', price: "219,000" }
    ]
  },
  {
    id: 22,
    name: 'Robiat Ajike Hostel',
    gender: "female",
    price: 190,
    image: robiat,
    images: [robiat, robiat2,],
    description: "Nice female hostel",
    contact: "+234 917 394 9274",
    email: "robiat.ajike.hostel@gmail.com",
    slug: "robiat-ajike-hostel",
    lat: 8.48628053031834,
    lng: 4.6696248853765425,
    amenities: ['water-supply',],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "180"},
      { type: '4 in a Room', price: "219,000" }
    ]
  },
  {
    id: 23,
    name: 'Atlantic Heights Hostel',
    gender: "female",
    rating: 2,
    price: 190,
    image: atlantic,
    images: [atlantic, atlantic2, atlantic3, atlantic4,],
    description: "Nice female hostel",
    contact: "+234 802 052 2531",
    email: "info@atlanticheights.space",
    slug: "atlantic-heights-hostel",
    lat: 8.492143104485312,
    lng: 4.670685056540782,
    amenities: ['water-supply', 'wifi', 'study-room', 'reading-table', 'parking-space', 'laundry-services', 'tuckshop'],
    roomTypes: [
      { type: 'Single Room', price: "250" },
      { type: '2 in a Room', price: "220,000" },
      { type: '4 in a Room', price: "210,000" }
    ]
  },

];
