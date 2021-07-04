import './camera_modal.css';
import React from 'react';
import WebcamCapture from './../WebcamCapture/WebcamCapture'
import BuyModal, { open_buy_modal } from './../buy_modal/buy_modal'
import { useEffect, useState } from 'react';

const Camera_noDisplay = () => {
  document.getElementById('camera_modal').style.display = 'none'
}
export const open_camera_modal = () => {
  document.getElementById('camera_modal').style.display = 'block'
}


function Camera_Mmodal(props) {
  const [id, setId] = useState();

  useEffect(() => {
    setId(props.id);
  }, [props.id])

  return (<>
    <BuyModal />
    <div id="camera_modal" className="modal">
      <span onClick={Camera_noDisplay} className="close">×</span>
      <form className="modal-content" action="/action_page.php">
        <div className="container-Camera_Mmodal">
          <WebcamCapture id={id} />
          <div className="underButtons">
            <button type="button" onClick={() => { Camera_noDisplay(); open_buy_modal() }} className="goBack_c">קניה</button>
            <button type="button" onClick={Camera_noDisplay} className="goToHome_c">חזרה</button>
          </div>
        </div>
      </form>
    </div>
  </>
  );
}

export default Camera_Mmodal