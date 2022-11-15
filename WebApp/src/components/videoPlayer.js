import { BsFillVolumeUpFill, BsPlayFill, BsFillPauseFill } from "react-icons/bs"
import { AiFillBackward } from "react-icons/ai"
import { FiDownload } from "react-icons/fi"
import { useRef } from "react"

export default function VideoPlayer({src}) {

  const videoRef = useRef(null)

  return (
    <div data-testid="player" className="main video-player-section">
      <div className="video-player">
        <video ref={videoRef} className="video" controls
          src={src}
          autoPlay={true}
          loop={true}
          type='video/mp4'>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
