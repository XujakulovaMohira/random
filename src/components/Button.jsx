import { Component } from "react";
import './button.css';

class Btn extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
        };
    } 
    
    render() {
        return (
        <div>
            <button onClick={() => this.props.func()}>Change User</button>
        </div>
        );
    }
}

export default Btn;