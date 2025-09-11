import React from "react";
import JobCard from "./ProductCard.jsx";

export default function Dashboard() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote" },
    { id: 2, title: "Backend Developer", company: "DataWorks", location: "NYC" },
    { id: 3, title: "Fullstack Engineer", company: "WebSolutions", location: "SF" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );
}