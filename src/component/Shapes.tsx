import React from "react";
import {
  TCircleProps,
  TRectProps,
  TEllipseProps,
  TPolygonProps,
} from "../types/index";

export const Rect = (props: TRectProps) => {
  return (
    <rect
      width={props.width}
      height={props.height}
      stroke={props.stroke}
      strokeWidth="1"
      x={props.x}
      y={props.y}
      fill={props.fill}
    />
  );
};

export const Circle = (props: TCircleProps) => {
  return (
    <circle
      cx={props.cx}
      cy={props.cy}
      r={props.r}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fill={props.fill}
    />
  );
};

export const Ellipse = (props: TEllipseProps) => {
  return (
    <ellipse
      cx={props.cx}
      cy={props.cy}
      rx={props.rx}
      ry={props.ry}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fill={props.fill}
    />
  );
};

export const Polygon = (props: TPolygonProps) => {
  return (
    <polygon
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fill={props.fill}
      points={props.points}
    />
  );
};

export const Polyline = (props: TPolygonProps) => {
  return (
    <polyline
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fill={props.fill}
      points={props.points}
    />
  );
};
