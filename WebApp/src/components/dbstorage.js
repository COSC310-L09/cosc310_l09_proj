import { useState, useEffect, useRef } from "react";
import VideoPlayer from "./videoPlayer";
import VideoPlaylist from "./videoPlaylist";

export default function DBStorage() {

  const [videoSrc, setVideoSrc] = useState("")
  const [videoData, setVideoData] = useState([
    {
      date: "07/19/2022", // From DB
      time: "4:24:00 - 19:24:00", // From DB
      duration: "05h50m42s", // From DB
      camera: "1", // From DB
      src: "demo-video-1.mp4", // From DB
      thumbnail: "demo-video-1-thumbnail.png" // From DB
    },
    {
      date: "07/19/2022",
      time: "4:24:00 - 19:24:00",
      duration: "05h50m42s",
      camera: "1",
      src: "demo-video-2.mp4",
      thumbnail: "demo-video-1-thumbnail.png"
    },
    {
      date: "07/19/2022",
      time: "4:24:00 - 19:24:00",
      duration: "05h50m42s",
      camera: "1",
      src: "demo-video-3.mp4",
      thumbnail: "demo-video-1-thumbnail.png"
    },
    {
      date: "07/19/2022",
      time: "4:24:00 - 19:24:00",
      duration: "05h50m42s",
      camera: "1",
      src: "demo-video-4.mp4",
      thumbnail: "demo-video-1-thumbnail.png"
    }
  ])

  useEffect(() => {
    setVideoSrc(videoData[0].src)
  }, [])

  const handleChangeVideo = (src) => {
    setVideoSrc(src)
  }

  return (
    <div data-testid="db-storage" className="container gap-20 space-between fill">
      <VideoPlaylist changeVideo={handleChangeVideo} videoData={videoData}/>
      <VideoPlayer src={videoSrc}/>
    </div>
  )
}
