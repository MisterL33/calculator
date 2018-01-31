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

        this.handleAddition = this.handleAddition.bind(this);
        this.handleSoustraction = this.handleSoustraction.bind(this);
        this.handleDivision = this.handleDivision.bind(this);
        this.handleMultiplication = this.handleMultiplication.bind(this);
        this.handleValider = this.handleValider.bind(this);

    }
    componentDidMount() {


        //  document.getElementById('mainList').addEventListener('click', function(e){ 
        //   var initElem = e.target; 

        //console.log(e.target.innerText); 
        //  });   
    }


    handleAddition() {
        console.log('addition');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '+'
        }, () => {
            console.log(this.state.operator)
        });

    }

    handleDivision() {
        console.log('division');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '/'
        }, () => {
            console.log(this.state.operator)
        });

    }

    handleMultiplication() {

        console.log('multi');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '*'
        }, () => {
            console.log(this.state.operator)
        });


    }

    handleSoustraction() {

        console.log('soustraction');
        const label = document.getElementById('labelo');
        this.setState({
            operator: '-'
        }, () => {
            console.log(this.state.operator)
        });

    }

    handleValider() {

        console.log('left', this.state.left)
        console.log('right', this.state.right)
        var left = Number.parseInt(this.state.left, 10)
        var right = Number.parseInt(this.state.right, 10)


        var final = null;

        if (this.state.operator === '+') {
            final = left + right
        }

        else if (this.state.operator === '-') {
            final = left - right
        }

        else if (this.state.operator === '/') {
            final = left / right
        }

        else if (this.state.operator === '*') {
            final = left * right
        }

        const label = document.getElementById('labelo');
        label.innerText = final;

        this.setState({ left: null })
        this.setState({ right: null })
        this.setState({ operator: null })
        this.setState({ result: null })



        console.log(final)

    }


    mainFunc(e) {
        console.log(e.target.innerText)



      
        var find = /^[0-9]*$/.test(e.target.innerText);
        if (find) {

            if (this.state.operator === null) {
                this.setState({ left: e.target.innerText })
            } else {
                this.setState({ right: e.target.innerText })
            }


        }else{
          
            if(e.target.innerText === '+'){
                this.handleAddition();
            }
            if(e.target.innerText === '='){
                this.handleValider();
            }
            if(e.target.innerText === '-'){
                this.handleSoustraction();
            }
            if(e.target.innerText === '*'){
                this.handleMultiplication();
            }
            if(e.target.innerText === '/'){
                this.handleDivision();
            }

            
        }






    }

    render() {

        return (

            <Div id='mainList' onClick={this.mainFunc.bind(this)}>
                <h1>Magic Calculator Premium</h1>
                <DivOperator id='operator'>
                    <Button>+</Button>
                    <Button>-</Button>
                    <Button>*</Button>
                    <Button>/</Button>
                    <Button>=</Button>
                </DivOperator>

                <div id='list'>
                    <Button >0</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>

                </div>


                <ResultBox id='labelo'>{this.state.result}</ResultBox>

            </Div>);
    }
}