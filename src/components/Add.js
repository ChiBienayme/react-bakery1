import React from "react";
import Button from "./Button";

class List extends React.Component {
    constructor() {
     super();
        this.state = {
          productName: "",
          price: 1,
        };

        this.updatePrice = this.updatePrice.bind(this);
        this.updateProductName = this.updateProductName.bind(this);
    }

    updateProductName(e) {
        this.setState({
          productName: e.target.value,
        });
    }
    
    updatePrice(e) {
        this.setState({
            price: e.target.value,
        });
    }

    render() {
        return(
            <div>
                <Button 
                    isSelected={this.isSelected}
                    onClick={this.props.selectAdd}
                    children="Add"
                />  

                <Button 
                    isSelected={this.isSelected}
                    onClick={this.props.selectList}
                    children="List"
                />

                <Button 
                    isSelected={this.isSelected}
                    onClick={this.props.selectPay}
                    children="Pay"
                />

                <h3> ADD </h3>

                <div>
                    <form>
                        <input type="text" onChange={this.updateProductName} />

                        <input type="range" min={1} max={10} onChange={this.updatePrice} />

                        <button className="btn btn-primary" onClick={this.props.addItems}> Add </button>
                    </form>
                </div>
            </div>

        )
    }
}

export default List