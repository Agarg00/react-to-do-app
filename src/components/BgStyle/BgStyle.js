import React,{useState} from "react";
import ParticlesBg from "particles-bg";
import './BgStyle.css'

const BgStyle = () => {
    const [style, setStyle] = useState('cobweb')
    return(
        <div className="main">
            <div className="style dib f5 pa2">
                <label htmlFor="types">Choose a background animation type:</label>
                <select className="main-bg" name="types" id="types">
                    <option value="cobweb">cobweb</option>
                    <option value="fountain">fountain</option>
                    <option value="ball">ball</option>
                    <option value="color">color</option>
                    <option value="lines">lines</option>
                    <option value="thick">thick</option>
                    <option value="circle">circle</option>
                    <option value="polygon">polygon</option>
                    <option value="square">square</option>
                    <option value="tadpole">tadpole</option>
                    <option value="random">random</option>
                </select>
                <div className="pt2 tl pl0">
                    <button className="main-bg"
                    onClick={() => {
                        let value = document.getElementById('types').value;
                        setStyle(value);
                    }}>Chnage</button>
                    <ParticlesBg type={style} bg={true} />
                </div>
            </div>
        </div>
    )
}

export default BgStyle;