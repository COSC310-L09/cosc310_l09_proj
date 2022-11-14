import VideoPlayer from "./videoPlayer";
import VideoPlaylist from "./videoPlaylist";

export default function DBStorage() {
  return (
    <div className="container gap-20 space-between fill">
      <VideoPlaylist/>
      <VideoPlayer/>
    </div>
  )
}
