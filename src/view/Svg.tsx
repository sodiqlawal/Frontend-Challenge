import React from "react";
import { Rect, Circle, Ellipse, Polygon, Polyline } from "../component/Shapes";
import SwitchValue from "../util/SwitchValue";
import { TFormData } from "../types/index";

const initialPoints = (values: TFormData) =>
  SwitchValue(values.sides?.displayName!, {
    10: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3} ${values.from4} ${values.to4} ${values.from5} ${values.to5} ${values.from6} ${values.to6} ${values.from7} ${values.to7} ${values.from8} ${values.to8} ${values.from9} ${values.to9} ${values.from10} ${values.to10}`,
    9: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3} ${values.from4} ${values.to4} ${values.from5} ${values.to5} ${values.from6} ${values.to6} ${values.from7} ${values.to7} ${values.from8} ${values.to8} ${values.from9} ${values.to9}`,
    8: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3} ${values.from4} ${values.to4} ${values.from5} ${values.to5} ${values.from6} ${values.to6} ${values.from7} ${values.to7} ${values.from8} ${values.to8} `,
    7: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3} ${values.from4} ${values.to4} ${values.from5} ${values.to5} ${values.from6} ${values.to6} ${values.from7} ${values.to7}`,
    6: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3} ${values.from4} ${values.to4} ${values.from5} ${values.to5} ${values.from6} ${values.to6}`,
    5: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3} ${values.from4} ${values.to4} ${values.from5} ${values.to5} `,
    4: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3} ${values.from4} ${values.to4}`,
    3: `${values.from1} ${values.to1} ${values.from2} ${values.to2} ${values.from3} ${values.to3}`,
    default: "",
  });

type TSvgProps = {
  values: TFormData;
};

const Svg = ({ values }: TSvgProps) => {
  return (
    <svg width="100%" height="75vh" style={{ background: "#f4f4f4" }}>
      {values.shape?.name === "Rectangle" && (
        <Rect
          width={`${values.width}px`}
          height={`${values.height}px`}
          x="50"
          y="50"
          stroke={values.borderColor}
          fill={values.color}
        />
      )}

      {values.shape?.name === "Square" && (
        <Rect
          width={`${values.length}px`}
          height={`${values.length}px`}
          x="50"
          y="50"
          stroke={values.borderColor}
          fill={values.color}
        />
      )}

      {values.shape?.name === "Circle" && (
        <Circle
          cx="200"
          cy="200"
          r={values.radius}
          strokeWidth="1"
          stroke={values.borderColor}
          fill={values.color}
        />
      )}

      {values.shape?.name === "Ellipse" && (
        <Ellipse
          cx="200"
          cy="200"
          rx={values.xRadius}
          ry={values.yRadius}
          strokeWidth="1"
          stroke={values.borderColor}
          fill={values.color}
        />
      )}

      {values.shape?.name === "Polygon" && (
        <Polygon
          strokeWidth="1"
          stroke={values.borderColor}
          fill={values.color}
          points={initialPoints(values)}
        />
      )}

      {values.shape?.name === "Polyline" && (
        <Polyline
          strokeWidth="1"
          stroke={values.borderColor}
          fill={values.color}
          points={initialPoints(values)}
        />
      )}
    </svg>
  );
};

export default Svg;
