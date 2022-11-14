import { useState } from "react"


export default function VideoPlaylist() {

  const [videoData, setVideoData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  return (
    <div className="main video-playlist column">
      <div className="date-range">
        <input type="date"/>
        <div className="dash"></div>
        <input type="date"/>
      </div>
      <div className="horizontal-divider"></div>
      <div className="container column y-scrollable">
        {
          videoData.map((data) => {
            return <div>
              <div className="container video-summary">
              <div className="video-image"></div>
              <div className="container column">
                <p>07/19/2022</p>
                <p>4:24:00 - 19:24:00</p>
                <p>05h50m42s</p>
                <h4>Camera: 1</h4>
              </div>
            </div>
            <div className="horizontal-divider"></div>
          </div>
          })
        }
      </div>
    </div>
  )
}
