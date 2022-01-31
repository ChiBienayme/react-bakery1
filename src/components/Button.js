import React from "react";

class Button extends React.Component {
    render() {
        return(
            <div>
                <button 
                    style={this.props.isSelected}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </button>
                
            </div>

        )
    }
}

export default Button