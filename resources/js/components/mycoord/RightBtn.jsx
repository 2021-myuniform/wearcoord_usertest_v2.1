import React from 'react'
import { withRouter } from 'react-router';
import Rightsolobtn from './RightSoloBtn';

// function Rightbtn() {
class Rightbtn extends React.Component {
    handleToAboutPage = () => {
        this.props.history.push('/')
      }

    render() {

        return (
            <div className="rightContainer">

                <Rightsolobtn name={'Caps'} icon={<span class="material-icons-outlined">face</span>} />

                <Rightsolobtn name={'Tops'} icon={<i class="fas fa-tshirt sideFontAwesome"></i>} />

                <Rightsolobtn name={'Pants'} icon={<span class="material-icons-outlined">
                            airline_seat_legroom_extra
            </span>} />

                <Rightsolobtn name={'Socks'} icon={<i class="fas fa-socks sideFontAwesome"></i>} />

                <Rightsolobtn name={'Shoes'} icon={<i class="fas fa-shoe-prints sideFontAwesome"></i>} />

                <div>
        <button onClick={this.handleToAboutPage}>
          aboutページへ
        </button>
      </div>
            </div>
        )
    }
}

// export default Rightbtn

export default withRouter(Rightbtn)
