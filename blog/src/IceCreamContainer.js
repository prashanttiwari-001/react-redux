import React from "react"
import { connect } from "react-redux"

import {buyIceCream} from './redux/iceCream/iceCreamAction'

function IceCreamContainer(props){
    return (
        <>
        <h1 style={{backgroundColor:"red"}}>Number of IceCream - {props.numberOfIceCream}</h1>
        <button onClick={props.buyIceCream} style = {{color:"white",backgroundColor: "black",borderRadius :"1rem"}}>Buy IceCream</button>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        numberOfIceCream : state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIceCream : () => dispatch(buyIceCream())
    }
}
export default connect (
    mapStateToProps, 
    mapDispatchToProps
    )(IceCreamContainer);