import './error404.css'

function Error404() {
    
    return(
        <div className="err">
            <h2>Error 404</h2>
            <h5>אויש! הגעת לדף שאינו קיים!😱</h5>
            <button onClick={()=>window.history.back()}>חזרה לדף הקודם</button>
        </div>
    )
}

export default Error404

