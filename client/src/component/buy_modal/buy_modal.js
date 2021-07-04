import './buy_modal.css'
import React, { useState } from 'react';
import { open_camera_modal } from '../camera_modal/camera_modal'
import { validPhoneNumber, validName, validMailAddress, validFile } from './../../share/validation'
import {buy} from './../../share/server/buy'

const buy_noDisplay = () => {
  document.getElementById('buy_modal').style.display = 'none'
}
export const open_buy_modal = () => {
  document.getElementById('buy_modal').style.display = 'block'
}


function BuyModal() {

  const [errors, setErrors] = useState([false, false, false, false, false])
  const [messagge, setMessagge] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (<>
    <div id="buy_modal" className="modal">
      <span onClick={buy_noDisplay} className="close">×</span>
      <form className="modal-content" action="/action_page.php">

        <div className="container-Buy_Modal">
          {!isSubmitted && <div>
            <br />
            <div className="form-group">
              <input type="text" className="form-control" id="nameBM" placeholder="שם" onChange={(e) => {
                let newErros = errors.slice()
                newErros[0] = validName(e.target.value);
                setErrors(newErros);
              }} />
              <div className="invalid"> {errors[0] ? '' : '⚠השם אינו תקין'} </div>
            </div>
            <br />
            <div className="form-group">
              <input type="text" className="form-control" id="addressBM" placeholder="כתובת" onChange={(e) => {
                let newErros = errors.slice()
                newErros[1] = validName(e.target.value);
                setErrors(newErros);
              }} />
              <div className="invalid"> {errors[1] ? '' : '⚠הכתובת אינה תקינה'} </div>
            </div>
            <br />
            <div className="form-group">
              <input type="email" className="form-control" id="mailBM"placeholder="מייל" onChange={(e) => {
                let newErros = errors.slice()
                newErros[2] = validMailAddress(e.target.value);
                setErrors(newErros);
              }} />
              <div className="invalid"> {errors[2] ? '' : '⚠המייל אינו תקין'} </div>
            </div>
            <br />
            <div className="form-group">
              <input type="tel" className="form-control" id="phoneBM"placeholder="טלפון" onChange={(e) => {
                let newErros = errors.slice()
                newErros[3] = validPhoneNumber(e.target.value);
                setErrors(newErros);
              }} required />
              <div className="invalid">
                {errors[3] ? '' : '⚠המספר אינו תקין'}
              </div>
            </div>

            <div className="col-auto">
              <div className="mb-2">
                <input className="form-check-input" type="checkbox" id="checkboxBM" />
                <label className="form-check-label" htmlFor="autoSizingCheck">
                  ברצוני לקבל צלצול לפני המסירה
        </label>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col">
                <label htmlFor="formGroupExampleInput2">מספר בעין ימין (אופציונאלי)</label>
                <input type="number" className="form-control" placeholder="ימין" />
              </div>

              <div className="col">
                <label htmlFor="formGroupExampleInput2">מספר בעין שמאל (אופציונאלי)</label>
                <input type="number" className="form-control" placeholder="שמאל" />
              </div>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">צרף/פי את בדיקת הראיה שלך</label>
              <label className="bi bi-upload">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
                <input type="file" accept='.pdf,.jpg,.png,.docx' onChange={(e) => {
                  let newErros = errors.slice()
                  newErros[4] = validFile(e.target.value);
                  setErrors(newErros);
                }} />
              </label>
              <div className="invalid">
                {errors[4] ? '' : '⚠העלה קובץ'}
              </div>
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">הערות נוספות: (אופציונאלי)</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

          </div>}
          <br />
          <div className='messagge'>{messagge}</div>
          <br />
          <div className="underButtons">
            <button type="button" onClick={() => { buy_noDisplay(); open_camera_modal() }} className="goBack_b">מדידה</button>

            <button type="button" onClick={buy_noDisplay} className="goToHome_b">חזרה</button>

            {!isSubmitted && <button type="button" className="goBack_b" onClick={() => {
              for (let index = 0; index < 4; index++) {
                if (!errors[index]) { setMessagge('אחד הפרטים שגוי.'); return }
              }
              setMessagge('הפרטים התקבלו בהצלחה! ההזמנה תישלח לביתך בתוך 24 שעות בעז"ה. קוד ההזמנה נשלח אליך למייל, בשביל לבדוק את סטטוס ההזמנה יש ללחוץ על "ברור סטטוס הזמנה" ולהכניס את הקוד. יש לשלם במזומן לשליח')
              setIsSubmitted(true);
buy();
            }}>
              אישור
              </button>}
              {isSubmitted && <a href="/StatusCheck"><button type="button"className="goBack_b">
              ברור סטטוס הזמנה
              </button></a>}

          </div>
        </div>
      </form>
    </div>

  </>
  );
}

export default BuyModal