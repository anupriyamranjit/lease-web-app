
import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

function MyMap() {
const [hue, setHue] = useState(0)

  return (
    <Map height={300} defaultCenter={[43.466667, -80.516670]} defaultZoom={11}>
      <Marker width={50} anchor={[43.466667, -80.516670]} onClick={() => setHue(hue + 50)}/>
      <Marker width={50} anchor={[45.424721,-75.695000]} onClick={() => setHue(hue + 50)} />

    </Map>
  )
}

export default MyMap;