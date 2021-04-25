import React, { Component } from 'react'

export default class Rightsolobtn extends Component {
    render() {
        return (
            <div>
               <details class="btnDesign right" id={"btn" + this.props.name} >
                    <summary>
                        {this.props.icon}
                        <p class="btnText" id={"btnTitle" + this.props.name}>{this.props.name}</p>
                    </summary>
                    <div class="detailsBottom">
                        <form action="/main/home" class="detailsBtn" method="get">
                            <button type="submit">
                                <span class="material-icons-outlined">
                                    shopping_cart
                </span>
                                <p class="btnText">買う</p>
                                <input type="hidden" name="type" value={this.props.name} />
                            </button>

                        </form>
                        <hr />
                        <form action="{{ route('searchmysetsGetCaps') }}" class="detailsBtn2" method="get">
                            <button class="searchBtn" type="submit">
                                <input type="hidden" name="type" value="caps" />
                                <span class="material-icons-outlined">
                                    screen_search_desktop
                </span>
                                <p class="btnText">選ぶ</p>
                            </button>
                        </form>
                    </div>
                </details>
            </div>
        )
    }
}
