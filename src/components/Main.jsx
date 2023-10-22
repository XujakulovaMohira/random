import React, { Component } from "react";
import './main.css';
import Btn from './Button';

class Main extends Component{
   constructor(props){
    super(props);
    this.state = {
        data: {},
    }
   };  
     
    componentDidMount(){
        fetch("https://random-data-api.com/api/v2/users")
        .then((res) => res.json())
        .then((res) =>{
          this.setState({ dataApi:res });
        })
        .catch((error) => {});
    }

     btnClick = () => {
        fetch("https://random-data-api.com/api/v2/users")
        .then((res) => res.json())
        .then((res) => {
            this.setState({ dataApi:res });
            console.log(res); 
        });
    };

    render() {
        console.log(this.state);
        const {dataApi} = this.state;
        return (
            <div>
                {this.state.dataApi ? (
                <div className="card">
                    <div className="photo">
                        <img src={dataApi.avatar} alt="Rasm loading..."/>
                    </div>
                        <hr />
                    <div className="title">
                        <p className="show"><span>Id: </span>{dataApi.id}</p>
                        <p className="show"><span>Firstname: </span>{dataApi.first_name}</p>
                        <p className="show"><span>Lastname: </span>{dataApi.last_name}</p>
                        <p className="show"><span>Passvord: </span>{dataApi.password}</p>
                        <p className="show"><span>Username: </span>{dataApi.username}</p>
                        <p className="show"><span>Tel: </span>{dataApi.phone_number}</p>
                        <p className="show"><span>Email: </span>{dataApi.email}</p>
                        <p className="show"><span> Uid: </span>{dataApi.uid}</p>
                    </div>
                </div>
              )  : (
                <h1>Loading...</h1>
                )}
                <Btn func={this.btnClick} />
        </div>
        );     
    }
}



export default Main;


