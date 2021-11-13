import ReactDOM from 'react-dom';
import App from './App';
it("render without crashing",()=>{
    const div= document.createElement('div')

    ReactDOM.render(<App/>,div);
    expect(div.innerHTML).toContain("HI THERE!");

})

