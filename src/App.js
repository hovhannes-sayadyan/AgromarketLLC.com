import './App.css';
import Contact from './Pages/Contact/contact';
import Home from './Pages/Home/home';
import ResultsList from './Pages/ResultList/resultsList';
import Products from './Pages/Products/products';
import About from './Pages/About/about';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { memo,useState } from 'react';
import ProductAll from './Pages/ProductAll/productAll';
import AboutArm from './PagesArm/About/aboutArm';
import ContactArm from './PagesArm/Contact/contactArm';
import HomeArm from './PagesArm/Home/homeArm';
import ProductsArm from './PagesArm/Products/productsArm';
import ResultsListArm from './PagesArm/ResultList/resultsListArm';
import {HiLanguage} from 'react-icons/hi2'
import {IoIosArrowBack} from 'react-icons/io'

function App() {

  const [Close,SetClose] = useState(true)
  const [Show,SetShow] = useState(true)
  const [Armenian,English] = useState(false)

  return (
   <div>
    <div id={Armenian?"None":`AppArm`}>
      <header className='HeaderTrue' id={Close?`CloseHeader`:`OpenHeader`}>
      <div className="LogoNameDiv">
        <h1 className={Close?"NameMargin":"Name"}>AGROMARKET</h1>
      </div>
      <div className="UlDiv">
        <ul  className="LinkUl" id={Close?`CloseUl`:`OpenUl`}>
          <li className="LiLink">
            <a href="#results" className="LiLinkA">
              RESULTS
            </a>
          </li>
          <li className="LiLink">
            <a href="#Products" className="LiLinkA">
              PRODUCTS
            </a>
          </li>
          <li className="LiLink">
            <a href="#About" className="LiLinkA">
              ABOUT
            </a>
          </li>
          <li className="LiLink">
            <a href="#Contact" className="LiLinkA">
              CONTACT
            </a>
          </li><div className="LanguageDiv">
       <a onClick={()=>{
          if (Armenian===true) {
            English(false)
            console.log(Armenian);
          } else {
            English(true)
          }
        }}>
       </a>
       <a>
       <HiLanguage className='Arm' onClick={()=>{
          if (Armenian===true) {
            English(false)
          } else {
            English(true)
          }
        }}/>
        </a>
      </div>
        </ul>
      </div>
      <AiOutlineMenu onClick={()=>{
        SetClose(!Close)
      }} className={Close?`OpenMenuBar`:`CloseMenuBar`}/>
      <AiOutlineClose onClick={()=>{
        SetClose(!Close)
      }} className={Close?`CloseMenuBar`:`OpenMenuBar`}/>
    </header>
        <div id={Show?`HomeDiv`:`None`}>
          <Home />
        </div>
        <div id={Show?'results':`None`}>
          <ResultsList/>
        </div>
        <div id={Show?'Products':`None`}>
          <Products/>
          <button onClick={()=>{
            SetShow(false)
            console.log(`CLicked`);
          }} className='Morebutton'>MORE PRODUCTS</button> 
        </div>
        <div id={Show?'About':`None`}>
          <About/>
        </div>
        <button id={Show?`None`:`BackButton`} onClick={()=>{
          SetShow(!Show)
        }}><IoIosArrowBack className='BackL'/></button>
       
        <div id={Show?`None`:`About`}>
            
          <ProductAll/>
        </div>
        <div id='Contact'>
          <Contact/>
        </div>
    </div>
    <section id={Armenian?`App`:`None`}>
    <div className="App">
      <header className='HeaderTrue' id={Close?`CloseHeader`:`OpenHeader`}>
      <div className="LogoNameDiv">
        <h1 className={Close?"NameMargin":"Name"}>ԱԳՐՈՄԱՐԿԵՏ</h1>
      </div>
      <div className="UlDiv">
        <ul  className="LinkUl" id={Close?`CloseUl`:`OpenUl`}>
          <li className="LiLink">
            <a href="#results" className="LiLinkA">
              ԱՊՐԱՆՔՆԵՐ
            </a>
          </li>
          <li className="LiLink">
            <a href="#Products" className="LiLinkA">
              ՊՐՈԴՈՒԿՏՆԵՐ
            </a>
          </li>
          <li className="LiLink">
            <a href="#About" className="LiLinkA">
              ՄԱՍԻՆ
            </a>
          </li>
          <li className="LiLink">
            <a href="#Contact" className="LiLinkA">
              ԿԱՊ
            </a>
          </li><div className="LanguageDiv">
        <HiLanguage className='Arm' onClick={()=>{
          if (Armenian===true) {
            English(false)
          } else {
            English(true)
          }
        }}/>
      </div>
        </ul>
      </div>
      <AiOutlineMenu onClick={()=>{
        SetClose(!Close)
      }} className={Close?`OpenMenuBar`:`CloseMenuBar`}/>
      <AiOutlineClose onClick={()=>{
        SetClose(!Close)
      }} className={Close?`CloseMenuBar`:`OpenMenuBar`}/>
    </header>
        <div id={Show?`HomeDiv`:`None`}>
          <HomeArm/>
        </div>
        <div id={Show?'results':`None`}>
          <ResultsListArm/>
        </div>
        <div id={Show?'Products':`None`}>
          <ProductsArm/>
          <button onClick={()=>{
            SetShow(false)
            console.log(`CLicked`);
          }} className='Morebutton'>ԱՎԵԼԻՆ</button> 
        </div>
        <div id={Show?'About':`None`}>
          <AboutArm/>
        </div>
        <button id={Show?`None`:`BackButton`} onClick={()=>{
          SetShow(!Show)
        }}><IoIosArrowBack className='BackL'/></button>
       
        <div id={Show?`None`:`About`}>
            
          <ProductAll/>
        </div>
        <div id='Contact'>
          <ContactArm/>
        </div>
    </div>
    </section>
   </div>
  );
}

export default memo(App);
