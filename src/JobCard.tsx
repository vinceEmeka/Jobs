type CardProps = {
 title: string;
 location: string;
 salary: string;
}


function JobCard(props: CardProps) {
 return(
  
  <div className="card">
  <h2>{props.title}</h2>
  <p>{props.location}</p>
  <h3 className="salary">{props.salary}</h3>
  <button className="btn">Show Details</button>
  </div>
 
 
 );
}


export default JobCard