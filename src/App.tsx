import React from 'react';
import { Slider } from './components/index'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="container-heading">
          <h1>React Simple Slider</h1>
        </div>
        <div className="container-component">
          <Slider>
            <div>
              <img src="https://wallpapercave.com/wp/wp4923981.jpg" alt=""/>
            </div>
            <div>
              <img src="https://c.wallhere.com/photos/0a/93/reactJS_JavaScript_Typescript_programming_programming_language_React_Native_Facebook_React-1568827.jpg!d" alt=""/>
            </div>
            <div>
              <img src="https://c4.wallpaperflare.com/wallpaper/733/808/870/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg" alt=""/>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default App;
