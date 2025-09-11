import { useContext, useEffect } from "react";
import JobCard from "./ProductCard.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "DataWorks",
      location: "NYC",
    },
    {
      id: 3,
      title: "Fullstack Engineer",
      company: "WebSolutions",
      location: "SF",
    },
  ];

  return (
    <div className="p-6">
      {user ? (
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Welcome back, {user.name}!
        </h2>
      ) : (
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          Please log in to see personalized jobs
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
