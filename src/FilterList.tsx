
function FilterList () {
 return(
  <div className="select-container">
   <select className="select" name="filter" id="filter">
       <option value="">Select Location</option>
    <option value="remote">Remote</option>
    <option value="usa">USA</option>
    <option value="germany">Germany</option>
    <option value="nigeria">Nigeria</option>
    <option value="canada">Canada</option>
    <option value="uk">UK</option>
    <option value="india">India</option>
    <option value="uae">UAE</option>
    <option value="australia">Australia</option>
   </select>

   <select className="select">
    <option value="">Select Job Type</option>
    <option value="full-time">Full-time</option>
    <option value="part-time">Part-time</option>
    <option value="contract">Contract</option>
    <option value="internship">Internship</option>
  </select>
  </div>
 );
}

export default FilterList