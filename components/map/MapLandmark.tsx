'use client'
import {
    LayersControl,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    
    useMapEvents
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';

const iconUrl =
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [20, 30],
});

type latlng = [number, number]
type LocationMarkerProps = {
    position: latlng | null
    setPosition: (position: latlng) => void
}

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
    const map = useMapEvents({
        click(e) {
            const newLocation: latlng = [e.latlng.lat, e.latlng.lng]
            setPosition(newLocation)
            map.flyTo(e.latlng)
        }
    })
    return position === null ? null : (
        <Marker position={position} icon={markerIcon}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const MapLandmark = ({
    location
}: {
    location?: { lat: number, lng: number }
}) => {
    const defaultLocation: latlng = [12.9179, 100.7797]

    const [position, setPosition] = useState< latlng | null >(null)
    console.log("position-->>", position)
    return (
        <>
            <h1 className='mb-2 mt-4 font-semibold'>Where are you?</h1>

            <input
                type='hidden'
                name='lat'
                value={position ? position[0] : ''} />

            <input
                type='hidden'
                name='lng'
                value={position ? position[1] : ''} />

            <MapContainer
                className='h-[50vh] rounded-lg relative z-0 mb-3'
                center={location || defaultLocation}
                zoom={12}
                scrollWheelZoom={true}>

                <Marker position={location || defaultLocation} icon={markerIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <LocationMarker position={position} setPosition={setPosition} />

                <LayersControl>

                    <LayersControl.BaseLayer name='Openstreetmap' checked>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name='CyclOSM' >
                        <TileLayer
                            attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases'
                            url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                </LayersControl>

            </MapContainer>
        </>
    )
}
export default MapLandmark