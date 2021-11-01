import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">Testing</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign in</a>
                </div>
            </header>
            <main>
              <Route path="/product/:id" component={ProductScreen}></Route>
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

