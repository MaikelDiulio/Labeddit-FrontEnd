import React from 'react'
import { ContainerNotification } from './BarraDeNotification.Styled'
import hora from "../../assets/img/9.41.png"
import wifi from "../../assets/img/wifi.png"
import batery from "../../assets/img/batery.png"
import rede from "../../assets/img/light.png"

function BarraDeNotification() {
  return (
    <ContainerNotification>
        <div><img src={hora}/></div>
        <div>
            <img src={wifi}/>
            <img src={rede}/>
            <img src={batery}/>
        </div>
        
    </ContainerNotification>
  )
}

export default BarraDeNotification