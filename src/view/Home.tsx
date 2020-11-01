import React, { useEffect, useState } from "react";
import { shapeList, polygonNumbers } from "../config/constant";
import { TShapes, TFormData, TPolygonSides } from "../types";
import { Formik, Form } from "formik";
import { MySelect, MyField } from "../component/Form";
import Coordinate from "../component/Coordinate";
import Svg from "./Svg";

const Home = () => {
  const [initialValues, setValues] = useState<TFormData>({
    id: 0,
    shape: null,
    width: "300",
    height: "150",
    radius: "100",
    color: "",
    borderColor: "",
    length: "100",
    xRadius: "150",
    yRadius: "100",
    points: "",
    sides: { name: "Three", displayName: "6" },
    from1: "150",
    from2: "258",
    from3: "258",
    from4: "150",
    from5: "42",
    from6: "42",
    from7: "",
    from8: "",
    from9: "",
    from10: "",
    to1: "75",
    to2: "137.5",
    to3: "262.5",
    to4: "325",
    to5: "262.6",
    to6: "137.5",
    to7: "",
    to8: "",
    to9: "",
    to10: "",
  });

  const data: TFormData[] = JSON.parse(localStorage.getItem("data")!);
  let idList: Array<number> = [];
  data?.map((dat) => idList.push(dat.id!));
  const lastIndex = data ? Math.max(...idList) : 0;

  const [isIndex, setIndex] = useState<number>(0);
  const [isLastIndex, setLastIndex] = useState<number>(lastIndex);

  useEffect(() => {
    setIndex(lastIndex);
  }, []);

  // persist current state data using local storage
  const persistCurrent = (arg: TFormData) => {
    setTimeout(() => {
      localStorage.setItem("currentData", JSON.stringify(arg));
    }, 500);
  };

  // persist old data using local storage
  const persistor = (value: TFormData) => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", "[]");
    }
    let existing: TFormData[] = JSON.parse(localStorage.getItem("data")!);

    setLastIndex((index) => index + 1);
    console.log(isIndex);
    value.id = isLastIndex;

    existing.push(value);
    localStorage.setItem("data", JSON.stringify(existing));
  };

  // updating state with persisted data on reload
  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", "[]");
    }

    const storeData: TFormData = JSON.parse(
      localStorage.getItem("currentData")!
    );

    if (storeData) {
      setValues(storeData);
    }
  }, []);

  // remove first five data, if storage data is more than 100 and clear storage after a day
  useEffect(() => {
    if (data && data.length > 100) {
      data.splice(0, 5);
      localStorage.setItem("data", JSON.stringify(data));
    }
    const day = 1000 * 60 * 60 * 24;
    setTimeout(() => {
      localStorage.removeItem("data");
    }, day);
  }, [data]);

  // going back to previous data from localStorage
  const previous = () => {
    if (data && data.length > 0) {
      const current = data.find((dat) => dat.id === isIndex);
      const currentIndex = data.indexOf(current!);
      setIndex((index) => index - 1);
      setValues(data[currentIndex]);

      if (currentIndex === 0 || isIndex === 0) {
        setIndex(lastIndex);
      }
    }
  };

  return (
    <div className="home">
      <p className="back" onClick={() => previous()}>
        <span>&larr;</span> Back
      </p>
      <h2 className="title">Draw selected shape</h2>
      <Formik<TFormData>
        initialValues={initialValues}
        enableReinitialize
        onSubmit={() => {}}
      >
        {({ values }) => {
          // if (values.sides) {
          //   updateState(values);
          // }
          return (
            <div className="row">
              <Form className="form col-md-4 col-sm-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10 col-sm-12">
                    <label htmlFor="shape">Shapes</label>
                    <MySelect<TShapes>
                      name="shape"
                      options={Object.values(shapeList)}
                      getName={(option) => option.name}
                      getValue={(option) => option.name}
                      onChange={() => persistor(values)}
                      className="custom-select field"
                      id="shape"
                      placeholder="Select shapes"
                    />
                  </div>
                  {values.shape?.name === "Rectangle" && (
                    <div className="col-md-10 col-sm-12 mt-2 mb-3">
                      <label htmlFor="width">Width</label>
                      <MyField
                        name="width"
                        type="number"
                        id="width"
                        placeholder="Input width"
                        className="field form-control"
                      />
                    </div>
                  )}

                  {values.shape?.name === "Rectangle" && (
                    <div className="col-md-10 col-sm-12 mt-2 mb-3">
                      <label htmlFor="height">Height</label>
                      <MyField
                        name="height"
                        type="number"
                        id="height"
                        placeholder="Input height"
                        className="field form-control"
                      />
                    </div>
                  )}

                  {values.shape?.name === "Square" && (
                    <div className="col-md-10 col-sm-12 mt-2 mb-3">
                      <label htmlFor="length">Length</label>
                      <MyField
                        name="length"
                        type="number"
                        id="length"
                        placeholder="Input length"
                        className="field form-control"
                      />
                    </div>
                  )}

                  {values.shape?.name === "Circle" && (
                    <div className="col-md-10 col-sm-12 mt-2 mb-3">
                      <label htmlFor="circle">Radius</label>
                      <MyField
                        name="radius"
                        type="number"
                        id="radius"
                        placeholder="Input radius"
                        className="field form-control"
                      />
                    </div>
                  )}

                  {values.shape?.name === "Ellipse" && (
                    <div className="col-md-10 col-sm-12 mt-2 mb-3">
                      <label htmlFor="xRadius">X-Radius</label>
                      <MyField
                        name="xRadius"
                        type="text"
                        id="xRadius"
                        placeholder="Input x-Radius"
                        className="field form-control"
                      />
                    </div>
                  )}

                  {values.shape?.name === "Ellipse" && (
                    <div className="col-md-10 col-sm-12 mt-2 mb-3">
                      <label htmlFor="yRadius">Y-Radius</label>
                      <MyField
                        name="yRadius"
                        type="number"
                        id="yRadius"
                        placeholder="Input y-Radius"
                        className="field form-control"
                      />
                    </div>
                  )}

                  {["Polygon", "Polyline"].includes(values.shape?.name!) && (
                    <div className="col-md-10 col-sm-12 mt-2 mb-3">
                      <label htmlFor="sides">Number of sides</label>
                      <MySelect<TPolygonSides>
                        name="sides"
                        options={Object.values(polygonNumbers)}
                        getName={(option) => option.displayName}
                        getValue={(option) => option.displayName}
                        className="custom-select field"
                        id="sides"
                        placeholder="Select number of sides"
                      />
                    </div>
                  )}

                  {["Polygon", "Polyline"].includes(values.shape?.name!) && (
                    <div className="row col-md-10 col-sm-12 mt-2 mb-3">
                      <Coordinate sides={Number(values.sides?.displayName)} />
                    </div>
                  )}

                  <div className="col-md-10 col-sm-12 mt-2 mb-3">
                    <label htmlFor="color">Background color</label>
                    <MyField
                      name="color"
                      type="color"
                      id="color"
                      className="field form-control"
                    />
                  </div>
                  <div className="col-md-10 col-sm-12 mt-2 mb-3">
                    <label htmlFor="borderColor">Border color</label>
                    <MyField
                      name="borderColor"
                      type="color"
                      id="borderColor"
                      className="field form-control"
                    />
                  </div>
                </div>
              </Form>
              <div className="view-shape col-md-8 col-sm-12">
                <Svg values={values} />
              </div>
              {persistCurrent(values)}
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Home;
