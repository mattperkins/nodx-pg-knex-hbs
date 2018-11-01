import * as React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
// Modest Grid linked via public/index.html
import './css/reset.css'
import './css/style.css'
// main ("ROOT") component 
class Root extends React.Component {
  state = { lemons: [] }

  componentDidMount() {
      fetch('/users')
      .then(res => res.json())  
      .then(plum => {
        console.log(plum.lime)
        this.setState({ lemons: plum.lime })
      })
  }


render() {
 return (


<div className="wrapper">
<div className="row">

<div className="col-12">

{this.state.lemons.map(x => <p key={x.id}>{x.description}</p>)}

</div>

</div>
</div>


)// end return
}// end render
}// end component

render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
