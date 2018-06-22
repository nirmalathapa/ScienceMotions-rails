import PropTypes from 'prop-types';
import React from 'react';
import Adenine from 'images/adenine.png'
import Cytosine from 'images/cytosine.png'
import Guanine from 'images/guanine.png'
import Thymine from 'images/thymine.png'

export default class Dna extends React.Component {
  static propTypes = {
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-className
  }



  render() {
    return (
        <div>
            <section id="top">
                <div className="fond">
                    <div id="forb" className="style_prevu_kit">
                    </div>
                    <div id="button"  className="button-flip">
                        <a id="button" className="active" href="#text">
                        </a>
                    </div>
                    <div id="forb" className="style_prevu_kit">
                    </div>
                </div>
                <img src={Cytosine} className="c"/>
                <img src={Thymine} className="t"/>
                <img src={Adenine} className="a"/>
                <img src={Guanine} className="g"/>
            </section>
            <section id="text">
            <div>
                <h1>Structure of DNA</h1>
                <p>Each gene in a molecule of DNA contains:</p>
                <p>_A different sequence of bases</p>
                <p>_Codes for a particular protein</p>
                <p>In DNA, two strands coil together to form a double helix. There are chemical cross-links between the two strands, formed by <span> pairs of bases</span></p>.
                <p>Each strand of DNA is made of chemicals called bases. Do not confuse these with the bases you meet when you study acids and alkalis in chemistry. There are four different types of bases, shown as <span> A, T, C and G</span>.</p>
                <p>Proteins are made in the cytoplasm of a cell, not in the nucleus. Genes cannot leave the nucleus, so a copy of the gene is needed. This copy is able to leave the nucleus to go into the cytoplasm so that proteins can be made by the cell.</p>
            </div>
        </section>
</div>
    );
  }
}
