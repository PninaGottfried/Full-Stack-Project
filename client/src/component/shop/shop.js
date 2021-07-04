import './shop.css'
import Glasses from './../glasses/glasses';
import { add_items } from './../../share/server/items'
import { useState, useEffect } from 'react';

import Camera_Mmodal, { open_camera_modal } from '../camera_modal/camera_modal'
import Buy_Modal from './../buy_modal/buy_modal'

function Shop() {

  const [id, setId] = useState(1);
  const [items, setItems] = useState(null);
  useEffect(async () => {
    let data = await add_items();
    setItems(data);
  }, [])

  return (<div>
    <Camera_Mmodal id={id} />
    <Buy_Modal />

    <div className="container-Shop">

      {items != null && items.map((item, index) => {
        return <div key={index} className="col-md-3 shadow-lg m-2"><Glasses key={index} cost={item.cost} id={item.id} onOpenCamera={() => {
          setId(item.id);
          open_camera_modal();
        }} /></div>
      })}
      {items == null && <div className="box">
        <h1>...Loading</h1>
      </div>}

    </div>



  </div>
  )
}

export default Shop








