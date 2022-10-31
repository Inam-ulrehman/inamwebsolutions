import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { googleMapsData } from '../utils/data'
import styled from 'styled-components'

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => googleMapsData, [])

  return (
    <Wrapper>
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName='map-container'
      >
        <Marker position={center} />
      </GoogleMap>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .map-container {
    width: 100%;
    height: calc(100vh - 3.2rem);
    z-index: -1;
  }
`
