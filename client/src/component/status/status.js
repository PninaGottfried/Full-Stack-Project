import './status.css'
import { StatusCheck } from './../../share/server/StatusCheck'
import React, { useState } from 'react'

function Status() {
    const [status, setstatus] = useState("-1")
    function massage(s) {
        switch (s) {
            case null: return "בטעינה......."
            case "-1": return ""
            case "0": return "מוכן"
            case "1": return "בדרך אליך!!"
            case "2": return "עכשיו מכינים לך את המשקפיים!"
            case "3": return "ההזמנה בתהליכי קבלה"
            default: return "אין מידע על ההזמנה המבוקשת. נסה להכניס קוד אחר"
        }
    }
    return (<>
        <div className="status-container">
            <input type='text' placeholder='קוד הזמנה' id="status-check"></input>
            <button type='submit' className="button" onClick={async () => { setstatus(null); setstatus(await StatusCheck()) }}>
                     חפש לי את המשקפיים שלי!
            </button>
            {status != -1 && <div className="status-massage">{massage(status)}</div>}
        </div>
    </>
    )

}

export default Status;
