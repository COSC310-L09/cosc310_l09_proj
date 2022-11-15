
export default function VideoPlaylist({changeVideo, videoData}) {

  return (
    <div data-testid="playlist" className="main video-playlist column">
      <div className="date-range">
        <input type="date"/>
        <div className="dash"></div>
        <input type="date"/>
      </div>
      <div className="horizontal-divider"></div>
      <div className="container column y-scrollable">
        {
          videoData.map((data, index) => {
            return <div key={index}>
              <div className="container video-summary" onClick={() => changeVideo(data.src)}>
              <div className="video-image" style={{backgroundImage: `url(${data.thumbnail})`}}></div>
              <div className="container column">
                <p>{data.date}</p>
                <p>{data.time}</p>
                <p>{data.duration}</p>
                <h4>Camera: {data.camera}</h4>
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
