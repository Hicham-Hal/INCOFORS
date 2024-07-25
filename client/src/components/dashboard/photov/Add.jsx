import { IoMdImages } from "react-icons/io";
import { MdVideoCameraBack } from "react-icons/md";
import './add.css';
const Add = () => {
  return (
    <section className='adding-section'>
        <div className='adding-content'>
            <div className='adding-header'>
                <h1>Add Photos - Videos</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugiat molestiae totam distinctio illum? Repellat 
                </p>
            </div>
            <div>
            <form className="form-content-inputs" action="" method='post'>
                <div className="input-contents">
                    <div className="desc-adding">
                        <textarea type='text' placeholder='Add Description..' name='description'></textarea>
                    </div>
                    <div className="adding-input-content">
                        <div className="addP">
                            <label htmlFor="add-1">
                                <div className="content-label-add">
                                    <span><IoMdImages/></span>
                                    <h3>Add Photo</h3>
                                </div>
                            </label>
                            <input type="file" name='image' id='add-1' className="input-add" style={{display:'none' , visibility:'hidden'}}/>
                        </div>
                        <div className="addP">
                            <label htmlFor="add-2">
                                <div className="content-label-add">
                                    <span><MdVideoCameraBack/></span>
                                    <h3>Add Video</h3>
                                </div>
                            </label>
                            <input type="file" name='video' id='add-2' className="input-add" style={{display:'none' , visibility:'hidden'}}/>
                        </div>
                    </div>
                    <button className="upload-pv-btn" type="submit">Send</button>
                </div>
            </form>
            </div>
        </div>
    </section>
  )
}

export default Add