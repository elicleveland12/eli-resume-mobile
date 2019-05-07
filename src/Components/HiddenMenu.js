import React from 'react';
import '../App.css';



export default class HiddenMenu extends React.Component {
  render() {
    return (
      <div className="hiddenContainer">
        <img src={require('../public/burger-button.001.jpeg')} alt="Hamburger" className="burger-button" onClick={this.props.toggleSideBar}/>
      </div>
    );
  }
}
