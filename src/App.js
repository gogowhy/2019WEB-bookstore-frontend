import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Navi from './Navi/Navi'
import Login from './Login';
import register from './register';
import cart from './cart';
import bookview from './bookview';
import order from './order'
class App extends React.Component {
render(){
return(
<Router >
                <div>
<Route exact path="/" component={Navi} />
<Route path="/Login" component={Login} />
<Route path="/register" component={register} />
<Route path="/cart" component={cart}/>
<Route path="/bookview" component={bookview}/>
<Route path="/order" component={order}/>
</div>
</Router>
)
}
}
export default App;

