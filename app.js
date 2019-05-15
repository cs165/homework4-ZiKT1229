// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menuScreen = new MenuScreen();
    this.musicScreen = new MusicScreen();

    document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
      event.preventDefault();
      const { song, theme } = this.menuScreen.submit();
      this.menuScreen.hide();
      this.musicScreen.show();
      this.musicScreen.gifDisplay.fetchGif(theme);
    });
  }
  // TODO(you): Add methods as necessary.
}
