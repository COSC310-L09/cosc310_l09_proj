import { render, screen, cleanup } from "@testing-library/react"
import DBStorage from "../dbstorage.js"
import VideoPlayer from "../videoPlayer.js"
import VideoPlaylist from "../videoPlaylist.js"

test('DB Exists', () => {
  render(<DBStorage/>)
  const elem = screen.getByTestId('db-storage')
  expect(elem).toBeInTheDocument()
})

test('renders player with source', () => {
  render(<VideoPlayer src={"demo-video-1.mp4"}/>)
  const elem = screen.getByTestId('player')
  expect(elem).toBeInTheDocument()
})

test('renders player without source', () => {
  render(<VideoPlayer />)
  const elem = screen.getByTestId('player')
  expect(elem).toBeInTheDocument()
})

test('renders full playlist', () => {
  const data = [
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
  ]
  render(<VideoPlaylist videoData={data}/>)
  const elem = screen.getByTestId('playlist')
  expect(elem).toBeInTheDocument()
})

test('renders empty playlist', () => {
  const data = []
  render(<VideoPlaylist videoData={data}/>)
  const elem = screen.getByTestId('playlist')
  expect(elem).toBeInTheDocument()
})

test('renders playlist with incomplete data', () => {
  const data = []
  render(<VideoPlaylist videoData={data}/>)
  const elem = screen.getByTestId('playlist')
  expect(elem).toBeInTheDocument()
})