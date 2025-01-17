import React from 'react';


class App1 extends React.Component {
    users;
    constructor(props) {
        super(props);
        this.state = {employees: []};
        this.state = {users: []};
        this.headers = [
            {key: 'key'}
        ];
    }

    // fetch(API, { headers: {
    //     'user-agent': 'Mozilla/4.0 MDN Example',
    //     'content-type': 'application/json'
    //   }}).then()

    componentDidMount() {

        const encoded = window.btoa('raja@building.chat:rajaraja'); // encode a string

        console.log(encoded)

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization',"Basic " + encoded);
        headers.append('Origin','https://dev.building.chat/api/login/');

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
            console.log(result)

            // this.headers.map(function (item,key) {
            //     console.log(item.key)
            //     console.log(item.name)
            //     console.log(item.permission_level)
            //
            // })


            this.setState({
                headers: result
            });


        }).catch(error=>console.error(error.message));
    }

    render() {
        var header = ''

        this.headers.map(function (item, key) {
            header = item.name + header
        })

        return (

            <table className="container table table-bordered">
                <thead class="thead-dark">
                {this.headers.map(function (item, key) {
                    if (key == 0) {
                        return (
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">permission_level</th>
                                <th scope="col">short_name</th>
                                <th scope="col">order</th>
                                <th scope="col">parent_role</th>
                                <th scope="col">short_name</th>
                            </tr>
                        )
                    }
                })
                }
                </thead>
                <tbody>
                {
                    this.headers.map(function (item, key) {
                        return (
                            <tr>
                                <th scope="row"> {item.name}</th>
                                <td> {item.permission_level}</td>
                                <td> {item.short_name}</td>
                                <td> {item.order}</td>
                                <td> {item.parent_role}</td>
                                <td> {item.short_name}</td>
                            </tr>

                        )

                    })
                }
                </tbody>
            </table>
        )

    }
}

export default App1;
