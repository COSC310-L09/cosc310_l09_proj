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
      time: "7:30:03 - 17:38:44", // From DB
      duration: "10h08m41s", // From DB
      camera: "4", // From DB
      src: "demo-video-1.mp4", // From DB
      thumbnail: "demo-video-1-thumbnail.png" // From DB
    },
    {
      date: "07/20/2022",
      time: "4:24:00 - 08:14:00",
      duration: "03h50m00s",
      camera: "2",
      src: "demo-video-2.mp4",
      thumbnail: "demo-video-1-thumbnail.png"
    },
    {
      date: "07/21/2022",
      time: "4:04:00 - 19:34:30",
      duration: "05h50m30s",
      camera: "3",
      src: "demo-video-3.mp4",
      thumbnail: "demo-video-1-thumbnail.png"
    },
    {
      date: "07/22/2022",
      time: "2:24:00 - 19:24:00",
      duration: "17h00m00s",
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