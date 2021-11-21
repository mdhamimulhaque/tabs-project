import { useState,useEffect } from 'react';
import './App.css';
import { FaAngleDoubleRight } from "react-icons/fa";
import Data from "./Data";

function App() {

  const [ jobs,setJobs ] = useState(Data);
  const [ value,setValue ] = useState(0);
 
  const { dates,company,duties,title,i } = jobs[value];

  return (
    <>
      <header>
        <h2>Experience</h2>
        <hr />
      </header>
      <main>
        <section className="btn-box">
          {
            jobs.map((com,index)=>{
              return(
                <button 
                onClick={()=>setValue(index)}
                className={`btn ${value === index && "active"} `}
                >
                  {com.company}
                </button>
              )
            })
            }
        </section>
        <section className="info-box">
          <h4>{title}</h4>
          <h5>{company}</h5>
          <p>{dates}</p>
          <article>
            {
              duties.map(( duty,index ) =>{
                return(
                  <div className="duty-text" key={index}>
                    <FaAngleDoubleRight style={{color:"#F26457"}}/>
                    <p>{duty}</p>
                  </div>
                )
              })
            }
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
