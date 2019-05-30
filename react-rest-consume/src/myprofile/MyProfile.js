import React from "react"

import Header from '../myprofile/Header';
import Body from "../myprofile/Body";
import Footer from "../myprofile/Footer";


class MyProfile extends React.Component {

    render() {
        var tags = <div className="container" align="center" >
            <Header/>
            {/*<Body/>*/}
            {/*<Footer/>*/}
        </div>

        return(tags)
    }
}

export default MyProfile