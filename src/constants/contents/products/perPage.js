import { mightyMustard, oilseedRadish, purpleTop, yellowMustard } from "../../../assets/images/photos/products-img";

const types = {
  brassicas: "Brassicas",
  coverCropMixes: "Cover Crop Mixes",
  grains: "Grains",
  grasses: "Grasses, Millets, Sorghums",
  legumes: "Legumes",
};

const brassicas = [
  {
    id: 1,
    img: yellowMustard,
    type: types.brassicas,
    title: "Yellow Mustard",
    price: "$7.90",
  },
  {
    id: 2,
    img: oilseedRadish,
    type: types.brassicas,
    title: "Oilseed Radish",
    price: "$10.55",
  },
  {
    id: 3,
    img: purpleTop,
    type: types.brassicas,
    title: "Purple Top Forge Turnips",
    price: "$9.75",
  },
  {
    id: 4,
    img: mightyMustard,
    type: types.brassicas,
    title: "Mighty Mustard Pacific Gold",
    price: "$11.25",
  },
];

const coverCropMixes = [
  {
    id: 1,
    img: yellowMustard,
    type: types.brassicas,
    title: "Fall Green Manure Mix",
    price: "$9.70",
  },
  {
    id: 2,
    img: oilseedRadish,
    type: types.brassicas,
    title: "Spring Green Manure Mix",
    price: "$10.15",
  },
  {
    id: 3,
    img: purpleTop,
    type: types.brassicas,
    title: "Peas and Oats Mix",
    price: "$7.60",
  },
];

export { types, brassicas, coverCropMixes };
