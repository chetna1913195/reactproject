import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';
 class Avatar extends Component{
     constructor(){
         super();
         this.state={
             name: "Welcome to Avatar World"
         }
     }
     namechange(){
         this.setState({
            name: "Welcome to my World"

         })
     }
         render(){
            const Avatarlistarray=[
                {
                    id:1,
                    name:"Chetna",
                    work:"Web Developer"
                },
                {
                    id:2,
                    name:"Jahan" ,
                    work:"IAS Officer"
                },
                {
                    id:3,
                    name:"Akshay",
                    work:"App developer" 
                },
                {
                    id:4,
                    name:"Lakshay",
                    work:"Machine Learner"
                },
        
        
            ]
           const avatarcardarray= Avatarlistarray.map( (avatarcard,i)=>{
                return   <Avatarlist key={i} id={Avatarlistarray[i].name} name={Avatarlistarray[i].name} work={Avatarlistarray[i].work}/>
            })
            return (
                <div class="mainpage">
                    <h1>{this.state.name}</h1>
                   {avatarcardarray}
                    <button onClick={ () => this.namechange()  }> Subscribe </button>
                </div>
                )
         }

        }
    
    
  
export default Avatar;