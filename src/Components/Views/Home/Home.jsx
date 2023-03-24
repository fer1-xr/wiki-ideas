import React from "react";

//Components
import SearchBar from "../../Header/SearchBar";

//React Router
import { useLocation } from "react-router";

//React router dom
import { Link } from "react-router-dom";

//Components
import ActionAreaCard from "./ActionAreaCard";


//Material UI Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//CSS
import "./Home-styles.css";

const HomeItemCard = ({url, title})=>{

  console.log(url, title)
  return(
    <div className="item">
      <img src={url} alt={title} ></img>
      <h4>{title}</h4>
    </div>
  )
}

const cardItem = [
  {
    id:1,
    url:"https://i.ibb.co/2F9th3Q/undraw-writer-q06d.png",
    title:"Write your Articles"
  },
  {
    id:2,
    url:"https://i.ibb.co/jb3jFpg/undraw-Share-link-re-54rx.png",
    title:"Share your knowledge"
  },
  {
    id:3,
    url:"https://i.ibb.co/j8sCCN5/undraw-Online-collaboration-re-bkpm.png",
    title:"Collaborative content"
  }
]


const Home = () => {
  return (
    <>
     <div className="home-container">
      <img src="https://i.ibb.co/bHqm1F3/Wikiideas-Home.jpg" alt="wikiideaslogo_img" ></img>
      <h3>Search about any topic and explore the articles.</h3>
      <SearchBar/>

    <div className="cards-container">
  {cardItem.map((card)=>(
      <HomeItemCard key={card.id} url={card.url} title={card.title} /> 
  ))}
    </div>
    <div className="container-two" >
    <img src="https://i.ibb.co/1vhTqNK/undraw-Startup-life-re-8ow9.png" style={{marginTop:"4rem", height:"250px"}} alt="" />
    
    <div className="text-and-button">
    <h2>Post your first article</h2>
    <button className="start-button" ><Link to="/createarticle" >
      START</Link></button>
    </div>
    </div>

    <div className="footer-container">
      <div className="list" >
      <span>WikiIdeas</span>
      <ul>
        <li>Write Articles</li>
        <li>Share your Knowledge</li>
        <li>Collaborative Content</li>
      </ul>
      </div>
      <div className="social-media">
      <span>Social Media</span>
      <div className="icons" >
        <Link style={{textDecoration:"none", color:"#2f2f2f"}} to="">
        <TwitterIcon/>
        </Link>
        <Link style={{textDecoration:"none", color:"#2f2f2f"}} to="" >
        <FacebookIcon/>
        </Link>
        <Link style={{textDecoration:"none", color:"#2f2f2f"}} to="" >
        <LinkedInIcon/>
        </Link>
      </div>
      </div>
      <div className="info" >
        <p style={{fontFamily:"Readex Pro, sans-serif", fontWeight:"bold", color:"#2f2f2f"}} >This webapp:<span style={{color:"#4a4a4a"}}> Builded with React.js</span></p>
      </div>
    </div>
     </div>
    </>
  );
};

export default Home;
