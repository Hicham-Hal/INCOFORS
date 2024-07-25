import { advantages } from "../../../../../data";
import './thirdSection.css';
const ThirdSection = () => {
  return (
    <section className="third-section-home">
        <div className="content-third-section">
            <h2>Pourquoi nos formations ?</h2>
            <div className="advantages-all">
                    {advantages.map((item) => {
                        const {id , image , text} = item;
                        return(
                            <div className="adv-each" key={id}>
                                <div className="img-cadre-adv">
                                    <img src={image} />
                                </div>
                                <p>{text}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    </section>
  )
}

export default ThirdSection