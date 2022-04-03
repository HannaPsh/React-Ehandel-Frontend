import React, { Component } from 'react'

export default class logout extends Component {
    constructor() {
        super();
        localStorage.setItem("submitted", false);
    }
    render() {

        return (
            window.location.href = "/"
        )
    }
}