import React, {Component} from 'react';
import {connect} from 'react-redux';
import {decrement, increment, reset, changeTheme} from "../redux/actions";

const btnClasses: string = 'absolute top-50 right-5 py-1 px-2 border rounded bg-blue-500'

class CreateStore extends Component<any, any>{
    constructor(props) {
        super(props);

        this.state = {
            theme: 'bg-white'
        }
    }
    protected _bgClasses: string = 'bg-white';
    protected _increase = event => {
        event.preventDefault();
        this.props.increment();
        this.setState({
            counter: this.props.counter
        })
    }

    protected _decrease = event => {
        event.preventDefault();
        if (this.props.counter > 0) {
            this.props.decrement();
            this.setState({
                counter: this.props.counter
            })
        }
    }

    protected _reset = event => {
        event.preventDefault();
        this.props.reset();
    }

    protected _timeoutReset() {
        return function (dispatch: any) {
            setTimeout(() => {
                console.log('hi!')
            }, 1500)
        }
    }

    protected _toggleTheme = event => {
        event.preventDefault();
        const newTheme = this.props.theme === 'bg-white' ? 'bg-black/50' : 'bg-white'
        this.props.changeTheme(newTheme);
    }

    render() {
        return (
            <>
                <div className={this.props.theme +` border py-2 px-4 rounded flex flex-col items-center mb-2`}>
                    <h1 className="items-center text-2xl">React Counter</h1>
                    <button className={btnClasses} onClick={this._toggleTheme}>Change theme</button>
                    <div className="my-2 border rounded w-full items-center flex flex-col h-[100px]">
                        <span className="mt-2 mb-2 ">{ this.props.counter }</span>
                        <div className="flex flex-column">
                            <button className="border bg-yellow-400 rounded-[25%] px-2 mr-2"  onClick={this._increase}>+</button>
                            <button className="border bg-blue-400 rounded-[25%] px-2 mr-2" onClick={this._decrease}>-</button>
                            <button className="border bg-red-600 rounded-[25%] px-2 mr-2" onClick={this._reset}>Reset</button>
                            <button className="border bg-red-400 rounded-[25%] px-1" onClick={this._timeoutReset}>Async</button>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

const mapDispatchToProps = {
    increment,
    decrement,
    reset,
    changeTheme
}

const mapStateToProps = state => (
    {
        counter: state.counter,
        theme: state.theme.value
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CreateStore);