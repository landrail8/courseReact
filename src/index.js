import React from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  
  constructor(props) {
    super(props);
   
  }

 

  render() {

    return (
      <div>
        <h1>APP Component</h1>
      </div>
    )
  }

}

ReactDOM.render(
  <BrowserRouter> 
    <div>
      <Route exact path={'/'} component = { App } />
      <Route path={'/new'} component = { NewComponent } />
    </div>
  </BrowserRouter> 
   , 
  document.getElementById("app")
)