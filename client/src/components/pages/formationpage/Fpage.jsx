import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { array } from '../../../data.js';
import Footer from '../../footer/Footer.jsx';
import Navbar from '../../navbar/SecondNavbr.jsx';
import './pageformation.css';
const Fpage = () => {
    const { _id } = useParams();
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const course = array.find((item) => item._id === _id);
        setCourseData(course);
    }, [_id]);
    
    if (!courseData) {
        return <div>Loading...</div>;
    }
    console.log(courseData);

    const { name, category, price, level, image, description, schedule } = courseData;
  return (
    <>
        <Navbar/>
    <section className='main-section-solo'>
        <div className='content-solo-page'>
            
        <div className='img-for'>
            <img src={image} alt={name} />
            <div className='title-formation-first'>
                <h1>{name}</h1>
            </div>
        </div>
        <div className='main-section-solo-content'>
        <div className='formation-sts'>
            <div className='formation-info'>
                <h2>{name}</h2>
                <h3>Niveau: <span>{level}</span></h3>
                <h3>catégory: <span>{category}</span></h3>
                <p className='price-con'>Price: <span>{price}DA</span></p>
            </div>
            <div className='formation-desc'>
                <h2>Description</h2>
                <p>
                    {description}
                </p>
            </div>
            </div>
            <div className='planning'>
                <h2>Plan de formation</h2>
                <div className='planning-date-time'>
                    <div className='planning-date'>
                        <h3>Day</h3>
                        {schedule.map((item, index) => (
                            <p id='day-time-single' key={index}>{item.day}</p>
                        ))}
                    </div>
                    <div className='planning-time'>
                        <h3>Time</h3>
                        {schedule.map((item, index) => (
                            <p id='day-time-single' key={index}>{item.startTime} - {item.endTime}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
        <Footer/>
    </>
  )
}

export default Fpage;