


// const jobs = [
//   { id: 10, title: "Frontend Developer", location: "Remote", workModel: "Remote" },
//   { id: 9, title: "Backend Engineer", location: "New York", workModel: "Hybrid" },
//   { id: 8, title: "UI/UX Designer", location: "Berlin", workModel: "On-site" },
//   { id: 7, title: "Product Manager", location: "Remote", workModel: "Remote" },
//   { id: 6, title: "Blockchain Developer", location: "San Francisco", workModel: "Hybrid" },
//   { id: 5, title: "Mobile App Developer", location: "Lagos", workModel: "Remote" },
//   { id: 4, title: "DevOps Engineer", location: "London", workModel: "Hybrid" },
//   { id: 3, title: "Data Scientist", location: "Toronto", workModel: "Remote" },
//   { id: 2, title: "Cybersecurity Analyst", location: "Dubai", workModel: "On-site" },
//   { id: 1, title: "Full Stack Developer", location: "Sydney", workModel: "Hybrid" }
// ];
function SearchBar() {
  

  return (
   <div className="search-container">
   <input className="search-bar"
    type="text" 
    id="search" 
    placeholder="Search by job title..."
    />

   </div>
  );
}

export default SearchBar