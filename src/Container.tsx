import JobCard from "./JobCard";

function Container () {
 return(
  <div className="card-container">
   <JobCard title="Full Stack Developer" 
   location="Sydney, Australia (Hybrid)" 
   salary ="AUD 100,000 - AUD 150,000 / year" />

   <JobCard title="Content Marketing Specialist"
   location="Remote (Worldwide)"
   salary="$50,000 - $85,000 / year"/>

   <JobCard title="Cybersecurity Analyst"
   location="Dubai, UAE (On-site)"
   salary="AED 180,000 - AED 250,000 / year"/>


   <JobCard title="Technical Support Engineer"
   location="Bangalore, India (On-site)"
   salary="₹10,00,000 - ₹18,00,000 / year"/>

   <JobCard title=" Data Scientist"
   location="Toronto, Canada (Remote)"
   salary="CAD 95,000 - CAD 140,000 / year"/>

   <JobCard title="DevOps Engineer"
   location="London, UK (Hybrid)"
   salary="£70,000 - £110,000 / year"/>

   <JobCard title="Mobile App Developer"
   location="Lagos, Nigeria (Remote)"
   salary="₦8,000,000 - ₦15,000,000 / year"/>
   <JobCard title="Blockchain Developer"
   location="San Francisco, USA (Hybrid)"
   salary=" $110,000 - $160,000 / year"/>
   <JobCard title="Product Manager"
   location="Europe & North America (Remote)"
   salary=" $100,000 - $140,000 / year"/>

   <JobCard title="UI/UX Designer"
   location="Berlin, Germany (On-site)"
   salary="€55,000 - €80,000 / year"/>
   <JobCard title="Backend Engineer"
   location="New York, USA (Hybrid)"
   salary="$90,000 - $120,000 / year"/>
   <JobCard title="Frontend Developer"
   location="Remote"
   salary="$75,000 - $100,000 / year"/>

  </div>
 );
}

export default Container