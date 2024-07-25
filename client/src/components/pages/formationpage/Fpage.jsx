import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataA from '../../../dataA.json';
import Footer from '../../footer/Footer.jsx';
import Navbar from '../../navbar/SecondNavbr.jsx';
import './pageformation.css';
const Fpage = () => {
    const {id} = useParams();
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
    const course = dataA.find((item) => item.id === parseInt(id));
    setCourseData(course);
    }, [id]);


    if (!courseData) {
        return <div>Loading...</div>;
    }

    const { title, category, price, image, description } = courseData;
  return (
    <>
        <Navbar/>
    <section className='main-section-solo'>
        <div className='content-solo-page'>
            
        <div className='img-for'>
            <img src={image} alt="" />
            <div className='title-formation-first'>
                <h1>{title}</h1>
            </div>
        </div>
        <div className='main-section-solo-content'>
        <div className='formation-sts'>
            <div className='formation-info'>
                <h2>{title}</h2>
                <h3>Niveau: <span>étudiant</span></h3>
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
                        <p>Sunday</p>
                        <p>sunday</p>
                        <p>sunday</p>
                        <p>sunday</p>
                        <p>sunday</p>
                        <p>sunday</p>
                    </div>
                    <div className='planning-time'>
                        <h3>Time</h3>
                        <p>08:00 : 11:00</p>
                        <p>08:00 : 11:00</p>
                        <p>08:00 : 11:00</p>
                        <p>08:00 : 11:00</p>
                        <p>08:00 : 11:00</p>
                        <p>08:00 : 11:00</p>
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