/**
 * Created by lylllcc on 2017/6/19.
 */
import React, {Component} from 'react'
import Counter from './Counter'
import Summary from "./Summary";
class ControlPanel extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Counter caption="First"/>
                <Counter caption="Second" initValue={0}/>
                <Counter caption="Third" initValue={0}/>

                <div>
                    <span><Summary/></span>
                </div>
            </div>

        );
    }
}
export default ControlPanel;
