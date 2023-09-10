import { Component } from "react";
import { Btn } from "./Button.styled";


export class Button extends Component {
    render() {
        return (
            <Btn onClick={this.props.loadMore}>Load more</Btn>
        )
    }
}