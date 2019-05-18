// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.button = document.getElementsByClassName('button')[0];
    this.behavior = false;
  }
  // TODO(you): Add methods as necessary.
  changeButton() {
    this.behavior = !this.behavior;
    this.button.classList.toggle('play');
    this.button.classList.toggle('pause');
  }
}
