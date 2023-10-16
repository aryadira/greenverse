import { manure, millet, mustard, oats, radish, ryeegrass, sunflower, crimson } from "../../../assets/img";

const types = [
  {
    id: 1,
    name: "Brassica",
  },
  {
    id: 2,
    name: "Cover Crop Mixes",
  },
  {
    id: 3,
    name: "Grains",
  },
  {
    id: 4,
    name: "Grasses, Millets, Sorghums",
  },
  {
    id: 5,
    name: "Legumes",
  },
];

const displayAll = [
  {
    id: 1,
    img: mustard,
    type: types[0].name,
    title: "Yellow Mustard",
  },
  {
    id: 2,
    img: radish,
    type: types[0].name,
    title: "Oilseed Radish",
  },
  {
    id: 3,
    img: ryeegrass,
    type: types[3].name,
    title: "Ryeegrass",
  },
  {
    id: 4,
    img: millet,
    type: types[3].name,
    title: "Hybrid Pearl Millet",
  },
  {
    id: 5,
    img: manure,
    type: types[1].name,
    title: "Fall Green Manure Mix",
  },
  {
    id: 6,
    img: oats,
    type: types[2].name,
    title: "Oats",
  },
  {
    id: 7,
    img: sunflower,
    type: types[2].name,
    title: "Royal Hybrid 1121 Sunflower",
  },
  {
    id: 8,
    img: crimson,
    type: types[4].name,
    title: "Crimson Flower",
  },
];

export { types, displayAll };
