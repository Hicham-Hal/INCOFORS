import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { courses } from '../../../../../data';
import image from '../../../../../images/fW.png';
import './fourthSection.css';
const FoSection = () => {

    const [readMoreState, setReadMoreState] = useState({});

        const toggleReadMore = (id) => {
            setReadMoreState((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
            }));
        };
        
  return (
    <section className='fourth-section-home'>
        <div className='content-section-four'>
            <div className='header-content-section-four'>
                <div className='section-four-title'>
                    <h2>Formations les plus demandés</h2>
                </div>
                <div className='section-four-link'>
                    <h4>
                        <NavLink to={'/formations'}>Voir tous</NavLink>
                    </h4>
                </div>
            </div>
            <div className='cards-formation-section-four'>
                {courses.map((item)=>{
                    const {id , ninscr , price , title , category} = item;
                    const isReadMore = readMoreState[id];
                    return(
                        <div className='card-formation-four' key={id}>
                            <img src={image} />
                            <div className='inf-card-formation-section-four'>
                                <p className='category-section-four'>{category}</p>
                                <h3>
                                    {isReadMore || title.length <= 21 ? (
                                    title
                                    ) : (
                                    `${title.substring(0, 18)}..`
                                    )}
                                </h3>
                                {title.length > 21 ? (
                                    <button 
                                    style={{border:"none", fontSize:"12px", cursor:"pointer", background:'transparent', textAlign:'start', color: 'rgba(75, 52, 195, 1)', fontWeight:'700' , marginLeft:"10px"}} 
                                    className='info-btn' 
                                    onClick={() => toggleReadMore(id)}
                                    >
                                    {isReadMore ? 'Lire moins' : 'Lire plus'}
                                    </button>
                                ):(
                                    <button 
                                    style={{visibility:'hidden', border:"none", fontSize:"12px", cursor:"pointer", background:'transparent', textAlign:'start', color: 'rgba(75, 52, 195, 1)', fontWeight:'700' , marginLeft:"10px"}} 
                                    className='info-btn' 
                                    onClick={() => toggleReadMore(id)}
                                    >
                                    {isReadMore ? 'Lire moins' : 'Lire plus'}
                                    </button>
                                )}
                                <p className='number-ins-section-four'>{ninscr} inscriptions</p>
                                <div className='bottom-card-section-four'>
                                    <h4>{price}DA</h4>
                                    <button><NavLink to={"/inscriptions"}>S'inscrir</NavLink></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default FoSection