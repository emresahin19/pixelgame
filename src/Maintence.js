import { Component } from "react";
import styles from '../styles/Home.module.css'
import Char from "./Char";
import Controls from "./Controls";

class Maintence extends Component {
    constructor(props){
        super(props);
        this.state = {
            jumped: false,
            moveX: 0,
            wayX: -1,
            motion: null,
            motionvalue: '',
            motioning: -5,
        }
    }

    render(){
        return(
            <div className={styles.maintence}>
                <div className={styles.backgroundMove} style={{backgroundPosition: `${(this.state.moveX - 1)}%, 0%`}}></div>
                <Controls 
                    controller={
                        (key) => {
                        this.setState({
                            [key.obj]: key.value
                        })
                    }}
                />
                <Char
                    jump={this.state.jumped}
                    wayX={this.state.wayX}
                    motion={this.state.motion}
                    motionvalue={this.state.motionvalue}
                    motioning={this.state.motioning}
                />
            </div>
        )
    }
}
export default Maintence;