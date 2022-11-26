import { Component } from "react";

function moveFieldByKey(key) {
    const keys = {
      ArrowUp: 'moveUp',
      ArrowDown: 'moveDown',
      ArrowLeft: 'moveLeft',
      ArrowRight: 'moveRight',
      Space: 'jump',
      KeyR: 'attack',
    };
    return keys[key];
}

class Controls extends Component {
    constructor(props){
        super(props);
        this.state = {
            motion: false,
            motioning: -5,
            jump: false,
            jumped: false,
            moveX: 0,
            wayX: -1,
            movements: {
                moveLeft: 1,
                moveRight: -1,
            }
        }
        this.handleMove = this.handleMove.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }
    
    handleKeyDown = (e) => {
        let movement = moveFieldByKey(e.code);
        this.handleMove(movement, true);
    }

    handleKeyUp = (e) => {
        let movement = moveFieldByKey(e.code);
        this.handleMove(movement, false);
    }

    handleMove = async (movement, bool) => {
        await this.handleMotion(movement, bool);
        if(bool){
            if(this.state.movements[movement] !== undefined){
                await this.setState({
                    moveX: this.state.moveX <= 0 ? this.state.moveX + this.state.movements[movement] : 0,
                    wayX: this.state.movements[movement],
                })
                this.sendMove('moveX', this.state.moveX);
                this.sendMove('wayX', this.state.wayX);
            }
            if(movement==='jump'){
                this.handleJump();
            }
        }
    }

    handleJump = async () => {
        await this.setState({
            jumped: true
        })
        await this.sendMove('jumped', this.state.jumped);
        setTimeout(() => {
            this.setState({
                jumped: false
            });
            this.sendMove('jumped', false);
        }, 800);
    }

    handleMotion = async (motion, bool) => {
        this.sendMove('motion', bool);
        if(this.state.motioning < 95){
            await this.setState({
                motioning: this.state.motioning + 20,
            });
        }
        else {
            await this.setState({
                motioning: -5,
            });
        }
        this.sendMove('motioning', this.state.motioning);
        this.sendMove('motionvalue', motion);
        
    }
    
    sendMove = (obj, value) => {
        this.props.controller({
            obj: obj,
            value: value,
        })
    }
    
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    render(){
        return (
            <></>
        )
    }
}
export default Controls;