import PropTypes from 'prop-types';
import React from 'react';
// import { circle, changeState, update } from '../../../packs/statesofmatter.js'
export default class StatesOfMatter extends React.Component {


  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-className
  }


  render() {
    return (
    <div>
      <div className="fond">
          <div id="forb" className="style_prevu_kit">
          <a id="forb" className="active" href="index.html"/>   </div>
          <div id="button" className="button-flip">
          <a id="button" className="active" href="#text"/>
          <button type="button" className="btn" href="#text">More info</button>
      </div>
      <div id="forb" className="style_prevu_kit">
          <a id="forb" className="active" href="index.html"/></div>
      </div>
      <div id="visual">
        <br />
        <div className="buttons" >
          <button id="solid" onClick="changeState(500)">SOLID</button>
          <button id="liquid" onClick="changeState(200)">LIQUID</button>
          <button id="gas" onClick="changeState(50)">GAS</button>
        </div>
        <canvas id="myCanvas" width="1000" height="1000">
        </canvas>
       {/*<style>
         canvas {
          padding-left: 0;
          padding-right: 0;
          margin-left: auto;
          margin-right: auto;
          display: block;
          width: 800px;
      }
    </style>
    <script type="text/javascript" src="./lesson1.js"></script>*/}

      </div>
      <div id="text" >
        <h1> Characteristics Of Solids Liquids and Gases </h1>

        <table border = "0" align="center" className="table">
        <tbody>
          <tr>
            <th scope="col"> Characteristic </th>
            <th scope="col"> Solids </th>
            <th scope="col"> Liquids </th>
            <th scope="col"> Gases </th>
          </tr>
          <tr>
            <th scope="row" > Distance </th>
            <td> Particles are closely packed </td>
            <td> Particles are loosely packed </td>
            <td> Particles are very loosely packed </td>
          </tr>
          <tr>
            <th scope="row"> Shape and Volume </th>
            <td> Very rigid, has fixed shape and volume </td>
            <td> No fixed shape , but has fixed volume </td>
            <td> No fixed shape or volume, assumes shape of the container </td>
          </tr>
          <tr>
            <th scope="row" > Compressibility</th>
            <td> Incompressible </td>
            <td> Difficult to compress </td>
            <td> Easily Compressible </td>
          </tr>
          <tr>
            <th scope="row" > Density </th>
            <td> High density </td>
            <td> Lower than solids but higher than liquids </td>
            <td> Least density </td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
    );
  }
}
