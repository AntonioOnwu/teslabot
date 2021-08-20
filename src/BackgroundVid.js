import React from 'react'
// import classes from './BackgroundVideo.module.css'
import video from './FinalVid.mov'

const BackgroundVid = () => {
    const videoSource = video
    return (
        <div className ="App">
        <video autoPlay = "autoplay" loop ="loop" muted
        style = {{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%,-50%)",
            zIndex: "-1"
        }}>
            <source src ={videoSource} type = "video/mp4"/>
        </video>

        </div>
    )
}

export default BackgroundVid