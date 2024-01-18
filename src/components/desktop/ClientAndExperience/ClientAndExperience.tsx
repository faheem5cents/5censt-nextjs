import React from "react";
import { ClientAndExperienceArray } from "@/constants/ClientAndExperienceArray";
import ClientAndExperienceCard from "./ClientAndExperienceCard";

const ClientAndExperience = ({ description }: { description: string }) => {
	return (
		<>
			<div className="pt-[150px] pb-10 w-full flex flex-col justify-center items-center boxLayout mx-auto">
				<div className="md:max-w-[1140px] flex items-center justify-center">
					<div className="md:mx-[10%]">
						<h2
							className="text-center text-white text-[28px] md:text-[40px] font-bold leading-[1.4] w-4/5 md:w-full mx-auto"
							dangerouslySetInnerHTML={{ __html: description }}
						></h2>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 px-10 mb:px-0">
					<div className="grid">
						<ClientAndExperienceCard
							props={ClientAndExperienceArray[0]}
							index={0}
						/>
						<ClientAndExperienceCard
							props={ClientAndExperienceArray[1]}
							index={1}
						/>
					</div>
					<div className="grid">
						<ClientAndExperienceCard
							props={ClientAndExperienceArray[2]} 
							index={3}
						/>
						<ClientAndExperienceCard
							props={ClientAndExperienceArray[3]}
							index={4}
						/>
					</div>
					<div className="grid">
						<ClientAndExperienceCard
							props={ClientAndExperienceArray[4]}
							index={3}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientAndExperience;
