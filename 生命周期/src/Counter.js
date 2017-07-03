/**
 * Created by lylllcc on 2017/6/19.
 */
import React, { Component } from 'react'
const buttonStyle = {
    margin: '10px'
};
class Counter extends Component{
    constructor(props){
        super(props);
        // this.addButton = this.addButton.bind(this);
        // this.deButton  = this.deButton.bind(this);
        this.addButton = this.addButton.bind(this);
        this.deButton  = this.deButton.bind(this);

        console.log("constructor: " + props.caption);

        this.state = {
            count: props.initValue
        }
    }
    addButton(){
        this.setState({count: this.state.count + 1});
        this.props.upDateValue(1);
    }
    deButton(){
        this.setState({count: this.state.count - 1})
        this.props.upDateValue(-1);
    }
    render(){
        const {caption} = this.props;
        console.log('render: ' + caption)
        return (
            <div>
                <button style={buttonStyle} onClick={this.addButton}>+</button>
                <button style={buttonStyle} onClick={this.deButton}>-</button>
                <span>{ caption } Count : { this.state.count }</span>
            </div>
        );
    }

    //父组件render函数被调用或props发生改变时调用
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + this.props.caption);
    }

    //render函数结束之后执行
    componentDidMount(){
        console.log('componentDidMount: ' + this.props.caption);
    }

    //是否需要重新渲染，默认全部为是
    shouldComponentUpdate(nextProps,nextState){
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }

}
Counter.defaultProps = {
    initValue: 0
};
export default Counter;