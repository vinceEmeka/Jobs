
function FilterList () {
 return(
  <div className="select-container">
   <select className="select" name="filter" id="filter">
       <option value="">Choose Location</option>
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
    <option value="">Work Model</option>
    <option value="full-time">On-site</option>
    <option value="part-time">Hybrid</option>
    <option value="contract">Remote</option>
  </select>
  </div>
 );
}

export default FilterList