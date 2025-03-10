import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'


//my changes
import mylogo from './cantina_logo.png'
import myheaderImg from './myHeader.png'


export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,       //my changes from below
   
    mylogo,
    myheaderImg
}

export const menu_list = [
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Non Veg",
        menu_image: menu_1
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Beverages",
        menu_image: menu_5
    },
    {
        menu_name: "Desserts",
        menu_image: menu_3
    }]

export const food_list = [
    {
        _id: "1",
        name: "Paneer Roll",
        image: food_1,
        price: 60,
        description: "A delicious wrap filled with soft paneer cubes, fresh veggies, and aromatic spices",
        category: "Rolls"
    }, {
        _id: "2",
        name: "Peri Peri Roll",
        image: food_2,
        price: 70,
        description: "A zesty roll packed with spicy peri-peri flavors and a tangy mayo twist",
        category: "Rolls"
    }, {
        _id: "3",
        name: "Spring Rolls",
        image: food_3,
        price: 35,
        description: "Scrumptious and crispy rolls stuffed with a savory mix of veggies",
        category: "Rolls"
    }, {
        _id: "4",
        name: "Chicken Roll",
        image: food_4,
        price: 80,
        description: "A savory roll stuffed with tender chicken, fresh veggies, and flavorful spices",
        category: "Rolls"
    }, {
        _id: "5",
        name: "Paneer Cheese Sandwich",
        image: food_5,
        price: 60,
        description: "A tasty sandwich featuring creamy paneer and cheese, layered with savory sauces",
        category: "Sandwich"
    }, {
        _id: "6",
        name: "Aloo Sandwich",
        image: food_6,
        price: 50,
        description: "A crispy, toasted sandwich stuffed with spiced mashed potatoes, offering a flavorful snack.",
        category: "Sandwich"
    }, {
        _id: "7",
        name: "Grilled Chicken Sandwich",
        image: food_7,
        price: 70,
        description: "A hearty sandwich with mashed chicken, crisp capsicum, and creamy sauce",
        category: "Sandwich"
    }, {
        _id: "8",
        name: "Omelette Sandwich",
        image: food_8,
        price: 60,
        description: "A fluffy omelette layered between toasted bread slices, packed with flavors",
        category: "Sandwich"
    }, {
        _id: "9",
        name: "Chole Bhature",
        image: food_9,
        price: 60,
        description: "A classic North Indian dish featuring spicy chickpea curry with fluffy, deep-fried bhature",
        category: "Pure Veg"
    }, {
        _id: "10",
        name: "Pav Bhaji",
        image: food_10,
        price: 50,
        description: "A flavorful mash of mixed vegetables served with warm and toasted buttered pav",
        category: "Pure Veg"
    }, {
        _id: "11",
        name: "Dosa",
        image: food_11,
        price: 50,
        description: "A crispy, golden dosa served with tangy sambar and creamy coconut chutney",
        category: "Pure Veg"
    }, {
        _id: "12",
        name: "Schezwan Rice",
        image: food_12,
        price: 60,
        description: "Spicy and flavorful rice stir-fried with vibrant veggies and a zesty Schezwan sauce",
        category: "Pure Veg"
    }, {
        _id: "13",
        name: "Chicken Biryani",
        image: food_13,
        price: 200,
        description: "A fragrant and flavorful rice dish layered with tender chicken, aromatic spices, and herbs",
        category: "Non Veg"
    },
    {
        _id: "14",
        name: "Chicken Tenders",
        image: food_14,
        price: 120,
        description: "Crispy, golden chicken tenders served with a side of golden fries and creamy mayo sauce",
        category: "Non Veg"
    }, {
        _id: "15",
        name: "Chicken Burger",
        image: food_15,
        price: 70,
        description: "A juicy chicken patty with fresh veggies and tangy sauce in a soft bun",
        category: "Non Veg"
    }, {
        _id: "16",
        name: "Chicken Pizza",
        image: food_16,
        price: 160,
        description: "A mouthwatering pizza topped with tender chicken, rich sauce, and melted cheese",
        category: "Non Veg"
    }, {
        _id: "17",
        name: "Buttter Noodles",
        image: food_17,
        price: 70,
        description: "Savor the comforting blend of tender noodles tossed in rich butter, and herbs",
        category: "Noodles"
    }, {
        _id: "18",
        name: "Veg Noodles",
        image: food_18,
        price: 60,
        description: "A vibrant medley of fresh vegetables and cooked noodles, tossed in a savory sauce",
        category: "Noodles"
    }, {
        _id: "19",
        name: "Schezwan Noodles",
        image: food_19,
        price: 80,
        description: "Dive into a tantalizing mix of stir-fried noodles coated in a spicy, aromatic sauce",
        category: "Noodles"
    }, {
        _id: "20",
        name: "Maggi Noodles",
        image: food_20,
        price: 35,
        description: "A warm, comforting bowl of instant noodles with a blend of spices",
        category: "Noodles"    
    }, {
        _id: "21",
        name: "Cheese Pasta",
        image: food_21,
        price: 150,
        description: "A cheesy dish that combines perfectly cooked pasta with a luscious cheese sauce",
        category: "Pasta"
    }, {
        _id: "22",
        name: "Tomato Pasta",
        image: food_22,
        price: 120,
        description: "Indulged in a vibrant pasta, where noodles are enveloped in a rich, tangy tomato sauce",
        category: "Pasta"
    }, {
        _id: "23",
        name: "Creamy Pasta",
        image: food_23,
        price: 150,
        description: "Savor the delightful combination of tender pasta tossed in a luscious, creamy sauce",
        category: "Pasta"
    }, {
        _id: "24",
        name: "Chicken Pasta",
        image: food_24,
        price: 180,
        description: "Experience the bold flavors of tender chicken and perfectly cooked pasta",
        category: "Pasta"
    }, {
        _id: "25",
        name: "Lime Mojito",
        image: food_25,
        price: 60,
        description: "A refreshing beverage that blends tangy lime, fresh mint, sugar, and sparkling water",
        category: "Beverages"
    }, {
        _id: "26",
        name: "Coca Cola",
        image: food_26,
        price: 50,
        description: "A classic drink served in a chilled glass, delivering a crisp and refreshing taste",
        category: "Beverages"
    }, {
        _id: "27",
        name: "Iced Tea",
        image: food_27,
        price: 40,
        description: "A refreshing drink featuring a harmonious blend of brewed tea and tangy lemon",
        category: "Beverages"
    }, {
        _id: "28",
        name: "Cold Coffee",
        image: food_28,
        price: 55,
        description: "A refreshing blend of brewed coffee, chilled milk, and sugar, served over ice",
        category: "Beverages"
    }, {
        _id: "29",
        name: "Chocolate Cake",
        image: food_29,
        price: 80,
        description: "A rich and moist chocolate cake slice with a velvety texture and decadent flavor",
        category: "Desserts"
    }, {
        _id: "30",
        name: "Red Velvet Jar",
        image: food_30,
        price: 100,
        description: "A delightful jar of layered red velvet cake with creamy frosting",
        category: "Desserts"
    }, {
        _id: "31",
        name: "Chocolate Brownie",
        image: food_31,
        price: 50,
        description: "A rich, fudgy chocolate brownie with a melt-in-your-mouth texture",
        category: "Desserts"
    }, {
        _id: "32",
        name: "Lemon Tarts",
        image: food_32,
        price: 80,
        description: "Lemon tarts feature a buttery, crisp crust filled with tangy, smooth lemon curd",
        category: "Desserts"
    },
]
