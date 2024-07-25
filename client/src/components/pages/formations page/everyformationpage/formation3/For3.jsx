import React from 'react';
import Footer from "../../../../footer/Footer";
import SecondNavbar from "../../../../navbar/SecondNavbr";
import '../../formation.css';
import FormationAll from "../../FormationAll.jsx/FormationAll";
import Header from './Header';

export const Formation = () => {
  return (
    <div className="formation-main-main">
      <SecondNavbar/>
      <Header/>
      <FormationAll />
      <Footer/>
    </div>
  )
}
export default Formation;