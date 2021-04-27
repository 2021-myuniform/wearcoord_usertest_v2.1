import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Testswiper extends Component {

    constructor() {
        super();

        this.state = {
            pitchers: []
        };

    }

    getApi = () => {
        console.log('test');
        fetch('/api/main/mycoord/wear/Caps')
        .then(response => {
            return response.json();
        })
        .then(objects => {
            this.setState({pitchers:objects});
        });
    }

    // componentDidMount() {
    //     fetch('/api/main/mycoord/wear/Caps')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(objects => {
    //         this.setState({pitchers:objects});
    //     });
    // }

    renderPitchers()
    {
        return this.state.pitchers.map(pitcher => {
            return (
            <li key={pitcher.key}>
                名前 : {pitcher.name}<br/>
                勝利数 : {pitcher.win}<br/>
                防御率 : {pitcher.era}<br/>
            </li>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <button onClick={this.getApi} className="panel-heading">Example Component</button>

                            <button onClick={this.getApi} className="panel-body">
                                <ul>
                                {this.renderPitchers()}
                                </ul>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
