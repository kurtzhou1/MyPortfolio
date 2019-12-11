import React, { Component } from 'react';
import '../style.scss'
import '../split.scss'
import { black } from 'ansi-colors';

class Content extends Component {

    state = {
        siderbar: false,
        name: 'content',
        myFName: ['A', 'B', 'C', 'D'],
        myLName: ['1', '2', '3', '4']
    }

    render() {
        const { name, myFName, myLName } = this.state;
        const { menu } = this.props
        const length = myFName.length + myLName.length;
        return (
            <div className={`${name} main_content h-100`}>
                <div className={`${name}_container h-100`}>
                    <div className={`row align-items-center justify-content-center h-100 ${menu ? "main__content_hide" : ""}`}>
                        <div className="col-lg-4 overflow-hidden">
                            <div className="kurt_img"></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="kurt_content">
                                <div className="kurt_name slide__in_right splitting" style={{ '--char-total': length, '--word-total': 2 }}>
                                    <span className="word" style={{ '--word-index': 0 }}>
                                        {myFName.map((ele, i) => (
                                            <span className="char" style={{ "--char-index": i }}>{ele}</span>
                                        ))}
                                    </span>
                                    <span>  </span>
                                    <span className="word" style={{ '--word-index': 1 }}>
                                        {myLName.map((ele, i) => (
                                            <span className="char" style={{ "--char-index": i + 4 }}>{ele}</span>
                                        ))}
                                    </span>
                                </div>
                                <div className="kurt_text">
                                    <span>A Front-End Engineer Who Loves Life And Sunshine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Content;