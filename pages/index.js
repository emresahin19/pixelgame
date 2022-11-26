import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Maintence from '../src/Maintence'

class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <Maintence>

        </Maintence>
      </>
    )
  }
}
export default Home;