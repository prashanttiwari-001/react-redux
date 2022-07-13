import React from 'react';

import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from './redux/indexs';
function HooksCakeConatiner(){
   const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
   const dispatch = useDispatch()
    return(
        <>
        <h2>Number of Cakes - {numberOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </>
    )
}
export default HooksCakeConatiner;