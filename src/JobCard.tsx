import React, { useState } from "react";



type CardProps = {
 title: string;
 location: string;
 salary: string;
 details: string
}



  

function JobCard(props: CardProps) {

  const [isVisible, setIsVisible] = useState(false); 
  const toggleDetails = (): void => {
    setIsVisible(prev => !prev); 
  };

 return(
  
  <div className="card fade-in">
  <h2>{props.title}</h2>
  <p>{props.location}</p>
  <h3 className="salary">{props.salary}</h3>
<button onClick={toggleDetails}>
        {isVisible ? "Hide Details" : "Show Details"} 
      </button>

      {isVisible && (
        <p className="fade-in">{props.details}</p>
      )}
 
  </div>
 
 
 );
}


export default JobCard