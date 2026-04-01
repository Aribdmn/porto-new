import React from "react";

const Skills = () => {
	return (
		<section className="py-32 px-8 md:px-12" id="skills">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
					<div className="max-w-xl">
						<h2 className="text-4xl font-headline font-bold tracking-tight mb-4">
							Technical Stack
						</h2>
						<p className="text-on-surface-variant">
							The tools and languages I leverage to build robust, scalable
							mobile applications across platforms.
						</p>
					</div>
					<div className="flex gap-2 text-on-surface-variant font-label text-xs uppercase tracking-widest border-b border-outline-variant/20 pb-2">
						<span>Expertise</span>
						<span className="text-primary-dim">/</span>
						<span>Full-Stack Mobile</span>
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
					{/* <!-- Skill Card 1 --> */}
					<div className="group p-8 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center">
						<div className="w-12 h-12 mb-4 flex items-center justify-center text-primary-dim">
							<span
								className="material-symbols-outlined text-4xl"
								data-icon="flutter"
							>
								flutter_dash
							</span>
						</div>
						<span className="font-headline font-bold text-on-surface">
							Flutter
						</span>
					</div>
					{/* <!-- Skill Card 2 --> */}
					<div className="group p-8 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center">
						<div className="w-12 h-12 mb-4 flex items-center justify-center text-primary-dim">
							<span
								className="material-symbols-outlined text-4xl"
								data-icon="dart"
							>
								code
							</span>
						</div>
						<span className="font-headline font-bold text-on-surface">
							Dart
						</span>
					</div>
					{/* <!-- Skill Card 3 --> */}
					<div className="group p-8 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center">
						<div className="w-12 h-12 mb-4 flex items-center justify-center text-primary-dim">
							<span
								className="material-symbols-outlined text-4xl"
								data-icon="javascript"
							>
								javascript
							</span>
						</div>
						<span className="font-headline font-bold text-on-surface">
							JavaScript
						</span>
					</div>
					{/* <!-- Skill Card 4 --> */}
					<div className="group p-8 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center">
						<div className="w-12 h-12 mb-4 flex items-center justify-center text-primary-dim">
							<span
								className="material-symbols-outlined text-4xl"
								data-icon="nextjs"
							>
								layers
							</span>
						</div>
						<span className="font-headline font-bold text-on-surface">
							Next.js
						</span>
					</div>
					{/* <!-- Skill Card 5 --> */}
					<div className="group p-8 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center">
						<div className="w-12 h-12 mb-4 flex items-center justify-center text-primary-dim">
							<span
								className="material-symbols-outlined text-4xl"
								data-icon="firebase"
							>
								database
							</span>
						</div>
						<span className="font-headline font-bold text-on-surface">
							Firebase
						</span>
					</div>
					{/* <!-- Skill Card 6 --> */}
					<div className="group p-8 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-all duration-300 flex flex-col items-center text-center">
						<div className="w-12 h-12 mb-4 flex items-center justify-center text-primary-dim">
							<span
								className="material-symbols-outlined text-4xl"
								data-icon="swiftui"
							>
								smartphone
							</span>
						</div>
						<span className="font-headline font-bold text-on-surface">
							SwiftUI
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
