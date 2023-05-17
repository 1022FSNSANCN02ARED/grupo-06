import React, { Component } from "react";
import MovieAbstract2 from "./MovieAbstract2.jsx";

class MovieDetail extends Component {
    constructor(props) {
        super(props);

        const id = props.match.params.userName;
        console.log("Match:", props.match);

        this.state = {
            id,
            user: null,
        };
    }

    componentDidMount() {
        const userName = this.state.id;

        fetch(`http://localhost:3000/api/user/${userName}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                const user = result.data;
                this.setState({
                    userName,
                    user,
                });
            });
    }

    render() {
        const user = this.state.user;
        console.log(user);
        if (user) {
            const userData = user[0];
            return (
                <div className="center text-center">
                    <MovieAbstract2
                        img={"/images/avatars/" + userData.avatar}
                        title={userData.userName}
                        desc={`Usuario: ${userData.userName}`}
                        url={
                            "http://localhost:3001/users/" +
                            userData.userName +
                            "/edit"
                        }
                    />
                    <h1>Nombre de usuario: {userData.userName} </h1>
                    <p>Nombre: {userData.firstName} </p>
                    <p>Apellido: {userData.lastName} </p>
                    <p>Email: {userData.email} </p>
                    <p>Celular: {userData.cellphone} </p>
                </div>
            );
        } else {
            // No tengo user todavía
            return <p>Cargando...</p>;
        }
    }
}

export default MovieDetail;
