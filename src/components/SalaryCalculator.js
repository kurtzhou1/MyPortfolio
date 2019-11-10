import React, { Component } from 'react';

class SalaryCalculator extends Component {
    state = {
        salary: '',
        startTime: Date.now(),
        nowTime: Date.now(),
        interval: ''
    }

    componentDidMount() {
        this.state.interval = setInterval(() => {
            this.setState({
                nowTime: Date.now()
            })
        }, 100) //100毫秒呼叫一次
    }

    changeSalary = (e) => {
        this.setState({
            salary: parseInt(e.target.value)
        })
    }

    stop = () => {
        clearInterval(this.state.interval)
    }

    render() {
        const { salary, startTime, nowTime } = this.state
        const time = (nowTime - startTime) / 1000
        return (
            <div>
                <div>
                    <div>我的薪水</div>
                    <input type='number' value={salary} onChange={this.changeSalary} />
                    <div>每小時</div>
                    <input type='number' value={salary / 240} />
                    <div>每分</div>
                    <input type='number' value={salary / 240 / 60} />
                    <div>每秒</div>
                    <input type='number' value={salary / 240 / 60 / 60} />
                    <div>經過了{time.toFixed(1)}秒</div>
                    <div>正賺了{((salary * time) / 240 / 60 / 60).toFixed(2)}</div>
                    <button onClick={this.stop}>Stop!</button>
                </div>
            </div>
        );
    }
}

export default SalaryCalculator;