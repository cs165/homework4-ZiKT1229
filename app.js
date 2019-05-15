// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menuScreen = new MenuScreen();
    this.musicScreen = new MusicScreen();

    this.menuScreen.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const { song, theme } = this.menuScreen.submit();
      this.menuScreen.hide();
      this.musicScreen.show();
      this.musicScreen.audioPlayer.setSong(song);
      this.musicScreen.audioPlayer.setKickCallback(() => {
        console.log('kick!');
        this.musicScreen.gifDisplay.showGif();
      });
      this.musicScreen.gifDisplay.fetchGif(theme);
    });

    this.musicScreen.playButton.button.addEventListener('click', () => {
      this.musicScreen.playButton.behavior = !this.musicScreen.playButton.behavior;
      this.musicScreen.playButton.button.classList.toggle('play');
      this.musicScreen.playButton.button.classList.toggle('pause');
      if (this.musicScreen.playButton.behavior) {
        console.log('Play the music');
        this.musicScreen.audioPlayer.play();
      } else {
        console.log('Pause the music');
        this.musicScreen.audioPlayer.pause();
      }
    });
  }
  // TODO(you): Add methods as necessary.
}
