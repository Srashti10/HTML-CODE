
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Login from './Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import TodoList from './components/TodoList';
import ChattingPage from './components/ChattingPage';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
     <BrowserRouter>

        {/* <Link to ="/home">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/login">Login</Link> */}
        <Navbar />
        <Routes>
          <Route element = { <Home /> } path='/' />
          <Route element = { <Home /> } path='home' />
          <Route element = { <About /> } path='about' />
          <Route element = { <Login /> } path='login' />
          <Route element = { < EventHandling /> } path='event' />
          <Route element = { < StateManagement /> } path='state' />
          <Route element = { < TodoList /> } path='todo' />
          <Route element = { < ChattingPage /> } path='chatpage' />
          <Route element = { < ProductList /> } path='productlist' />
          <Route element = { < ContactForm /> } path='contactform' />
        </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
