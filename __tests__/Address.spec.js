// for JSX
import React from "react";

import Address from "../components/Address";

import TestRenderer from "react-test-renderer";

describe("Address comp test suite", () => {

    it("should render default props", () => {
        let address = {street: '1st', city: 'Nagpur', pincode: 100000};

        const renderer = TestRenderer.create(<Address address={address} />);

        const jsonOutput = renderer.toJSON();
        console.log("JSON ", jsonOutput);

        expect(jsonOutput).toMatchSnapshot();


        const root = renderer.root;

        const addressInst = root.instance;

        expect(addressInst.state.show).toBe(true);


        addressInst.toggle();

        expect(addressInst.state.show).toBe(false);


        expect(renderer.toJSON()).toMatchSnapshot();

    });

})