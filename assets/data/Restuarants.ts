export type Restaurant = {
  id: string;
  name: string;
  location: string;
  rating: number;
  deliveryTime: string;
  discount?: string; // optional
  //   image: any;
  isVeg: boolean;
  items: {
    id: string;
    name: string;
    description: string;
    price: number;
    // image: any;
    isVeg: boolean;
  }[];
};

const Restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Palace",
    location: "Park Street, Kolkata",
    rating: 4.5,
    deliveryTime: "30-40 mins",
    discount: "50% OFF",
    // image: require("@assets/images/Swiggy/pizza.jpeg"),
    isVeg: false,
    items: [
      {
        id: "101",
        name: "Margherita Pizza",
        description: "Classic cheese and tomato pizza",
        price: 249,
        // image: require("@assets/images/Swiggy/pizza.jpeg"),
        isVeg: true,
      },
      {
        id: "102",
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni with mozzarella",
        price: 349,
        // image: require("@assets/images/Swiggy/pizza.jpeg"),
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
    // image: require("@assets/images/Swiggy/burger.jpeg"),
    isVeg: false,
    items: [
      {
        id: "201",
        name: "Veggie Burger",
        description: "Grilled veg patty with fresh veggies",
        price: 149,
        // image: require("@assets/images/Swiggy/burger.jpeg"),
        isVeg: true,
      },
      {
        id: "202",
        name: "Chicken Burger",
        description: "Crispy chicken patty with mayo",
        price: 199,
        // image: require("@assets/images/Swiggy/burger.jpeg"),
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
    // image: require("@assets/images/Swiggy/biryani.jpeg"),
    isVeg: false,
    items: [
      {
        id: "301",
        name: "Chicken Biryani",
        description: "Aromatic rice with tender chicken",
        price: 299,
        // image: require("@assets/images/Swiggy/biryani.jpeg"),
        isVeg: false,
      },
      {
        id: "302",
        name: "Veg Biryani",
        description: "Delicious rice cooked with fresh vegetables",
        price: 199,
        // image: require("@assets/images/Swiggy/biryani.jpeg"),
        isVeg: true,
      },
    ],
  },
];

export default Restaurants;
