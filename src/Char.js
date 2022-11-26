import { Component } from "react";
import styles from '../styles/Home.module.css'

class Char extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div
                className={
                    styles.charBody + ' ' + 
                    (this.props.jump ? styles.jumped : '') + ' ' +
                    ((this.props.motion && styles[`char${this.props.motionvalue}`]) ? styles[`char${this.props.motionvalue}`] : styles.charIdle)
                }
                style={{
                    // backgroundPosition: `${this.props.motioning}%, 0%`,
                    transform: this.props.wayX == 1 ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                <img className={
                        styles.attackArrow + ' ' + 
                        (this.props.motion && this.props.motionvalue === 'attack' ? styles.fireArrow : '')
                    }
                    src="img/Arrow.png"
                ></img>
            </div>
        );
    }
}
export default Char;