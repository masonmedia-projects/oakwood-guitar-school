import React from 'react'

export default function Location() {
    return (
        <ul className="list-unstyled my-3">
            <li><span className="font-weight-bold">Phone • </span>416.732.0764</li>
            <li><span className="font-weight-bold">Email • </span> <a href="mailto:info@oakwoodguitarschool.com">info@oakwoodguitarschool.com</a></li>
            <li><span className="font-weight-bold">Address • </span>
            <a href="https://www.google.com/maps/place/113+Alberta+Ave,+Toronto,+ON+M6H+2S1/@43.6785295,-79.435167,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34796c431333:0x7e33b5abdcc0a799!8m2!3d43.6785295!4d-79.4329783">113 Alberta Avenue, Toronto, Ontario</a></li>
        </ul>
    )
}
