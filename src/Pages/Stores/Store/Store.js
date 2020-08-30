import React, { Component } from "react";
import "./Store.scss";

class Store extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="Store">
        <div className="store-img">
          <img src={store.thumbnail_url} alt={store.name} />
        </div>
        <p className="store-name">{store.name}</p>
      </div>
    );
  }
}

export default Store;
