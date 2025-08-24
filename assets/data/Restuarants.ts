import { Restaurant } from "../../src/types";

const Restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Palace",
    location: "Park Street, Kolkata",
    rating: 4.5,
    deliveryTime: "30-40 mins",
    discount: "50% OFF",
    image: require("../images/restuarants/Pizza_place.avif"),
    isVeg: false,
    dishes: [
      {
        id: "101",
        name: "Margherita Pizza",
        description: "Classic cheese and tomato pizza",
        image: require("../images/DishImg/mergarita.jpeg"),
        price: 249,
        isVeg: true,
      },
      {
        id: "102",
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni with mozzarella",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 349,
        isVeg: false,
      },
      {
        id: "103",
        name: "Veggie Pizza",
        description: "Fresh veggies and cheese",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 299,
        isVeg: true,
      },
      {
        id: "104",
        name: "Chicken Pizza",
        description: "Crispy chicken and cheese",
        image: require("../images/DishImg/mergarita.jpeg"),
        price: 399,
        isVeg: false,
      },
    ],
  },
  {
    id: "2",
    name: "Burger Hub",
    location: "Salt Lake, Kolkata",
    rating: 4.2,
    deliveryTime: "25-35 mins",
    discount: "8% OFF",
    image: require("../images/restuarants/Burger_hub.avif"),
    isVeg: false,
    dishes: [
      {
        id: "201",
        name: "Veggie Burger",
        image: require("../images/DishImg/mergarita.jpeg"),

        description: "Grilled veg patty with fresh veggies",
        price: 149,
        isVeg: true,
      },
      {
        id: "202",
        name: "Chicken Burger",
        description: "Crispy chicken patty with mayo",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 199,
        isVeg: false,
      },
    ],
  },
  {
    id: "3",
    name: "Biryani House",
    location: "Howrah, Kolkata",
    rating: 4.7,
    deliveryTime: "35-45 mins",
    discount: "Flat ₹100 OFF",
    image: require("../images/restuarants/Biriyani_house.avif"),
    isVeg: false,
    dishes: [
      {
        id: "301",
        name: "Chicken Biryani",
        description: "Aromatic rice with tender chicken",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 299,
        isVeg: false,
      },
      {
        id: "302",
        name: "Veg Biryani",
        description: "Delicious rice cooked with fresh vegetables",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 199,
        isVeg: true,
      },
    ],
  },
  {
    id: "4",
    name: "Chinese Express",
    location: "Sealdah, Kolkata",
    rating: 4.3,
    deliveryTime: "20-30 mins",
    discount: "Free 1 Coke",
    image: require("../images/restuarants/chinese.avif"),
    isVeg: false,
    dishes: [
      {
        id: "401",
        name: "Veg Hakka Noodles",
        description: "Stir fried noodles with vegetables",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 159,
        isVeg: true,
      },
      {
        id: "402",
        name: "Chicken Manchurian",
        description: "Spicy chicken balls in gravy",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 249,
        isVeg: false,
      },
    ],
  },
  {
    id: "5",
    name: "South Indian Delight",
    location: "Esplanade, Kolkata",
    rating: 4.6,
    deliveryTime: "25-35 mins",
    discount: "20% OFF",

    image: require("../images/restuarants/southindian.avif"),
    isVeg: true,
    dishes: [
      {
        id: "501",
        name: "Masala Dosa",
        description: "Crispy dosa with spiced potato filling",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 120,
        isVeg: true,
      },
      {
        id: "502",
        name: "Idli Sambar",
        description: "Steamed idlis with hot sambar",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 99,
        isVeg: true,
      },
    ],
  },
  {
    id: "6",
    name: "Kebab Junction",
    location: "Gariahat, Kolkata",
    rating: 4.4,
    deliveryTime: "30-40 mins",
    discount: "Free Delevery",
    image: require("../images/restuarants/kabab.avif"),
    isVeg: false,
    dishes: [
      {
        id: "601",
        name: "Chicken Seekh Kebab",
        description: "Juicy minced chicken skewers",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 220,
        isVeg: false,
      },
      {
        id: "602",
        name: "Paneer Tikka",
        description: "Grilled paneer cubes with spices",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 180,
        isVeg: true,
      },
    ],
  },
  {
    id: "7",
    name: "Rolls Corner",
    location: "New Market, Kolkata",
    rating: 4.1,
    deliveryTime: "15-25 mins",
    discount: "Buy 1 Get 1 Free",
    image: require("../images/restuarants/rolls_corner.avif"),
    isVeg: false,
    dishes: [
      {
        id: "701",
        name: "Egg Chicken Roll",
        description: "Paratha wrap with egg & chicken",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 120,
        isVeg: false,
      },
      {
        id: "702",
        name: "Paneer Roll",
        description: "Paratha wrap with paneer stuffing",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 100,
        isVeg: true,
      },
    ],
  },
  {
    id: "8",
    name: "Momo Mania",
    location: "Dumdum, Kolkata",
    rating: 4.0,
    deliveryTime: "20-30 mins",
    image: require("../images/restuarants/momo_mania.avif"),
    isVeg: false,
    dishes: [
      {
        id: "801",
        name: "Veg Momos",
        description: "Steamed dumplings with vegetable filling",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 90,
        isVeg: true,
      },
      {
        id: "802",
        name: "Chicken Momos",
        description: "Steamed dumplings with chicken filling",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 110,
        isVeg: false,
      },
    ],
  },
  {
    id: "9",
    name: "Sweet Tooth",
    location: "Shyambazar, Kolkata",
    rating: 4.8,
    deliveryTime: "15-20 mins",
    discount: "Free Dessert on ₹500+",
    image: require("../images/restuarants/sweet_tooth.avif"),
    isVeg: true,
    dishes: [
      {
        id: "901",
        name: "Rasgulla",
        description: "Traditional Bengali sweet",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 20,
        isVeg: true,
      },
      {
        id: "902",
        name: "Gulab Jamun",
        description: "Soft fried balls soaked in syrup",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 30,
        isVeg: true,
      },
    ],
  },
  {
    id: "10",
    name: "Healthy Bowl",
    location: "Rajpur, Kolkata",
    rating: 4.5,
    deliveryTime: "20-30 mins",
    image: require("../images/restuarants/healthy_bowl.avif"),
    isVeg: true,
    dishes: [
      {
        id: "1001",
        name: "Quinoa Salad",
        description: "Protein-packed quinoa with veggies",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 250,
        isVeg: true,
      },
      {
        id: "1002",
        name: "Grilled Chicken Salad",
        description: "Grilled chicken breast with greens",
        image: require("../images/DishImg/mergarita.jpeg"),

        price: 280,
        isVeg: false,
      },
    ],
  },
];

export default Restaurants;
