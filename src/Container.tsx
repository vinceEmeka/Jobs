
import JobCard from "./JobCard";


function Container () {
 return(
  <div className="card-container">
   <JobCard title="Full Stack Developer" 
   location="Sydney, Australia (Hybrid)" 
   salary ="AUD 100,000 - AUD 150,000 / year" 
   details="Work with both frontend (React, Vue.js) and backend (Node.js, MongoDB). Deploy scalable applications on cloud platforms."/>

   <JobCard title="Content Marketing Specialist"
   location="Remote (Worldwide)"
   salary="$50,000 - $85,000 / year"
   details="Create engaging content, manage social media, and optimize SEO strategies. Collaborate with designers and developers to improve brand presence."/>

   <JobCard title="Cybersecurity Analyst"
   location="Dubai, UAE (On-site)"
   salary="AED 180,000 - AED 250,000 / year"
   details="Monitor security threats, conduct risk assessments, and implement cybersecurity best practices."/>


   <JobCard title="Technical Support Engineer"
   location="Bangalore, India (On-site)"
   salary="₹10,00,000 - ₹18,00,000 / year"
   details="Provide technical assistance, troubleshoot software issues, and ensure smooth customer experience."/>

   <JobCard title=" Data Scientist"
   location="Toronto, Canada (Remote)"
   salary="CAD 95,000 - CAD 140,000 / year"
   details=" Analyze large datasets, build machine learning models, and optimize data pipelines. Use Python, SQL, and TensorFlow."/>

   <JobCard title="DevOps Engineer"
   location="London, UK (Hybrid)"
   salary="£70,000 - £110,000 / year"
   details="Manage cloud infrastructure (AWS, GCP). Implement CI/CD pipelines and optimize system performance."/>

   <JobCard title="Mobile App Developer"
   location="Lagos, Nigeria (Remote)"
   salary="₦8,000,000 - ₦15,000,000 / year"
   details="Develop cross-platform mobile apps using Flutter or React Native. Optimize performance and ensure seamless user experience."/>
   <JobCard title="Blockchain Developer"
   location="San Francisco, USA (Hybrid)"
   salary=" $110,000 - $160,000 / year"
   details="Build smart contracts on Ethereum and Solana. Work with Web3 libraries and optimize gas fees for decentralized applications."/>
   <JobCard title="Product Manager"
   location="Europe & North America (Remote)"
   salary=" $100,000 - $140,000 / year"
   details="Define product vision, work with cross-functional teams, and oversee feature rollouts. Conduct market research and analyze user feedback."/>

   <JobCard title="UI/UX Designer"
   location="Berlin, Germany (On-site)"
   salary="€55,000 - €80,000 / year"
   details="Design user-friendly interfaces, wireframes, and prototypes using Figma. Conduct user research and improve design systems."/>
   <JobCard title="Backend Engineer"
   location="New York, USA (Hybrid)"
   salary="$90,000 - $120,000 / year"
   details="Develop and maintain server-side logic using Node.js and PostgreSQL. Optimize database performance and handle cloud deployment."/>
   <JobCard title="Frontend Developer"
   location="Remote"
   salary="$75,000 - $100,000 / year"
   details="Build and maintain user interfaces using React, TailwindCSS, and TypeScript. Collaborate with backend teams to integrate APIs."/>

  </div>
 );
}

export default Container