import { useState, useEffect, useRef } from "react";
import VideoPlayer from "./videoPlayer";
import VideoPlaylist from "./videoPlaylist";

export default function DBStorage() {

  const [videoSrc, setVideoSrc] = useState("")
  const [videoData, setVideoData] = useState([
    {
      date: "07/19/2022", // From DB
      time: "7:30:03 - 17:38:44", // From DB
      duration: "10h08m41s", // From DB
      camera: "1", // From DB
      src: "demo-video-1.mp4", // From DB
      thumbnail: "demo-video-1-thumbnail.png" // From DB
    },
    {
      date: "07/20/2022",
      time: "4:24:00 - 08:14:00",
      duration: "03h50m00s",
      camera: "2",
      src: "demo-video-1.mp4",
      thumbnail: "demo-video-2-thumbnail.png"
    },
    {
      date: "07/21/2022",
      time: "4:04:00 - 19:34:30",
      duration: "05h50m30s",
      camera: "3",
      src: "demo-video-1.mp4",
      thumbnail: "demo-video-3-thumbnail.png"
    },
    {
      date: "07/22/2022",
      time: "2:24:00 - 19:24:00",
      duration: "17h00m00s",
      camera: "4",
      src: "demo-video-1.mp4",
      thumbnail: "demo-video-4-thumbnail.png"
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
