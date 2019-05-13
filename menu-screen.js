// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.songSelector = document.getElementById('song-selector');
    this.fetchSong();
  }
  // TODO(you): Add methods as necessary.
  async fetchSong() {
    const url = 'https://cs165.github.io/homework4-ZiKT1229/playlist/songs.json';

    try {
      const response = await fetch(url);

      if (response.ok) {
        const jsonResponse = await response.json();
        this.render(jsonResponse);
      } else {
        throw new Error('Error!!!!!!!!!!!!!!!!!!!!!!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  render(songs) {
    Object.keys(songs).forEach((songName) => {
      console.log(songs[songName]);
      const data = songs[songName];
      const option = this.$create('option', { 'data-url': `${data.songUrl}` }, `${data.artist} - ${data.title}`);
      this.songSelector.appendChild(option);
    });
  }

  $create(tag = 'div', attrs = {}, text = '') {
    const node = document.createElement(tag);
    Object.keys(attrs).forEach((name) => {
      node.setAttribute(name, attrs[name]);
    });
    node.textContent = text;
    return node;
  };
}
