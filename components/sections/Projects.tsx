import React from "react";

const Projects = () => {
	return (
		<section className="py-32 px-8 md:px-12 bg-surface" id="projects">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col items-center text-center mb-16">
					<h2 className="text-4xl font-headline font-extrabold tracking-tighter mb-8">
						Selected Projects
					</h2>
					{/* <!-- Filters --> */}
					<div className="flex p-1 bg-surface-container-low rounded-full">
						<button className="px-8 py-2.5 rounded-full bg-primary text-on-primary font-headline font-bold text-sm transition-all">
							All
						</button>
						<button className="px-8 py-2.5 rounded-full text-on-surface-variant font-headline font-bold text-sm hover:text-on-surface transition-all">
							Mobile Apps
						</button>
						<button className="px-8 py-2.5 rounded-full text-on-surface-variant font-headline font-bold text-sm hover:text-on-surface transition-all">
							Web Apps
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* <!-- Project Card 1 --> */}
					<div className="group flex flex-col bg-surface-container rounded-[2rem] overflow-hidden hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
						<div className="aspect-[4/5] overflow-hidden">
							<img
								alt="Fintech App UI"
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
								data-alt="Modern mobile app UI showing dark fintech charts"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9hFCrTsGpo4W0MoI_zm6ldddzxUuwYtIvp4OrWnSZvh_CF8eAfcEsAHTh1eW5bg3c0ifZeTBBhquOuAYjPyZAAMIskc2ueDAMIGUpI7JfNz0kZvo6iWEO1tX687EAGzCH0C4rcfrSopCyDN4i2xYT3L0moLeCtk9le5-ymOHSVRP4SFn2TOwm6EXbpNG6CSpaEtkDXv8gwDs3-KbVR5T2LN0IEsmXI1OpbyIupNU-qpLWy3osRVoFL9RMWji6CROcQnvk3FL5oYE"
							/>
						</div>
						<div className="p-8 flex flex-col flex-grow">
							<div className="flex gap-2 mb-4">
								<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label font-bold tracking-widest uppercase">
									Flutter
								</span>
								<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label font-bold tracking-widest uppercase">
									Firebase
								</span>
							</div>
							<h3 className="text-2xl font-headline font-bold mb-3">
								NeoVault
							</h3>
							<p className="text-on-surface-variant text-sm line-clamp-2 mb-8">
								A high-security cryptocurrency wallet featuring biometric auth
								and real-time market tracking.
							</p>
							<div className="mt-auto flex gap-4">
								<button className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2">
									<span
										className="material-symbols-outlined text-lg"
										data-icon="visibility"
									>
										visibility
									</span>
									Preview
								</button>
								<button className="p-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-high transition-colors">
									<span className="material-symbols-outlined" data-icon="code">
										code
									</span>
								</button>
							</div>
						</div>
					</div>
					{/* <!-- Project Card 2 --> */}
					<div className="group flex flex-col bg-surface-container rounded-[2rem] overflow-hidden hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
						<div className="aspect-[4/5] overflow-hidden">
							<img
								alt="Fitness Tracking App"
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
								data-alt="Mobile app interface for a yoga and fitness tracker"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9CFRiaOgxcfHLICVYKuKpVD4ABo3bRrkEHaXzSRN95-T2PjZo8G8PQM7sCxd7YtwtXFhHLWq6nsFrpNiCY4bcfgo4URtufpDTOS70bKmWvofp7iX6EMCO-refDamcmhqcT1dhXkpK157mhSiTsvJD9Sfx_pMITQghjdwY5Iib0s9PdVGnouAPQrauJ4Ty4pADNovR39o0dG31CTt3mQq-Y9uKqgyI4J65sT0JaJEzArud26Xv1hTRSLdFCJECa6yroiGW-9c3C2A"
							/>
						</div>
						<div className="p-8 flex flex-col flex-grow">
							<div className="flex gap-2 mb-4">
								<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label font-bold tracking-widest uppercase">
									React Native
								</span>
								<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-label font-bold tracking-widest uppercase">
									SwiftUI
								</span>
							</div>
							<h3 className="text-2xl font-headline font-bold mb-3">ZenFlow</h3>
							<p className="text-on-surface-variant text-sm line-clamp-2 mb-8">
								Personalized yoga instructor with AI-driven pose correction and
								meditation guides.
							</p>
							<div className="mt-auto flex gap-4">
								<button className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2">
									<span
										className="material-symbols-outlined text-lg"
										data-icon="visibility"
									>
										visibility
									</span>
									Preview
								</button>
								<button className="p-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-high transition-colors">
									<span className="material-symbols-outlined" data-icon="code">
										code
									</span>
								</button>
							</div>
						</div>
					</div>
					{/* <!-- Project Card 3 --> */}
					<div className="group flex flex-col bg-surface-container rounded-[2rem] overflow-hidden hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
						<div className="aspect-[4/5] overflow-hidden">
							<img
								alt="E-commerce Dashboard"
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
								data-alt="Web dashboard showing sales analytics for an e-commerce platform"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt2PXPL4Sc_WStWmCqxXnKiq5VUz7rtK_oM4voqAQKQ9Hm-Xu8WovkQqK3NwAO-wsItqzYkP7Xtyhfh1VgUIH4oXkU6mP9b8rH61DkaqHlli6gzB3JIRVX10JEAqu2ohpULo6zp2ppIQTdkXBtIzSCKNI1LKW4au_hHN9t5TJul8kZe6OuAApNM-hIwuL3UpVpEGizrGY4uh9q8AGQWhqTPhN7rcTyiPD7ogoQDrt0-Xw2xLba51OBflVuXVgTqq49Zuri3TOb4nE"
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
								LuxeStore
							</h3>
							<p className="text-on-surface-variant text-sm line-clamp-2 mb-8">
								Premium e-commerce platform with head-less CMS and
								lightning-fast checkout experience.
							</p>
							<div className="mt-auto flex gap-4">
								<button className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2">
									<span
										className="material-symbols-outlined text-lg"
										data-icon="visibility"
									>
										visibility
									</span>
									Preview
								</button>
								<button className="p-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-high transition-colors">
									<span className="material-symbols-outlined" data-icon="code">
										code
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
