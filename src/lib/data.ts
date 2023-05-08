export enum Category {
  PIZZA = "pizza",
  BURGER = "burger",
  DRINK = "drink",
  HOTDOG = "hotdog",
  TACO = "taco",
}
export type ICategory = { name: string; image: string; key: string };
export const categories: ICategory[] = [
  {
    name: "Pizza",
    image: "/cat_pizza.png",
    key: Category.PIZZA,
  },
  {
    name: "Burger",
    image: "/cat_burger.png",
    key: Category.BURGER,
  },
  {
    name: "Drink",
    image: "/cat_drink.png",
    key: Category.DRINK,
  },
  {
    name: "Taco",
    image: "/cat_taco.png",
    key: Category.TACO,
  },
  {
    name: "Hot Dog",
    image: "/cat_hotdog.png",
    key: Category.HOTDOG,
  },
];
export type ICategoryItem = {
  id: number;
  itemName: string;
  price: number;
  imgPath: string;
};
export type ICategoryItems = {
  [key: string]: ICategoryItem[];
};
export const categoryItems: ICategoryItems = {
  pizza: [
    {
      id: 1,
      itemName: "Mushroom Pizza",
      price: 150,
      imgPath: "/pizza_1.png",
    },
    {
      id: 2,
      itemName: "Capsicum Pizza",
      price: 300,
      imgPath: "/pizza_2.png",
    },
    {
      id: 3,
      itemName: "Tomato Pizza",
      price: 300,
      imgPath: "/pizza_3.png",
    },
  ],
  burger: [
    {
      id: 1,
      itemName: "Mushroom Burger",
      price: 300,
      imgPath: "/burger_1.png",
    },
    {
      id: 2,
      itemName: "Capsicum Burger",
      price: 200,
      imgPath: "/burger_1.png",
    },
    {
      id: 3,
      itemName: "Onion Burger",
      price: 250,
      imgPath: "/burger_1.png",
    },
  ],
  drink: [
    {
      id: 1,
      itemName: "Mushroom Burger",
      price: 300,
      imgPath: "/burger_1.png",
    },
    {
      id: 2,
      itemName: "Capsicum Burger",
      price: 200,
      imgPath: "/burger_1.png",
    },
    {
      id: 3,
      itemName: "Onion Burger",
      price: 250,
      imgPath: "/burger_1.png",
    },
  ],
  taco: [
    {
      id: 1,
      itemName: "Mushroom Burger",
      price: 300,
      imgPath: "/burger_1.png",
    },
    {
      id: 2,
      itemName: "Capsicum Burger",
      price: 200,
      imgPath: "/burger_1.png",
    },
    {
      id: 3,
      itemName: "Onion Burger",
      price: 250,
      imgPath: "/burger_1.png",
    },
  ],
  hotdog: [
    {
      id: 1,
      itemName: "HotDog 1",
      price: 300,
      imgPath: "/burger_1.png",
    },
    {
      id: 2,
      itemName: "Hotdog 2",
      price: 200,
      imgPath: "/burger_1.png",
    },
    {
      id: 3,
      itemName: "Hotdog 3",
      price: 250,
      imgPath: "/burger_1.png",
    },
  ],
};
