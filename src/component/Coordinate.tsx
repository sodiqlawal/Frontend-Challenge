import React from "react";
import { MyField } from "./Form";

const Coordinate = (props: { sides: number }) => {
  const coordinates: React.ReactNode[] = [];

  for (let i = 1; i <= props.sides; i += 1) {
    coordinates.push(
      <div key={i}>
        <div className="number-title">Coordinate {i}</div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3 mt-2">
            <MyField
              name={`from${i}`}
              type="number"
              id="from"
              placeholder="From"
              className="field form-control"
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-3 mt-2">
            <MyField
              name={`to${i}`}
              type="number"
              id="to"
              placeholder="To"
              className="field form-control"
            />
          </div>
        </div>
      </div>
    );
  }

  return <>{coordinates}</>;
};

export default Coordinate;
