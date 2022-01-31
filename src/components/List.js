import React from "react";
import Button from "./Button";

class List extends React.Component {
    
    render(){
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

                <div>
                    <ul>
                        {this.props.items.map((item) => {
                        return <li>{item}</li>;
                        })}
                    </ul>
                </div>

                <h3> LIST </h3>
            </div>
        )
    }
}

export default List