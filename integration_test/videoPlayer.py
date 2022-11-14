from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QHBoxLayout, QVBoxLayout, QStyle, QSlider, QFileDialog
from PyQt5.QtGui import QPalette
from PyQt5.QtMultimedia import QMediaPlayer, QMediaContent
from PyQt5.QtMultimediaWidgets import QVideoWidget
from PyQt5.QtCore import Qt, QUrl
import sys

class Window(QWidget):
  def __init__(self):
    super().__init__()
    
    self.setWindowTitle("VideoPlayer")
    self.setGeometry(610, 290, 700, 500)
    
    p = self.palette()
    p.setColor(QPalette.Window, Qt.gray)
    self.setPalette(p)
    
    self.createPlayer()
    
  def createPlayer(self):
    self.mediaPlayer = QMediaPlayer(None, QMediaPlayer.VideoSurface)
    videoWidget = QVideoWidget()
    
    self.openBtn = QPushButton('Open Video')
    self.openBtn.clicked.connect(self.openFile)
    
    self.playBtn = QPushButton()
    self.playBtn.setEnabled(False)
    self.playBtn.setIcon(self.style().standardIcon(QStyle.SP_MediaPlay))
    self.playBtn.clicked.connect(self.toggleVideo)
    
    self.slider = QSlider(Qt.Horizontal)
    self.slider.setRange(0, 0)
    self.slider.sliderMoved.connect(self.setPosition)
    self.slider.sliderPressed.connect(self.pauseVideo)
    self.slider.sliderReleased.connect(self.playVideo)
    
    hbox = QHBoxLayout()
    hbox.setContentsMargins(0, 0, 0, 0)
    hbox.addWidget(self.openBtn)
    hbox.addWidget(self.playBtn)
    hbox.addWidget(self.slider)
    
    vbox = QVBoxLayout()
    vbox.addWidget(videoWidget)
    vbox.addLayout(hbox)
    
    self.mediaPlayer.setVideoOutput(videoWidget)
    
    self.setLayout(vbox)
    
    self.mediaPlayer.stateChanged.connect(self.mediaStateChanged)
    self.mediaPlayer.positionChanged.connect(self.positionChange)
    self.mediaPlayer.durationChanged.connect(self.durationChange)
    
  def openFile(self):
    filename, _ = QFileDialog.getOpenFileName(self, "Open Video")
    #filename = "Ghost_Doll_3_Pack.mp4" Needs absolute dir
    if filename != '':
      self.mediaPlayer.setMedia(QMediaContent(QUrl.fromLocalFile(filename)))
      self.playBtn.setEnabled(True)
      
  def toggleVideo(self):
    if self.mediaPlayer.state() == QMediaPlayer.PlayingState:
      self.pauseVideo()
    else:
      self.playVideo()
      
  def playVideo(self):
    self.mediaPlayer.play()
    
  def pauseVideo(self):
    self.mediaPlayer.pause()
      
  def mediaStateChanged(self, state):
    if self.mediaPlayer.state() == QMediaPlayer.PlayingState:
      self.playBtn.setIcon(self.style().standardIcon(QStyle.SP_MediaPause))
      
    else:
      self.playBtn.setIcon(self.style().standardIcon(QStyle.SP_MediaPlay))
      
  def positionChange(self, position):
    self.slider.setValue(position)
    
  def durationChange(self, duration):
    self.slider.setRange(0, duration)
    
  def setPosition(self, position):
    self.mediaPlayer.setPosition(position)
  
# app = QApplication(sys.argv)
# window = Window()
# window.show()
# sys.exit(app.exec_())

if __name__ == "__main__":
  app = QApplication(sys.argv)
  style = """
    QWidget{
      background: #262D37
    }
  """
  app.setStyleSheet(style)
  root = Window()
  root.show() 
  sys.exit(app.exec())