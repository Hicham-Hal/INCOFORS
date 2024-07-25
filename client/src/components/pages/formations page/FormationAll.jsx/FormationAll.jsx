import { useEffect, useState } from 'react';
import customFetch from '../../../../utils/customFetch';
import { useRef} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { category } from "../../../../data";
import dataA from '../../../../dataA.json';
import '../Category/category.css';
import './formation.css';

const FormationAll = () => {
  const [dataa, setDataa] = useState(null);
  const [error, setError] = useState(null);
  const isSliderActive = category.length > 7;
  const tabsRef = useRef(null);
  const [data, setData] = useState(dataA);
  const [activeCategory, setActiveCategory] = useState('Show All');
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
    const updatedItems = category === 'Show All' ? dataA : dataA.filter(item => item.category === category);
    setData(updatedItems);
    setActiveCategory(category);
  };

  const toggleReadMore = (id) => {
    setReadMoreState((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await customFetch('/courses');
        setDataa(data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch data');
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(dataa)
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
            {category.map((item) => (
              <li
                key={item.id}
                className={activeCategory === item.category ? 'activedcat' : 'tab'}
              >
                <button onClick={() => filterItems(item.category)}>
                  {item.category}
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
          {data.map((item) => {
            const { id, ninscr, price, title, category, image } = item;
            const isReadMore = readMoreState[id];

            return (
              <div className='card-complet' key={id}>
                <img src={image} alt={title} />
                <div className='demi-carte'>
                  <p className='categorie-carte'>{category}</p>
                  <h3>
                    {isReadMore || title.length <= 21 ? (
                      title
                    ) : (
                      `${title.substring(0, 18)}..`
                    )}
                  </h3>
                  {title.length > 21 ? (
                    <button
                      style={{border:"none", fontSize:"12px", cursor:"pointer", background:'transparent', textAlign:'start', color: 'rgba(75, 52, 195, 1)', fontWeight:'700'}}
                      className='info-btn'
                      onClick={() => toggleReadMore(id)}
                    >
                      {isReadMore ? 'Lire moins' : 'Lire plus'}
                    </button>
                  ):(
                    <button
                      style={{border:"none", fontSize:"12px", cursor:"pointer", background:'transparent', textAlign:'start', color: 'rgba(75, 52, 195, 1)', fontWeight:'700', visibility:'hidden'}}
                      className='info-btn'
                      onClick={() => toggleReadMore(id)}
                    >
                      {isReadMore ? 'Lire moins' : 'Lire plus'}
                    </button>
                  )}
                  <div className='p-items'>

                  <p className='nombre-inscription'>{ninscr} inscriptions</p>
                  <div className='bas-carte'>
                    <h4>{price}DA</h4>
                    <Link to={`/formation/course/${id}`}><button>View</button></Link>
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
}

export default FormationAll;