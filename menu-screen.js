// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.menu = document.getElementById('menu');
    this.form = document.getElementsByTagName('form')[0];
    this.songSelector = document.getElementById('song-selector');
    this.queryInput = document.getElementById('query-input');
    this.error = document.getElementById('error');
    this.fetchSong();
    this.theme();
    this.queryInput.addEventListener('input', () => {
      this.error.classList.add('inactive');
    });
  }
  // TODO(you): Add methods as necessary.
  show() {
    this.menu.classList.toggle('inactive', false);
  }

  hide() {
    this.menu.classList.toggle('inactive', true);
  }

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

  theme() {
    const themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    this.queryInput.value = themes[Math.floor(Math.random() * themes.length)];
  }

  submit() {
    const song = this.songSelector.options[this.songSelector.selectedIndex].dataset.url;
    const theme = this.queryInput.value;
    console.log(`Song url: ${song}`);
    console.log(`Theme: ${theme}`);
    return {
      song,
      theme
    };
  }
}
