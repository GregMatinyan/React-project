import React from "react";


class CheckedItems extends React.Component {
  
  render() {
    return (
      <div>
        <p>{`Items checked ${this.props.checkedItemsLength}/${this.props.itemsLength}`}</p>
      </div>
    );
  }
}

export default CheckedItems;