import React from 'react';
class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn:false,
        };
    }
    handleToggle = () =>{
        this.setState((prevState)=>({
            isOn:!prevState.isOn,
        }));
    }
    render(){
        return(
            <div>
                <button onMouseOver={this.handleToggle} onMouseOut={this.handleToggle}>
                    {this.state.isOn?"True":"False"}
                </button>
            </div>
        )
    }
}
export default Switch;