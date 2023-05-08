// import React, { useState, useEffect } from "react";
import joblist from '../../data/joblist'; // use this with list in datasection if not using db
import JobCard from '../JobCard';

const TitleAsc = () => {
	// const [joblist, setJoblist] = useState([]);

	// useEffect(() => {
	//     const local = "http://localhost:4000/api/jobs/titleasc";

	//     fetch(local)
	//         .then((res) => res.json())
	//         .then((res) => {
	//             setJoblist(res);
	//         });
	// }, []);

	return (
		<section className="row">
			{joblist.map((jobs) => (
				<div className="col-xs-12 col-sm-6 col-md-4" key={jobs.id}>
					<JobCard
						id={jobs.id}
						title={jobs.title}
						company={jobs.company}
						date_applied={jobs.date_applied}
						date_interview={jobs.date_interview}
						date_denied={jobs.date_denied}
						reply_info={jobs.reply_info}
					/>
				</div>
			))}
		</section>
	);
};

export default TitleAsc;
