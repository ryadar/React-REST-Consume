import React, {Component} from "react";
import './LogIn.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home'; 

import Avatar from 'react-avatar';

class LogIn extends Component {


    constructor(props) {
        super(props);
        //let BASE_URL  = 'https://dev.building.chat/api/';
        this.state = {
            email: "",
            password: "",
            isLoggedIn : false ,
            user:{
                token : {
                    created : '',
                    key : '',
                    user : '' 
                } ,
                user :  {
                    email : '',
                    is_verified : '',
                    key : '',
                    name : '',
                    phone  : '',
                    photo : '',
                    snoozed_public_chat_at : '',
                    snoozed_public_chat_duration : ''
                }
            },
            property_assignment : [{
                allow_tenants_to_message_me : false ,
                get_new_public_messages :  false ,
                key : '',
                status : '',
                property :{
                    address_1 : '',
                    address_2 :'',
                    allow_tenant_to_tenant : '' ,
                    city : '',
                    full_address : '',
                    key : '',
                    state :'',
                    zipcode :'',
                    unread :'',
                    unit_count : '',
                    primary_manager : {
                        email : '',
                        is_verified : '',
                        key : '',
                        name :'',
                        phone : '',
                        photo :''
                    }
                }
            }]

        };

        this.clickOnLogInButton = this.clickOnLogInButton.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.getUserPropertyAssignments = this.getUserPropertyAssignments.bind(this);

    }

    handleEmail(e) {
        this.setState({email: e.target.value});
    }

    handlePassword(e) {
        this.setState({password: e.target.value});
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    getUserPropertyAssignments = event => {
        //this.   preventDefault();
        let requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/json');
        requestHeaders.append('user__key', this.state.user.user.key);
        requestHeaders.append('Accept', 'application/json');
        requestHeaders.append('TokenAuth',"Token " + this.state.user.token.key);
        requestHeaders.append('Origin','https://dev.building.chat/api/login/');
            fetch('https://dev.building.chat/api/property_assignment/',{
                method : 'GET',
                headers :requestHeaders
            })
            .then(
                response => 
                {
                    return response.json()
                }
            ).then( result => {
                console.log(result)
                this.setState({
                       property_assignment : result  
                })
            }).catch( error => {
                console.log(""+error.message)
            })
    }
    clickOnLogInButton = event => {
        event.preventDefault(); ;
        if (this.validateForm()){
            console.log(this.state.email)
            console.log(this.state.password)
            const encoded = window.btoa(this.state.email+':'+this.state.password); // encode a string
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Authorization',"Basic " + encoded);
            //headers.append('Origin','https://dev.building.chat/api/login/');
            fetch('https://dev.building.chat/api/login/',{
                mode: 'cors',
                // credentials: 'include',
                method: 'GET',
                headers: headers
            })
                .then(response => {
                    return response.json();
                }).then(result => {
                //this.headers = result;
                // console.log("sucess")    
                // window.alert("sucess")

                if(result.detail!=undefined){
                    console.log("error")   
                }else{
                    console.log("sucess")
                     this.setState({
                         isLoggedIn : true,
                          user : result
                     })
                }

                console.log(result)

                this.getUserPropertyAssignments()
            }).catch(error=> 
                window.alert(""+error.message)
                // console.log(""+error.message)
                );
        }else{
            window.alert("Enter email and password")
        }
      }
      
    // clickOnLogInButton() {
        
    //     if (this.validateForm()) {
    //         //console.log(this.state.email)
    //         //onsole.log(this.state.password)
    //         // 
    //         // console.log(encoded)
           
         
    
   
    //     } else {
    //        // window.alert("Enter email and password")
    //     }
    // }

    render() {
        if(!this.state.isLoggedIn){
            return (
                <div class="d-flex ContainerCls">
                    <div className="LogInCls">
                        <div className="BuildingChatIcon"></div>
                        <div>
                            <form class="formCls">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           placeholder="Enter email"
                                           value={this.state.email}
                                           onChange={this.handleEmail}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Enter password"
                                           value={this.state.password}
                                           onChange={this.handlePassword}
                                    />
                                </div>
                                <div className="container-fluid">
                                    <div className="col-sm-12 text-center">
                                        <button type="submit" className="btn form-control-buttom center-block"
                                                onClick={this.clickOnLogInButton}>Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );  
        }
        else{
            if(!this.state.user.user.is_verified){
                return (
                <div className="container">
                    <h1>User is not verified yet</h1>
                </div>
                );
            }else{
            return(<div className="container">
                <Avatar name="Foo Bar" round={true} src={this.state.user.user.photo} />
                    <br></br>
                 user name :  {this.state.user.user.name} <br></br>
                 Email ID :  {this.state.user.user.email} <br></br>
                 Phone Number  :  {this.state.user.user.phone} <br></br>
                {/* <!-- token  :  {this.state.user.token.key} <br></br> --> */}
                 <ul class="list-group">
{
this.state.property_assignment.map(function(item ,key){
    {
        if(item.status== "active"){
            return(
                <li class="list-group-item">
            {item.property.full_address} 
                             </li>)
        }
    
    }

})


}
 </ul>

            </div>);
            }
        }
    }
}

export default LogIn