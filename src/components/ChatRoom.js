import React, { Component } from 'react';

class ChatRoom extends Component {
    state = {
        text: '',
        content: []
    }

    changeValue = e => {
        this.setState({
            text: e.target.value
        })
    }

    sendMessage = (e) => {
        e.preventDefault(); // form預設行為會換新的一頁，故要把新的一頁的功能擋下來
        const { text, content } = this.state
        this.setState({
            text: '',
            content: [{ id: Date.now(), text }, ...content]
        })
    }
    //當用form把input跟button包起來，而且裡頭有submit元素，此時點button會觸發或者按Enter也會
    render() {
        const { text, content } = this.state
        console.log(content)
        const x = 'abc' / 123
        const y = 456 / 123
        console.log('here', x, !!x, x && '我是真的1', y && '我是真的2', x || '我是真的1', y || '我是真的2')
        return (
            <div>
                <form onSubmit={this.sendMessage}>
                    <input type='text' value={text} onChange={this.changeValue} />
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {content.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div >
        );
    }
}

export default ChatRoom;