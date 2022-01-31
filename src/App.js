import React from "react"

// CSS
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// JS
import List from "./components/List"
import Pay from "./components/Pay"
import Add from "./components/Add"

class App extends React.Component {
  constructor() {
    super();
    
    this.state={
      activeTab: "add",
      items: [],
    };

    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  selectAdd() {
    this.setState({ activeTab: "add" });
    console.log(this.state.activeTab);
  }

  selectList() {
    this.setState({ activeTab: "list" });
    console.log(this.state.activeTab);
  }

  selectPay() {
    this.setState({ activeTab: "pay" });
    console.log(this.state.activeTab);
  }
  
  addItem(name, price, e){
    e.preventDefault();
    this.setState({
      items: this.state.items.push({ product: name, priceTag: price }),
    });
    console.log(this.state.items);
  }

  render(){
    if (this.state.activeTab === "Add") {
      return(
          <Add  
              selectAdd={this.selectAdd}
              selectList={this.selectList}
              selectPay={this.selectPay}
              addItems={this.addItem}
          />    
      )
    }

    if (this.state.activeTab === "List") {
      return (
        <List
          selectList={this.selectList}
          selectPay={this.selectPay}
          selectAdd={this.selectAdd}
          items={this.state.items}
        />
      );
    }

    if (this.state.activeTab === "Pay") {
      return (
        <Pay
          selectPay={this.selectPay}
          selectList={this.selectList}
          selectAdd={this.selectAdd}
        />
      );
    }

    
  }
}
export default App