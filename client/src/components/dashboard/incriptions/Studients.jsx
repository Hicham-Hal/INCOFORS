import img from '../../../../public/images/fW.png';
import { studients } from '../../../data';
import './inscriptions.css';
const Studients = () => {
  return (
    <section className='studients'>
        <div className='content-studient'>
        <div className="iscriptions-header">
            <h1>inscription</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Accusantium esse aliquid, illo ex id numquam nobis 
                necessitatibus ipsum dignissimos incidunt.
            </p>
        </div>
        <div className='content-inscriptions-details'>
        {studients.map((x)=>{
            const{ name , username , email } = x;
            return(
                
                <div className="inscriptios-details">
                    <div className='identity'>
                        <div className='identity-img'>
                            <img src={img} alt=""/>
                        </div>
                        <h3>{name} {username}</h3>
                    </div>
                    <div className='email-student'>
                        <h3>{email}</h3>
                    </div>
                    <div className='studients-buttons'>
                        <button className='view-studient'>View</button>
                        <button className='delete-studient'>Delete</button>
                    </div>
                </div>
            )
    })}
        </div>
        </div>
    </section>
  )
}

export default Studients