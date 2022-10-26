import React, { Component } from 'react';
import style from "./css/Math.module.css"


export default class Math extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef()
    this.state = {
      sum: "",
      multi: ""


    }
  }
  render() {


    const showanswer = () => {
      let In_Value = this.input.current.value
      let convert = Number(In_Value)
      let Counter = 0
      let Array = []

      for (let i = 0; i <= convert; i++) {
        Counter = Counter + i

        Array.push(Counter)
        this.setState({
          sum: Array.map(element => <p key={element} className={style.p}> Number is{element}</p>)
        })

        console.log(Counter);

      }
    }
    const multiplying = () => {
      let In_Value = this.input.current.value
      let convert = Number(In_Value)
      let Counter_m = 1
      let Array_m = []

      for (let i = 1; i <= convert; i++) {
        Counter_m = Counter_m * i
        console.log(Counter_m);

        Array_m.push(Counter_m)
        this.setState({
          multi: Array_m.map(mul => <p key={mul} className={style.p}> Number is{mul}</p>)
        })



      }

    }

    const Time = new Date()






    return (


      <div className={style.center}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">

        </link>
        <h2 className={style.time}>{Time.getHours()} : {Time.getMinutes()} : {Time.getSeconds()}</h2>
        <input ref={this.input} className={style.input} />
        <button onClick={showanswer} className={style.button}> show the total Answer </button>
        <button onClick={multiplying} className={style.button2}>show to multiply</button>

        <h2 className={style.h2}>Number <br />
          calculation <br />
          program</h2>
        <div className={style.divNumber}>

          {this.state.sum}

        </div>
        <div className={style.divnumber2}>
          {this.state.multi}
        </div>
        <div className={style.info}>
        <details>
          <summary>program info</summary>
          <p>Enter the desired number in the field there are two option at the bottom of the page <br />
          <b>total answer : </b>displays the sum of the numbers before the number <br />
          <b>show to multiply : </b>show the multiplication of the number before the entered number</p>
        </details>
        </div>
        <div className={style.picture}></div>

      </div>
    );
  }
}

