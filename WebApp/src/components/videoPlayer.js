import { BsFillVolumeUpFill, BsPlayFill, BsFillPauseFill } from "react-icons/bs"
import { AiFillBackward } from "react-icons/ai"
import { FiDownload } from "react-icons/fi"

export default function VideoPlayer() {
  return (
    <div className="main video-player-section">
      <div className="video-player">
        <video className="video" controls
          src="demo-video.mp4"
          autoPlay={true}
          loop={true}
          type='video/mp4'>
          Your browser does not support the video tag. 
        </video>
      </div>
    </div>
  )
}
