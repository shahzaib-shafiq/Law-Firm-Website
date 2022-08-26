import React ,{components, Fragment} from 'react';
import { useState } from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Team from './components/Team';
import Testi from './components/Testi';
import Button from './components/Button';
import axios from 'axios';
import button from './components/Button';
// import components

const App = () => {

const [userData,setUserData]=useState([]);

const [loading,setloading]=useState(false);

const [activeUser,setActiveUser]=useState(false);
const [activeLink,setActiveLink]=useState(false);

const onClickHandler=()=>{
setloading(true);
axios.get('https://randomuser.me/api/')
.then((response)=>{
  console.log(response.data.results);
  setUserData(response.data.results);
}).catch((error)=>{
  console.log(error);
  setloading(true);

}).finally(()=>{
  setloading(false);
setActiveUser(true);
})
}

const icons = [
  'fas fa-user fa-3x',
  'fas fa-envelope fa-3x',
  'fas fa-calender-alt fa-3x',
  'fas fa-map-marker fa-3x',
  'fas fa-phone fa-3x',
  
  
];

const PhraseGenerator=({user})=>{
  const phrases=[

    `Hi My name is  ${user.name.first} ${user.name.last} `,
    `Email Adress   ${user.email} `,
    `My DOB   ${user.dob.date.slice(0,10)} `,
    `Country   ${user.location.country} `,
    `Phone Number    ${user.phone} `,

    
  ];
  return <h1>{phrases[activeLink]}</h1>
}

const activeLinkHandler=(index)=>{
  setActiveLink(index);
}

  return <div>
<Banner/>
<Testi/>
<Skills/>
<Button isActive={activeUser} clicked={onClickHandler} />
{loading ?(

  <h1 className='text-2xl  text-center font-semibold'>Loading...</h1>
):(
    <div className='flex items-start justify-center rounded-2xl  mx-auto  my-12 container scale-x-150 scale-y-150'>
{userData.map((user)=>{
  return(
    <Fragment>
      <img src={user.picture.large} ></img>
      <PhraseGenerator user={user}/>
      <div className='absolute mt-40 space-x-4 my-4 mb-4'>
        {icons.map((icon,index)=>{

          return <i className={icon} key={index} onMouseEnter={()=>activeLinkHandler(index)} >

          </i>
        })}
      </div>
    </Fragment>
    
  )
})}

    </div>
)

}

<Team/>

<Contact/>
<Footer/>

  </div>;
};

export default App;
