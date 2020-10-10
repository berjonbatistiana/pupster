import React from "react";
import API from "../../utils/API";


class Discover extends React.Component {

    state = {
        friends: 0,
        dogImg: ""
    };




    getNextDog = () => {
        API.nextDog().then((response) => {
            this.setState({ dogImg: response.data.message });
            console.log(this.state.dogImg);
        });
    }

    handleLikeDog = () => {
        const chance = Math.floor(Math.random() * Math.floor(5));
        console.log(chance);
        if (4 === chance){
            this.setState({friends: this.state.friends + 1});
        }
        this.getNextDog();
    }

    handleSkipDog = () => {
        this.getNextDog();
    }

    componentDidMount() {
        this.getNextDog();
    }

    render() {
        return (
            <div>
                <h1>Discover Page</h1>
                <div className="card">
                    <div className="img-container">
                        <img alt="random dog" src={this.state.dogImg} />
                    </div>
                    <h1>You've made friends with {this.state.friends} pups so far!</h1>


                    <a className="d-flex" onClick={() => this.handleLikeDog()} ><h1><i className="far fa-thumbs-up"></i></h1></a>
                    <a className="d-flex" onClick={() => this.handleSkipDog()} ><h1><i className="far fa-thumbs-down"></i></h1></a>
                </div>
            </div>
        );
    }


}

export default Discover;
