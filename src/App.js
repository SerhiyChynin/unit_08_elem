import React, {useState} from "react"
import './App.css';


function App() {
    const h1 = React.createElement('h1', {}, 'unit_08')
    const h2 = React.createElement('h2', {
        'className': 'text-orange',
    }, 'header 2')
    const p = React.createElement('p', {
        'style': {
            'color': 'red'
        }
    }, 'this is p')
    const input = React.createElement('input', {
        'defaultValue': '55'
    })
    const p1 = React.createElement('p', {}, 'hi');
    const p2 = React.createElement('p', {}, 'world');
    const div = React.createElement('div', {
        'className': 'text-grey'
    }, p1, p2);

    const val = React.createRef();
    const [out, setOut] = useState();

    function value() {
        let val_1 = val.current.value;
        
        setOut(val_1)
        val.current.value = '';
        if (val_1 !== '') return setOut(val_1); 
    }

    console.log(out)
    return (
        <>
            {h1}
            {h2}
            {p}
            {div}
            {input}
            <div>
            <input type="text" ref={val}/>
                <button onClick={value}>Push</button>
            </div>
            <ul>
                {out}
                </ul>
        </>
    )
}

export default App;