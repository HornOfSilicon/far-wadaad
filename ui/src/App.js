import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import FarWadaadScript from '../../lib/FarWadaadScript'

const FarWadaad = () => {
  const startText = 'Xaggan hoose ku qor waxaad doontid';
  const fw = new FarWadaadScript();
  const [farWadaad, setFarWadaad] = useState(fw.parse(startText));

  const onChange = (event) => {
    const converter = new FarWadaadScript();
    const farWadaad = converter.parse(event.target.value);
    setFarWadaad(farWadaad);
  }

  return (
    <div>
      <section className="section" style={{
        minHeight: '00px'
      }}>

        <div className="container">
          <div className="content">
            <h1 className="header" >Far wadaad (Somali)</h1>
            <p dir="rtl" className="header-yellow">{farWadaad}</p>
            <div class="text-container">
              <textarea className="text" placeholder={startText} onChange={onChange.bind(this)}></textarea>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default FarWadaad;
