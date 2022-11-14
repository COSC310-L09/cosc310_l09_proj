


export default function LiveFeed() {
  return (
    <div className="container fill">
      <div className="main video-player-section">
        <div className="video-player">
          <video width="750" height="500" controls >
            <source src="demo-video.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  )
}

