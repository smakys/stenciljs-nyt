import { Component, State } from '@stencil/core';

@Component({
  tag: 'nyt-card-list',
  styleUrl: 'nyt-card-list.scss'
})

export class NytCardList {

  @State() dataLoaded: boolean = false;
  data: any = {};

  constructor() {
    this.getStories()
      .then((response) => {
        this.data = response;
        this.data.results.map((result) => {
          let tmp = result.multimedia.filter((media) => {
            return media.format === 'superJumbo';
          });
          if (tmp.length > 0) {
            result.image = tmp[0];
          } else {
            result.image = {};
          }
          
          return result;
        });

        console.log(this.data)
        this.dataLoaded = true;
      });
  }

  getStories() {
    return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0726402cb23d4852a0c8765ca0e5986e', {
      method: 'GET'
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error(response.statusText);
      })
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => Promise.reject(error))
  }

  render() {
    if (this.dataLoaded) {
      return (
        <div class="card-list">
          {this.data.results.map((result) => (
            <nyt-card 
              title={result.title} 
              abstract={result.abstract} 
              image-url={result.image.url} 
              copyright={result.image.copyright}>
            </nyt-card> 
          ))}
        </div>
      )
    }
  }
}

