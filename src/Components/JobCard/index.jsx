import React from 'react';
import dayjs from 'dayjs';

function JobCard(props) {
  // Convert `props.postedOn` to a dayjs date object if needed
  const postedDate = dayjs(props.postedOn);
  const diffInDays = dayjs().diff(postedDate, 'day');

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-slate-200 rounded-md border-black shadow-lg hover:border-blue-400 hover:translate-y-1 hover:scale-105">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p>{props.type} ~ {props.experience} ~ {props.location}</p>
          <div className="flex items-center gap-2">
            {props.skills.map((skill) => (
              <p key={skill} className="text-gray-900 py-1 px-2 rounded-md border border-green-900">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-800">Posted {diffInDays > 1 ? `${diffInDays} days`: `${diffInDays} day`}ago</p>
          <a target='blank' href={props.job_link}>
            <button className="text-blue-500 border border-blue-500 px-7 py-2 rounded-md">
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
