import { TShapes, TPolygonSides } from "../types/index";

type CRecord<T extends { name: string }> = Record<T["name"], T>;

export const shapeList: CRecord<TShapes> = {
  Rectangle: {
    name: "Rectangle",
    displayName: "Rectangle",
  },
  Square: {
    name: "Square",
    displayName: "Square",
  },
  Circle: {
    name: "Circle",
    displayName: "Circle",
  },
  Ellipse: {
    name: "Ellipse",
    displayName: "Ellipse",
  },
  Polygon: {
    name: "Polygon",
    displayName: "Polygon",
  },
  Polyline: {
    name: "Polyline",
    displayName: "Polyline",
  },
} as const;

export const polygonNumbers: CRecord<TPolygonSides> = {
  Three: {
    name: "Three",
    displayName: "3",
  },
  Four: {
    name: "Four",
    displayName: "4",
  },
  Five: {
    name: "Five",
    displayName: "5",
  },
  Six: {
    name: "Six",
    displayName: "6",
  },
  Seven: {
    name: "Seven",
    displayName: "7",
  },
  Eight: {
    name: "Eight",
    displayName: "8",
  },
  Nine: {
    name: "Nine",
    displayName: "9",
  },
  Ten: {
    name: "Ten",
    displayName: "10",
  },
} as const;
