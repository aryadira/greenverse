import { infraGreen1, infraGreen2, irrigation1, irrigation2, farming1, farming2, agriPlant1, agriPlant2 } from "../../../assets/img";

export const displayAll = [
  {
    id: 1,
    title: "Green Infrastructure",
    link: "/services/green-infrastructure",
    img: [
      {
        id: 1,
        path: infraGreen1,
        title: "Parks and urban forest",
        desc: "Stone bridge over sidewalk in park",
      },
      {
        id: 2,
        path: infraGreen2,
        title: "Wetlands and constructed",
        desc: "Plantation of Rice Growing on Field",
      },
    ],
  },

  {
    id: 2,
    title: "Smart Irrigation Technology",
    link: "/services/smart-irrigation",
    img: [
      {
        id: 1,
        path: irrigation1,
        title: "New controllers",
        desc: "Soil Moisture Sensor Controllers",
      },
      {
        id: 2,
        path: irrigation2,
        title: "Add-on sensors",
        desc: "Rain and Freeze Sensors",
      },
    ],
  },

  {
    id: 3,
    title: "Agriculture Plantation",
    link: "/services/agriculture-plantation",
    img: [
      {
        id: 1,
        path: agriPlant1,
        title: "New controllers",
        desc: "Soil Moisture Sensor Controllers",
      },
      {
        id: 2,
        path: agriPlant2,
        title: "Add-on sensors",
        desc: "Rain and Freeze Sensors",
      },
    ],
  },

  {
    id: 4,
    title: "Vertical Farming Solutions",
    link: "/services/vertical-farming",
    img: [
      {
        id: 1,
        path: farming1,
        title: "Controlled-environment agriculture in vertical farming",
        desc: "Artificial lighting",
      },
      {
        id: 2,
        path: farming2,
        title: "Controlled-environment agriculture in vertical farming",
        desc: "Temperature and climate control",
      },
    ],
  },
];
