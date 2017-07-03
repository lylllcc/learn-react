/**
 * Created by lylllcc on 2017/6/19.
 */
import React, {Component} from 'react'
import Counter from './Counter'
class ControlPanel extends Component {

    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.state = {
            sum: 0
        }
    }

    onCounterUpdate(value) {
        this.setState({sum: this.state.sum + value})
    }

    render() {
        return (
            <div>
                <Counter upDateValue={this.onCounterUpdate} caption="First"/>
                <Counter upDateValue={this.onCounterUpdate} caption="Second" initValue={0}/>
                <Counter upDateValue={this.onCounterUpdate} caption="Third" initValue={0}/>

                <div>
                    <button onClick={() => this.forceUpdate()}>
                        Click
                    </button>


                    <span>Total: { this.state.sum }</span>
                </div>
            </div>

        );
    }
}
export default ControlPanel;
