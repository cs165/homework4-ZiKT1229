// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.music = document.getElementById('music');
    this.audioPlayer = new AudioPlayer();
    this.gifDisplay = new GifDisplay();
    this.playButton = new PlayButton();
  }
  // TODO(you): Add methods as necessary.
  show() {
    this.music.classList.toggle('inactive', false);
  }

  hide() {
    this.music.classList.toggle('inactive', true);
  }
}
