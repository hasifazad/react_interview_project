import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ItemSection from './components/ItemSection';
import axios from 'axios';

function App() {

  let [user, setuser] = useState()

  useEffect(() => {
    let token = {
      Phone: 7449001874,
      otp: 6513
    }
    axios.post('https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login', {
      phone: "7449001874",
      otp: "6513"
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <ItemSection />
      <Footer />

    </div>
  );
}

export default App;
