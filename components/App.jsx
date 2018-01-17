import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
text-align: center;
height: 500px;
width: 300px;
margin: auto;
border: 2px solid lightblue;
background-color: bisque;
`;


const DivOperator = styled.div`
text-align: center;
margin-bottom: 50px;
`;

const ResultBox = styled.div`
text-align: center;
margin-top: 50px;
`;

const ResultLabel = styled.label`
text-align: center;
margin-top: 50px;
`;

const Button = styled.button`
background: red;
border-radius: 8px;
color: white;
`;



export default class App extends React.Component {


    constructor() {
        super()

        this.state = {
           result: null,
           operator: null,
           left: null,
           right: null,

        };
        this.setLabel=this.setLabel.bind(this);
        this.handleAddition=this.handleAddition.bind(this);
        this.handleSoustraction=this.handleSoustraction.bind(this);
        this.handleDivision=this.handleDivision.bind(this);
        this.handleMultiplication=this.handleMultiplication.bind(this);
        this.handleValider=this.handleValider.bind(this);
        
    }
    componentDidMount(){
        
                
              // ca mérite 20 moi je dis
                    
                }


    handleAddition (){
        console.log('addition');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '+'
        }, () => {
            console.log(this.state.operator)
        });

        
      

    }

    handleDivision(){
        console.log('division');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '/'
        }, () => {
            console.log(this.state.operator)
        });

    }

    handleMultiplication () {

        console.log('multi');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '*'
        }, () => {
            console.log(this.state.operator)
        });


    }

    handleSoustraction () {

        console.log('soustraction');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '-'
        }, () => {
            console.log(this.state.operator)
        });

    }

    handleValider(){

        console.log('left', this.state.left)
        console.log('right', this.state.right)
        var left = Number.parseInt(this.state.left, 10)
        var right = Number.parseInt(this.state.right, 10)


        var final = null;

        if(this.state.operator === '+'){
            final = left + right
        }

        else if(this.state.operator === '-'){
            final = left - right
        }

        else if(this.state.operator === '/'){
            final = left / right
        }

        else if(this.state.operator === '*'){
            final = left * right
        }

        const label = document.getElementById('labelo');
        label.innerText = final;

        this.setState({left: null})
        this.setState({right: null})
        this.setState({operator: null})
        this.setState({result: null})

        

        console.log(final)

}
    setLabel(chiffre){

        const label = document.getElementById('labelo');

      

        if(this.state.operator === null){
            this.setState({left: chiffre})
        }else{
            this.setState({right: chiffre})
        }
      
       

    }

  render() {
   
    return (
        
     <Div>
        <h1>Magic Calculator Premium</h1>
<DivOperator>
        <Button onClick={this.handleAddition}>+</Button>
        <Button onClickn={this.handleSoustraction}>-</Button>
        <Button onClick={this.handleMultiplication}>*</Button>
        <Button onClick={this.handleDivision}>/</Button>
        <Button onClick={this.handleValider}>=</Button>
     </DivOperator>   
   
    
          <Button onClick={() => this.setLabel(0)}>0</Button>
          <Button onClick={() => this.setLabel(1)}>1</Button>
          <Button onClick={() => this.setLabel(2)}>2</Button>
          <Button onClick={() => this.setLabel(3)}>3</Button>
          <Button onClick={() => this.setLabel(4)}>4</Button>
          <Button onClick={() => this.setLabel(5)}>5</Button>
          <Button onClick={() => this.setLabel(6)}>6</Button>
          <Button onClick={() => this.setLabel(7)}>7</Button>
          <Button onClick={() => this.setLabel(8)}>8</Button>
          <Button onClick={() => this.setLabel(9)}>9</Button>      
                       
      


        <ResultBox id='labelo'>{this.state.result}</ResultBox>

      </Div>);
  }
}