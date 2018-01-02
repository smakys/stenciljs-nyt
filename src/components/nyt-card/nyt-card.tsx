import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'nyt-card',
  styleUrl: 'nyt-card.scss'
})

export class NytCard {

  @Prop() imageUrl: string;
  @Prop() copyright: string;
  @Prop() title: string;
  @Prop() abstract: string;

  render() {

    let image = null;
    let copy = null;

    if (this.imageUrl) {
      image = <img src={this.imageUrl} />;
    }

    if (this.copyright) {
      copy = <p class="card__copy">{this.copyright}</p>;
    }

    return (
      <div class="card">
        {image}
        {copy}
        <div class="card__content">
          <h2>{this.title}</h2>
          <ul class="card__abstract">
            <li>{this.abstract}</li>
          </ul>
        </div>
      </div>
    )
  }
}
