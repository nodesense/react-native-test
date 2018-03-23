import React from "react";

import {View, Text, Button} from "react-native";

export default class Address extends React.Component {

    constructor() {
        super();

        this.state = {
            show: true
        }
    }

    toggle() {
        console.log("**TOGGLE**");

        this.setState({
            show: !this.state.show
        });
    }

    render() {


        return (
            <View>
             {
                 this.state.show && (
                    <View>
                        <Text> Street: {this.props.address.street} </Text>
                        <Text> City: {this.props.address.city} </Text>
                        <Text> Pincode: {this.props.address.pincode}  </Text>
                        <Button title="Contact"
                                onPress= { () => {}} >
                        </Button>
                    </View>
              )
             }

                <Button title="Toggle"
                        onPress= { () => this.toggle()} >
                </Button>

            </View>
        )
    }
}