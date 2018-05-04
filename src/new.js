import React, { Component} from 'react';

export default class NewComponent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <h3 style ={{color: "red"}}>New Component</h3>
      </div>

      // <ul>
      //   {this.props.array.map(this.renderItem.bind(this))}
      // </ul>
    )
  }

}