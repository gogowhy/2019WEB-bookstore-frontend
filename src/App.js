import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Navi from './Navi/Navi'
import Login from './Login';
import register from './register';
import cart from './cart';
import order from './order';
import bookview from './bookview';
import admin from './admin';
import bookmanagement from'./bookmanagement/bookmanagement';
import usermanagement from'./usermanagement/usermanagement';
import notfound from'./notfound/notfound';

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
<Route path="/admin" component={admin}/>
<Route path="/bookmanagement" component={bookmanagement}/>
<Route path="/usermanagement" component={usermanagement}/>
<Route path="/notfound" component={notfound}/>
</div>
</Router>
)
}
}
export default App;

