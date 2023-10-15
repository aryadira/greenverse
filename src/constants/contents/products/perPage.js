import {
  mightyMustard,
  oilseedRadish,
  purpleTop,
  yellowMustard,
  fallgreen,
  peasandoats,
  springgreen,
  barleyquest,
  barleyrobust,
  buckwheat,
  buckwheatcommon,
  hullessoats,
  oats,
  royalhybrid,
  springwheat,
  springwheatbolles,
  springwheatlang,
  winterrye,
  ryegrass,
  hybridpearl,
  sudahgrasspiper,
  sudangrassbrownmid,
  sudangrassbrownmidorganic,
  crimsonclover,
  fieldpeamaxum,
  fieldpeas,
  dsadmiral,
  hairyvetch,
  mammothredclover,
  mediumredclover,
  newzealandwhiteclover,
  summeralfalfa,
  sweetclover,
  ynsyellowpea,
  ynsyellowpeaorganic,
} from "../../../assets/images/photos/products-img";

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
    price: "$7.90/pound",
  },
  {
    id: 2,
    img: oilseedRadish,
    type: types.brassicas,
    title: "Oilseed Radish",
    price: "$10.55/pound",
  },
  {
    id: 3,
    img: purpleTop,
    type: types.brassicas,
    title: "Purple Top Forge Turnips",
    price: "$9.75/pound",
  },
  {
    id: 4,
    img: mightyMustard,
    type: types.brassicas,
    title: "Mighty Mustard Pacific Gold",
    price: "$11.25/pound",
  },
];

// lines

const coverCropMixes = [
  {
    id: 1,
    img: fallgreen,
    type: types.brassicas,
    title: "Fall Green Manure Mix",
    price: "$9.70/pound",
  },
  {
    id: 2,
    img: springgreen,
    type: types.brassicas,
    title: "Spring Green Manure Mix",
    price: "$10.15/pound",
  },
  {
    id: 3,
    img: peasandoats,
    type: types.brassicas,
    title: "Peas and Oats Mix",
    price: "$7.60/pound",
  },
];

// lines

const grains = [
  {
    id: 1,
    img: winterrye,
    type: types.grains,
    title: "Winter Rye ",
    price: "$7.20/pound",
  },
  {
    id: 2,
    img: oats,
    type: types.grains,
    title: "Oats",
    price: "$7.50/pound",
  },
  {
    id: 3,
    img: buckwheatcommon,
    type: types.grains,
    title: "Buckwheat (Common)",
    price: "$7.50/pound",
  },
  {
    id: 4,
    img: royalhybrid,
    type: types.grains,
    title: "Royal Hybrid 1121 Sunflower",
    price: "$5.50/packet",
  },
  {
    id: 5,
    img: springwheat,
    type: types.grains,
    title: "Spring Wheat (Glenn)",
    price: "$7.75/pound",
  },
  {
    id: 6,
    img: barleyrobust,
    type: types.grains,
    title: "Barley (Robust)",
    price: "$7.80/pound",
  },
  {
    id: 7,
    img: barleyquest,
    type: types.grains,
    title: "Barley (Quest)",
    price: "$7.80/pound",
  },
  {
    id: 8,
    img: buckwheat,
    type: types.grains,
    title: "Buckwheat",
    price: "$6.75/pound",
  },
  {
    id: 9,
    img: springwheatlang,
    type: types.grains,
    title: "Spring Wheat (Lang-MN)",
    price: "Out of Stock",
  },
  {
    id: 10,
    img: springwheatbolles,
    type: types.grains,
    title: "Spring Wheat (Bolles)",
    price: "Out of Stock",
  },
  {
    id: 11,
    img: hullessoats,
    type: types.grains,
    title: "Hulles Oats",
    price: "$9.10/pound",
  },
];

// lines

const grasses_millets_sorghums = [
  {
    id: 1,
    img: ryegrass,
    type: types.grasses,
    title: "Ryegrass",
    price: "$7.45/pound",
  },
  {
    id: 2,
    img: hybridpearl,
    type: types.grasses,
    title: "Hybrid Pearl Millet",
    price: "$8.00/pound",
  },
  {
    id: 3,
    img: sudangrassbrownmid,
    type: types.grasses,
    title: "Sudangrass (Brown Mid RIb)",
    price: "$7.65/pound",
  },
  {
    id: 4,
    img: sudangrassbrownmidorganic,
    type: types.grasses + " (Organic)",
    title: "Sudangrass (Brown Mid RIb)",
    price: "$8.20 per 1/4pound",
  },
  {
    id: 5,
    img: sudahgrasspiper,
    type: types.grasses,
    title: "Sudangrass (Piper)",
    price: "$8.10 per 1/4pound",
  },
];

// lines

const legumes = [
  {
    id: 1,
    img: crimsonclover,
    type: types.legumes,
    title: "Crimson Clover",
    price: "$10.75/pound",
  },
  {
    id: 2,
    img: newzealandwhiteclover,
    type: types.legumes,
    title: "New Zealand White Clover",
    price: "$12.75/pound",
  },
  {
    id: 3,
    img: hairyvetch,
    type: types.legumes,
    title: "Hairy Vetch",
    price: "$12.80/pound",
  },
  {
    id: 4,
    img: fieldpeamaxum,
    type: types.legumes,
    title: "Field Peas (Maxum)",
    price: "$7.55/packet",
  },
  {
    id: 5,
    img: mediumredclover,
    type: types.legumes,
    title: "Medium Red Clover",
    price: "$14.60/pound",
  },
  {
    id: 6,
    img: mammothredclover,
    type: types.legumes,
    title: "Mammoth Red Clover",
    price: "$13.25/pound",
  },
  {
    id: 7,
    img: fieldpeas,
    type: types.legumes,
    title: "4010 Field Pea",
    price: "$8.75/pound",
  },
  {
    id: 8,
    img: summeralfalfa,
    type: types.legumes,
    title: "Summer Alfalfa",
    price: "$23.30/pound",
  },
  {
    id: 9,
    img: sweetclover,
    type: types.legumes,
    title: "Sweet Clover",
    price: "$12.80/pound",
  },
  {
    id: 10,
    img: dsadmiral,
    type: types.legumes,
    title: "DS Admiral Pea",
    price: "$7.60/pound",
  },
  {
    id: 11,
    img: ynsyellowpea,
    type: types.legumes + " (Organic)",
    title: "VNS Yellow Pea",
    price: "$7.30/pound",
  },
  {
    id: 12,
    img: ynsyellowpeaorganic,
    type: types.legumes,
    title: "VNS Yellow Pea",
    price: "$6.70/pound",
  },
];

export { types, brassicas, coverCropMixes, grains, legumes, grasses_millets_sorghums };
