import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { array } from '../../../../../data';
import '../../Category/category.css';
import '../../formation.css';

const Formationseul = () => {
  const tabsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('Show All');
  const [dataa, setDataa] = useState(array);
  const [readMoreState, setReadMoreState] = useState({});

  const handlePrevClick = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const filterItems = (category) => {
    const updatedItems = category === 'Show All' ? array : array.filter(item => item.category === category);
    setDataa(updatedItems);
    setActiveCategory(category);
  };

  const toggleReadMore = (id) => {
    setReadMoreState((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Filter data based on level
  const filteredData = dataa.filter(item => item.level === 'eleve');

  // Extract unique categories from filteredData
  const uniqueCategories = Array.from(new Set(filteredData.map(item => item.category)));
  const isSliderActive = uniqueCategories.length >= 7;

  return (
    <section>
      <section className="category-section">
        <div className="wrapper">
          <div className={isSliderActive ? "icon left-icon" : "hide-icon"} onClick={handlePrevClick}>
            <IoIosArrowBack />
          </div>
          <ul className="tabs-box" ref={tabsRef}>
            <li className={activeCategory === 'Show All' ? 'activedcat' : 'tab'}>
              <button onClick={() => filterItems('Show All')}>Show All</button>
            </li>
            {uniqueCategories.map((category, index) => (
              <li 
                key={index}
                className={activeCategory === category ? 'activedcat' : 'tab'}
              >
                <button onClick={() => filterItems(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className={isSliderActive ? "icon right-icon" : "hide-icon"} onClick={handleNextClick}>
            <IoIosArrowForward />
          </div>
        </div>
      </section>
      <div className="formations-ever-section">
        <div className="formations-all-order">
          {filteredData.map((item) => {
            const { _id, level, name, price, category, image } = item;
            const isReadMore = readMoreState[_id];

            return (
              <div className='card-complet' key={_id}>
                <div className='img-card-demi-complete'>
                  <img src={image} alt={name} />
                </div>
                <div className='demi-carte'>
                  <p className='categorie-carte'>{category}</p>
                  <h3>
                    {isReadMore || name.length <= 21 ? (
                      name
                    ) : (
                      `${name.substring(0, 18)}..`
                    )}
                  </h3>
                  {name.length > 21 ? (
                    <button 
                      style={{border:"none", fontSize:"12px", cursor:"pointer", background:'transparent', textAlign:'start', color: 'rgba(75, 52, 195, 1)', fontWeight:'700'}} 
                      className='info-btn' 
                      onClick={() => toggleReadMore(_id)}
                    >
                      {isReadMore ? 'Lire moins' : 'Lire plus'}
                    </button>
                  ):(
                    <button 
                      style={{border:"none", fontSize:"12px", cursor:"pointer", background:'transparent', textAlign:'start', color: 'rgba(75, 52, 195, 1)', fontWeight:'700', visibility:'hidden'}} 
                      className='info-btn' 
                      onClick={() => toggleReadMore(_id)}
                    >
                      {isReadMore ? 'Lire moins' : 'Lire plus'}
                    </button>
                  )}
                  <div className='p-items'>
                    <p className='nombre-inscription'>{level}</p>
                    <div className='bas-carte'>
                      <h4>{price}DA</h4>
                      <Link to={`/formation/course/${_id}`}><button>View</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Formationseul;
