import React from "react";
import Todos from "./Todos";
import Goals from "./Goals";

import {connect} from "react-redux";
import {handleReceiveData} from "../actions/shared";

class App extends React.Component{

    async componentDidMount(){
        const {dispatch} = this.props
        dispatch(handleReceiveData())
    }

    render(){

        if(this.props.loading){
            return (<h3>loading ...</h3>)
        }
        else{
            return(
                <div>
                    <Todos/>
                    <Goals/>
                </div>
            )
        }
    }
}

export default connect((state) => ({
    loading: state.loading
}))(App)