import React from "react"
import Avatar from "react-avatar";

import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render() {
        return (<div className="container" align="center">
            <br></br>

            <Avatar name="Foo Bar" round={true} src="../bchat_full.png"/>
            <div>

                <span className="label label-default">Rajashekar Ryada</span>
                <br></br>
                <span className="label label-primary">Senior Android Developer , Frontend Developer</span>
                <br></br>
                <span className="label label-primary">Email: raja.androiddeveloper@gmail.com</span>

                <br></br>
                <span className="label label-primary">phone Number:- +5213320866670</span>


                <br></br>
                <span className="label label-primary"></span>

                <p>Envelope icon: <span className="glyphicon glyphicon-envelope"></span></p>


                <hr size="30"></hr>

            </div>

        </div>)

    }
}

export default Header