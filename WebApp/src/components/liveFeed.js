import { useRef } from "react"



export default function LiveFeed() {
  const videoRef = useRef(null)

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      console.log(stream)
      videoRef.current.srcObject = stream
      videoRef.current.play()
    })
  }

  return (
    <div data-testid="live-feed" className="container gap-20 space-between fill">
      <div className="main video-player-section">
        <div className="video-player">
          <video ref={videoRef} className="video" autoPlay>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

