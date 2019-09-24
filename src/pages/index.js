import React from 'react'
import {Link} from 'react-router-dom'
import { observer, inject } from "mobx-react";

export default @inject('store') @observer class extends React.Component {
    render() {
        const counter = this.props.store.counter;

        return (
            <>
                <div style={{display: 'flex'}}>
                    <button onClick={() => counter.minus1()}>-</button>
                        <div>Значение: { counter.value }</div>
                    <button onClick={() => counter.plus1()}>+</button>
                </div>
            </>
        )
    }
}