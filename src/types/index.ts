export const typeDefs = `
directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE
enum CacheControlScope {
  PUBLIC
  PRIVATE
}
"""
The \`Upload\` scalar type represents a file upload promise that resolves an
object containing \`stream\`, \`filename\`, \`mimetype\` and \`encoding\`.
"""
scalar Upload
`;

export interface TShapes {
  name: "Rectangle" | "Square" | "Circle" | "Ellipse" | "Polygon" | "Polyline";
  displayName: string;
}

export interface TPolygonSides {
  name: "Three" | "Four" | "Five" | "Six" | "Seven" | "Eight" | "Nine" | "Ten";
  displayName: string;
}

export type TRectProps = {
  width: string;
  height: string;
  x: string;
  y: string;
  fill: string;
  stroke: string;
};

export type TCircleProps = {
  cx: string;
  cy: string;
  r: string;
  strokeWidth: string;
  stroke: string;
  fill: string;
};

export type TEllipseProps = Omit<TCircleProps, "r"> & {
  rx: string;
  ry: string;
};

export type TPolygonProps = {
  fill: string;
  strokeWidth: string;
  points: string;
  stroke: string;
};

export interface TFormData {
  id?: number;
  shape: TShapes | null;
  width: string;
  height: string;
  radius: string;
  color: string;
  borderColor: string;
  length: string;
  xRadius: string;
  yRadius: string;
  points: string;
  sides: TPolygonSides | null;
  from1: string;
  from2: string;
  from3?: string;
  from4?: string;
  from5?: string;
  from6?: string;
  from7?: string;
  from8?: string;
  from9?: string;
  from10?: string;
  to1: string;
  to2: string;
  to3?: string;
  to4?: string;
  to5?: string;
  to6?: string;
  to7?: string;
  to8?: string;
  to9?: string;
  to10?: string;
}
