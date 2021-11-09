import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screens/cartScreen';
import HomeScreen from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
;

function App() {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">Testing</Link>
                </div>
                <div>
                    <Link to="/cart">Cart
                    {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )}
                    </Link>
                    <Link to="/signin">Sign in</Link>
                </div>
            </header>
            <main>
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
                  
            </main>
            <footer className="row center">
                All right reserverd
            </footer>
        </div>
        </BrowserRouter>
     );
}

export default App;

