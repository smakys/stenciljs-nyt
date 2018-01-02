import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})

export class MyApp {

  componentWillLoad() {
    console.log('componentWillLoad() - before rendering');
  }

  componentDidLoad() {
    console.log('componentDidLoad() - after rendering');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate() - before updating');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate() - after updating');
  }
  componentDidUnload() {
    console.log('componentDidUnload() - after unloading');
  }

  render() {
    return (
      <div>
        <header>
          <h1>The New York Times</h1>
        </header>
        <main>
          <nyt-card-list></nyt-card-list>
          {/*
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
          </stencil-router>
          */}
        </main>
      </div>
    )
  }
    
}

/*
<nyt-card 
                title={result.title} 
                abstract={result.abstract} 
                image-url={result.image.url} 
                copyright={result.image.copyright}>
              </nyt-card>
*/
