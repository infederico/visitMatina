import { useEffect, useRef } from "react"

export default function VideoPlayer(props) {

    const { width, height, controls } = props;

    const cloudinaryRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        if(cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'dfnw2l08x'
        });
    },[])

    return(
        <video 
            ref={videoRef}
            data-cld-public-id="10000000_933032457273458_3142346642377468477_n_1_x6xujo"
            width={width}
            height={height}
            controls={controls}
            {...props}
        />
    )
}