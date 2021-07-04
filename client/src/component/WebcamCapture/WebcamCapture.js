import React from "react";
import Webcam from "react-webcam";
import './WebcamCapture.css'


function WebcamCapture(props) {
    const webcamRef = React.useRef(null);
 
    let image = require("./../../assests/images/imgX_"+props.id+".jpg");

    return (
    <>
            <div className="fullscreen-bg">
                <div className="overlay--blue">
                    <Webcam
                        
                        mirrored={true}
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                    />
                </div>
            </div>
            <div className='glasses' >
            <img alt="glasses"src={image.default}/>
            </div>
 
        </>
    );
};

export default WebcamCapture