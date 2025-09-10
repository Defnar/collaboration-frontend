
export default function JobCard({ job }) {
  return (
    <div className="bg-white bg-opacity-70 backdrop-blur-md p-4 rounded-lg shadow hover:scale-105 transition transform">
      <h2 className="text-lg font-bold">{job.title}</h2>
      <p className="text-sm">{job.company}</p>
      <p className="text-sm text-gray-700">{job.location}</p>
    </div>
  );
} 