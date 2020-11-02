# `Kudi Challenge`
> Kudi challenge for drawing desired shapes

## install

```bash
npm install formik bootstrap
npm install --save-dev @testing-library/react
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

## Intro

This challenge helps to draw your desired shapes

## Shapes

Their is a field with options for different shapes

`NOTE: These shapes are initially drawn but can be redraw to your taste`

### Usage

1
Rectangle
`has fields for selecting width and height`

2
Square
`has a field for selecting lenght `

3
Circle
`has a field for selecting radius`

4
Ellipse
`has fields for selecting x-radius and y-radius`

5
Polygon and Polyline
`has a field for selecting number of shapes which then determine the number of coordinates to be input for setting the attr *points*`

####

NOTE: points is used by polygon and polyline. It contain a set of coordinates differentiated by comma _,_, e.g for a 3-sided polygon,

```
<polygon points= '25 10, 10 40, 40 40' />
```
