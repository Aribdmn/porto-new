import React, { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase-client";

const Projects = () => {
	const [projects, setProjects] = useState<any[]>([]);

	const fetchProjects = async () => {
		const { error, data } = await supabase.from("projects").select("*");

		// ternary operator to handle error or set projects
		error
			? console.error("Error fetching projects:", error.message)
			: setProjects(data);
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	return (
		<section className="py-32 px-8 md:px-12 bg-surface" id="projects">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col items-center text-center mb-16">
					<h2 className="text-4xl font-headline font-extrabold tracking-tighter mb-8">
						Projects & Experiments
					</h2>
					{/* <!-- Filters --> */}
					{/* <div className="flex p-1 bg-surface-container-low rounded-full">
						<button className="px-8 py-2.5 rounded-full bg-primary text-on-primary font-headline font-bold text-sm transition-all">
							All
						</button>
						<button className="px-8 py-2.5 rounded-full text-on-surface-variant font-headline font-bold text-sm hover:text-on-surface transition-all">
							Mobile Apps
						</button>
						<button className="px-8 py-2.5 rounded-full text-on-surface-variant font-headline font-bold text-sm hover:text-on-surface transition-all">
							Web Apps
						</button>
					</div> */}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group flex flex-col bg-surface-container rounded-[2rem] overflow-hidden hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
						>
							<div className="aspect-[4/5] overflow-hidden">
								<img
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									data-alt="Web dashboard showing sales analytics for an e-commerce platform"
									src={project.image_url}
								/>
							</div>
							<div className="p-8 flex flex-col flex-grow">
								<div className="flex gap-2 mb-4">
									<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label font-bold tracking-widest uppercase">
										Next.js
									</span>
									<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label font-bold tracking-widest uppercase">
										Tailwind
									</span>
								</div>
								<h3 className="text-2xl font-headline font-bold mb-3">
									{project.title}
								</h3>
								<p className="text-on-surface-variant text-sm line-clamp-2 mb-8">
									{project.description}
								</p>
								<div className="mt-auto flex gap-4">
									<a
										href={project.preview_url}
										className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 hover:scale-105 transtition duration-300 ease-in-out"
									>
										<span
											className="material-symbols-outlined text-lg"
											data-icon="visibility"
										>
											visibility
										</span>
										Preview
									</a>

									<a
										href={project.github_url}
										className="p-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-high transition-colors hover:scale-105 transtition duration-300 ease-in-out"
									>
										<span
											className="material-symbols-outlined"
											data-icon="code"
										>
											code
										</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-32">
					<p className="text-on-surface-variant max-w-2xl mx-auto text-center justify-center flex items-center gap-2 font-label uppercase tracking-widest">
						<a
							href="/projects"
							className="group flex items-center gap-2 hover:translate-x-1 transition-transform"
						>
							See all my projects and experiments
							<span
								className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
								data-icon="arrow_forward"
							>
								arrow_forward
							</span>
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Projects;
