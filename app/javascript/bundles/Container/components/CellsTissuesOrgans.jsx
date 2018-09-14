import PropTypes from "prop-types";
import React from "react";
import TextCellsTissuesOrgans from "./text/TextCellsTissuesOrgans";

const CellsTissuesOrgans = ({ }) => (
  <div>

    <div class="fond">

      <div class="button-flip">
        <a class="active" href="#text">
          <button type="button" class="btn" href="#text">More info</button>
        </a>

      </div>

    </div>

    <section id="animation">
      <div className="cell">
        <div className="organelle-container">

          <div className="nucleus">
            <div className="nucleulus"></div>
          </div>

          <div className="mitochondria" id="mito1">
            <svg viewBox="0 0 60 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,20 Q55,5 30,20 T30,30 t0,10 5,10 t5,5 5,50" fill="none" stroke="#EE7600" strokeWidth="4" />
            </svg>
          </div>

          <div className="mitochondria" id="mito2">
            <svg viewBox="0 0 60 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,20 Q55,5 30,20 T30,30 t0,10 5,10 t5,5 5,50" fill="none" stroke="#EE7600" strokeWidth="4" />
            </svg>
          </div>

          <div className="mitochondria" id="mito3">
            <svg viewBox="0 0 60 100" preserveAspectRatio="xMinYMin" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,20 Q55,5 30,20 T30,30 t0,10 5,10 t5,5 5,50" fill="none" stroke="#EE7600" strokeWidth="4" />
            </svg>
          </div>


          <div className="lysosome-box">
            <div className="lysosome"></div>
          </div>

          <div className="lysosome-box" id="box1">
            <div className="lysosome"></div>
          </div>

          <div className="lysosome-box" id="box2">
            <div className="lysosome"></div>
          </div>

          <div className="cytoskeleton-green">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path className="cytogreen1" d="M65 180 H 130" stroke="green" fill="transparent" strokeWidth="3" />
              <path className="cytogreen1" d="M65 185 H 130" stroke="green" fill="transparent" strokeWidth="3" />
              <path className="cytogreen2" d="M200 250 H 280" stroke="green" fill="transparent" strokeWidth="3" />
              <path className="cytogreen2" d="M200 255 H 280" stroke="green" fill="transparent" strokeWidth="3" />
              <path className="cytogreen3" d="M260 90 V 150" stroke="green" fill="transparent" strokeWidth="3" />
              <path className="cytogreen3" d="M265 90 V 150" stroke="green" fill="transparent" strokeWidth="3" />
            </svg>
          </div>

          <div className="cytoskeleton-blue">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 30 Q 52.5 10, 95 50 T 130 80" stroke="blue" fill="transparent" strokeWidth="4" />
              <path d="M30 50 Q 42.5 30, 85 60 T 120 100" stroke="blue" fill="transparent" strokeWidth="4" />
            </svg>
          </div>

          <div className="cytoskeleton-blue2">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 30 Q 52.5 10, 95 50 T 130 80" stroke="blue" fill="transparent" strokeWidth="4" />
              <path d="M30 50 Q 42.5 30, 85 60 T 120 100" stroke="blue" fill="transparent" strokeWidth="4" />
            </svg>
          </div>

          <div className="golgi"></div>

        </div>
      </div>

      <div className="tissue-container">
        <div className="tissue"></div>
      </div>

      <div className="organ"></div>
      <div className="organ-system"></div>

    </section>

    <TextCellsTissuesOrgans />
  </div>
);

export default CellsTissuesOrgans;
