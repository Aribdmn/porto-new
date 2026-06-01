import React from "react";

const page = () => {
	return (
		<div className="font-body selection:bg-primary-container selection:text-on-primary-container">
			<aside
				className="fixed left-0 top-0 h-full flex flex-col py-8 w-72 z-50 transition-all duration-300 bg-surface-container-lowest"
				id="SideNavBar"
			>
				<div className="px-8 mb-10">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center">
							<span
								className="material-symbols-outlined text-on-primary-container"
								style={{ fontVariationSettings: "'FILL' 1" }}
							>
								architecture
							</span>
						</div>
						<div>
							<h1 className="font-headline font-bold text-on-surface text-lg leading-none">
								Admin Console
							</h1>
							<p className="font-label uppercase tracking-widest text-on-surface-variant text-[10px] mt-1">
								v2.0.4
							</p>
						</div>
					</div>
				</div>
				<nav className="flex-1 flex flex-col gap-1 px-4">
					<a
						className="flex items-center gap-3 px-4 py-2 rounded-lg font-label text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-xl">dashboard</span>
						<span>Overview</span>
					</a>
					<a
						className="flex items-center gap-3 px-4 py-2 rounded-lg font-label text-sm text-primary bg-primary/5 transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-xl">
							folder_special
						</span>
						<span>Projects</span>
					</a>
					<a
						className="flex items-center gap-3 px-4 py-2 rounded-lg font-label text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-xl">
							psychology
						</span>
						<span>Skills</span>
					</a>
					<a
						className="flex items-center gap-3 px-4 py-2 rounded-lg font-label text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-xl">
							work_history
						</span>
						<span>Experience</span>
					</a>
					<a
						className="flex items-center gap-3 px-4 py-2 rounded-lg font-label text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-xl">mail</span>
						<span className="flex-1">Messages</span>
					</a>
				</nav>
				<div className="px-6 mt-6">
					<button className="w-full primary-gradient text-on-primary-container font-headline font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
						<span className="material-symbols-outlined">add</span>
						<span>New Project</span>
					</button>
				</div>
				<div className="mt-auto px-4">
					<a
						className="flex items-center gap-4 px-4 py-3 rounded-xl font-label uppercase tracking-widest text-label-sm text-on-surface-variant hover:text-error hover:bg-error-container/10 transition-all"
						href="#"
					>
						<span className="material-symbols-outlined">logout</span>
						<span>Logout</span>
					</a>
				</div>
			</aside>
			{/* <!-- Main Content Area --> */}
			<main className="ml-72 min-h-screen bg-surface">
				{/* <!-- TopAppBar --> */}
				<header
					className="flex justify-between items-center px-8 w-full sticky top-0 z-40 h-16"
					id="TopNavBar"
				>
					<div className="flex-1 max-w-md">
						<div className="relative group">
							<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl group-focus-within:text-primary transition-colors">
								search
							</span>
							<input
								className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary/40 rounded-xl pl-11 pr-4 py-2 text-on-surface placeholder:text-on-surface-variant/50 transition-all font-body text-sm"
								placeholder="Search resources, projects, assets..."
								type="text"
							/>
						</div>
					</div>
					<div className="flex items-center gap-6 ml-6">
						<button className="relative p-2 rounded-full hover:bg-surface-container-highest/50 text-on-surface-variant transition-colors active:scale-90">
							<span className="material-symbols-outlined">notifications</span>
							<span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-surface"></span>
						</button>
						<button className="p-2 rounded-full hover:bg-surface-container-highest/50 text-on-surface-variant transition-colors active:scale-90">
							<span className="material-symbols-outlined">settings</span>
						</button>
						<div className="h-8 w-px bg-outline-variant/30"></div>
						<div className="flex items-center gap-3">
							<img
								alt="Administrator Avatar"
								className="w-10 h-10 rounded-full object-cover border border-outline-variant/20"
								data-alt="A professional close-up portrait of a modern administrator with a focused expression, wearing high-end spectacles. The lighting is dramatic and moody with a soft blue rim light that matches a premium dark mode UI. The background is a blurred high-tech workspace with subtle glowing server lights, creating a sophisticated and authoritative professional aesthetic."
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFtFoeLtMArQcqGN1UrIGH6PpU1UNa66lo60QHGOPGktlhHMm7B5yXkhF4NqdmpiCY6B_dqiWpMx67XAK6Bw_QOtKnNGUu89Bue6K1CbUXxYb6Tnf3ITAHbIRN3tix5ZL6EIolhiyjZxR8N5Quk-pWsSPlmThLumBdV7ALkSixtOv3o3zP2GDpoL1MvDEXKbF10Ps4GzopwURTOgBmXZ_0_ZqNhX34nVjmChyktK9f6SFrg8HTtqKMCKrZQFBh5j4zLSPDYhNqFUo"
							/>
							<div className="hidden lg:block text-left">
								<p className="font-headline font-bold text-on-surface text-sm leading-tight">
									Alex Sterling
								</p>
								<p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-label">
									Portfolio Architect
								</p>
							</div>
						</div>
					</div>
				</header>
				<div className="p-8 space-y-12">
					{/* <!-- Hero Header Section --> */}
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
						<div>
							<h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight text-on-surface mb-2">
								Project Management
							</h2>
							<p className="text-on-surface-variant font-body text-lg max-w-xl">
								Curate and optimize your professional showcase with advanced
								architectural controls.
							</p>
						</div>
						<button className="primary-gradient text-on-primary-container font-headline font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/10 flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
							<span className="material-symbols-outlined">add_circle</span>
							<span>Create New Entry</span>
						</button>
					</div>
					{/* <!-- Metrics Row (Asymmetric Bento) --> */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="bg-surface-container-low border border-outline-variant/10 rounded-lg p-5">
							<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
								Total Projects
							</p>
							<h3 className="text-2xl font-headline font-bold text-on-surface">
								12
							</h3>
						</div>
						<div className="bg-surface-container-low border border-outline-variant/10 rounded-lg p-5">
							<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
								Active Projects
							</p>
							<h3 className="text-2xl font-headline font-bold text-on-surface">
								8
							</h3>
						</div>
						<div className="bg-surface-container-low border border-outline-variant/10 rounded-lg p-5">
							<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
								Total Views
							</p>
							<h3 className="text-2xl font-headline font-bold text-on-surface">
								1.2k
							</h3>
						</div>
						<div className="bg-surface-container-low border border-outline-variant/10 rounded-lg p-5">
							<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">
								Recent Messages
							</p>
							<h3 className="text-2xl font-headline font-bold text-on-surface">
								5
							</h3>
						</div>
					</div>
					{/* <!-- Main Data Table Container --> */}
					<div className="bg-surface-container rounded-xl overflow-hidden">
						<div className="px-8 py-6 flex justify-between items-center bg-surface-container-high/30">
							<h3 className="font-headline font-bold text-xl text-on-surface">
								Active Repository
							</h3>
							<div className="flex items-center gap-3">
								<button className="p-2 bg-surface rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">
									<span className="material-symbols-outlined text-sm">
										filter_list
									</span>
								</button>
								<button className="p-2 bg-surface rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">
									<span className="material-symbols-outlined text-sm">
										sort
									</span>
								</button>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-surface-container-low/50">
										<th className="px-8 py-4 font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
											Project Name
										</th>
										<th className="px-8 py-4 font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
											Category
										</th>
										<th className="px-8 py-4 font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
											Status
										</th>
										<th className="px-8 py-4 font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
											Last Updated
										</th>
										<th className="px-8 py-4 font-label uppercase tracking-widest text-[10px] text-on-surface-variant text-right">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-outline-variant/5">
									<tr className="group hover:bg-surface-container-high transition-colors">
										<td className="px-8 py-5">
											<p className="font-headline font-bold text-on-surface">
												NeoFlow App
											</p>
										</td>
										<td className="px-8 py-5 text-sm text-on-surface-variant">
											Mobile App
										</td>
										<td className="px-8 py-5">
											<span className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">
												Published
											</span>
										</td>
										<td className="px-8 py-5 text-sm text-on-surface-variant">
											2 days ago
										</td>
										<td className="px-8 py-5 text-right">
											<div className="flex items-center justify-end gap-3">
												<button className="text-on-surface-variant hover:text-primary transition-colors">
													<span className="material-symbols-outlined text-xl">
														edit
													</span>
												</button>
												<button className="text-on-surface-variant hover:text-error transition-colors">
													<span className="material-symbols-outlined text-xl">
														delete
													</span>
												</button>
											</div>
										</td>
									</tr>
									<tr className="group hover:bg-surface-container-high transition-colors">
										<td className="px-8 py-5">
											<p className="font-headline font-bold text-on-surface">
												DataSphere Web
											</p>
										</td>
										<td className="px-8 py-5 text-sm text-on-surface-variant">
											Dashboard
										</td>
										<td className="px-8 py-5">
											<span className="bg-surface-variant text-on-surface-variant text-[10px] font-bold px-2.5 py-1 rounded-full">
												Draft
											</span>
										</td>
										<td className="px-8 py-5 text-sm text-on-surface-variant">
											5 days ago
										</td>
										<td className="px-8 py-5 text-right">
											<div className="flex items-center justify-end gap-3">
												<button className="text-on-surface-variant hover:text-primary transition-colors">
													<span className="material-symbols-outlined text-xl">
														edit
													</span>
												</button>
												<button className="text-on-surface-variant hover:text-error transition-colors">
													<span className="material-symbols-outlined text-xl">
														delete
													</span>
												</button>
											</div>
										</td>
									</tr>
									<tr className="group hover:bg-surface-container-high transition-colors">
										<td className="px-8 py-5">
											<p className="font-headline font-bold text-on-surface">
												Lumina Storefront
											</p>
										</td>
										<td className="px-8 py-5 text-sm text-on-surface-variant">
											E-commerce
										</td>
										<td className="px-8 py-5">
											<span className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">
												Published
											</span>
										</td>
										<td className="px-8 py-5 text-sm text-on-surface-variant">
											1 week ago
										</td>
										<td className="px-8 py-5 text-right">
											<div className="flex items-center justify-end gap-3">
												<button className="text-on-surface-variant hover:text-primary transition-colors">
													<span className="material-symbols-outlined text-xl">
														edit
													</span>
												</button>
												<button className="text-on-surface-variant hover:text-error transition-colors">
													<span className="material-symbols-outlined text-xl">
														delete
													</span>
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="px-8 py-4 flex items-center justify-between bg-surface-container-low/30 border-t border-outline-variant/5">
							<p className="text-[11px] text-on-surface-variant font-label uppercase">
								Showing 3 of 12 Projects
							</p>
							<div className="flex items-center gap-4">
								<button className="p-1 hover:text-on-surface text-on-surface-variant transition-colors disabled:opacity-30">
									<span className="material-symbols-outlined">
										chevron_left
									</span>
								</button>
								<span className="text-xs font-bold text-primary">1</span>
								<button className="p-1 hover:text-on-surface text-on-surface-variant transition-colors">
									<span className="material-symbols-outlined">
										chevron_right
									</span>
								</button>
							</div>
						</div>
					</div>
					{/* <!-- Footer Meta --> */}
					<footer className="pt-8 pb-12 border-t border-outline-variant/5">
						<div className="flex flex-col md:flex-row justify-between gap-8 opacity-40 hover:opacity-100 transition-opacity">
							<div>
								<h4 className="font-headline font-bold text-on-surface text-sm mb-2">
									Portfolio Architect System
								</h4>
								<p className="text-[11px] text-on-surface-variant max-w-xs leading-relaxed">
									Engineered for precision. Every project is an asset in your
									professional legacy. Optimize, deploy, and showcase with the
									Ethereal Architect suite.
								</p>
							</div>
							<div className="flex gap-8 text-[11px] font-label uppercase tracking-widest text-on-surface-variant">
								<a className="hover:text-primary transition-colors" href="#">
									Documentation
								</a>
								<a className="hover:text-primary transition-colors" href="#">
									System Health
								</a>
								<a className="hover:text-primary transition-colors" href="#">
									Support Portal
								</a>
							</div>
						</div>
					</footer>
				</div>
			</main>
		</div>
	);
};

export default page;
