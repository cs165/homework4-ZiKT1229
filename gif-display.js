// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.gif = document.getElementsByClassName('gif')[0];
    this.gifs = [];
    this.index = 0;
  }
  // TODO(you): Add methods as necessary.
  async fetchGif(theme) {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const q = theme;
    const limit = '25'
    const rating = 'g';
    const key = 's7ptkc5WGCQgsAt5uWubOREzPkeWiBM2';
    const endpoint = `${url}?q=${q}&limit=${limit}&rating=${rating}&api_key=${key}`;
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        this.analysis(jsonResponse.data);
      } else {
        throw new Error('Error!!!!!!!!!!!!!!!!!!!!!!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  analysis(jsons) {
    this.gifs = [];
    this.index = 0;
    jsons.forEach(json => {
      const gifUrl = json.images.downsized.url;
      this.gifs.push(gifUrl);
    });
    this.showGif();
  }

  showGif() {
    this.gif.style.backgroundImage = `url(${this.gifs[this.index]})`;
    this.index = (this.index + 1) % this.gifs.length;
  }
}
