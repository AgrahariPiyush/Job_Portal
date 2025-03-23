import { useEffect, useState } from "react";
import Header from "./Components/Header";
import JobCard from "./Components/JobCard";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/Searchbar";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);

  // Fetching data from Firebase 
  const fetchJobs = async () => {

    const q = query(collection(db, "jobportal"), orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);
    const jobList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      postedOn: doc.data().postedOn.toDate(),
    }));

    setJobs(jobList);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // To customly fetch data based upon filter :

  const fetchJobsCustom = async (jobCriteria) => {

    const q = query(collection(db, "jobportal"),where("type", "==", jobCriteria.type),where("title", "==", jobCriteria.title),where("experience", "==", jobCriteria.experience),where("location", "==", jobCriteria.location),orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);
    const jobList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      postedOn: doc.data().postedOn.toDate(),
    }));

    setJobs(jobList);
  };



  return (
    // <div className="min-h-screen overflow-x-hidden w-full bg-gradient-to-r from-[#374151] via-[#111827] to-[#000000]">
    <div className="min-h-screen overflow-x-hidden w-full bg-[url('bg.png')] bg-cover bg-no-repeat">
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
