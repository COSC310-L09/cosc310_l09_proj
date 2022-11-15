import { render, screen, cleanup } from "@testing-library/react"
import LiveFeed from "../liveFeed.js"

test('Live-Feed Exists', () => {
  render(<LiveFeed/>)
  const elem = screen.getByTestId('live-feed')
  expect(elem).toBeInTheDocument()
})