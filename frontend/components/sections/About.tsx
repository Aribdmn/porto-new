import React from "react";

const About = () => {
	return (
		<section
			className="py-32 px-8 md:px-12 bg-surface-container-low"
			id="about"
		>
			<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
				<div className="md:col-span-5 relative">
					<div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-high relative z-10 group">
						<img
							alt="James Miller Professional Portrait"
							className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
							data-alt="Professional portrait of Me"
							src="/pp.avif"
							loading="lazy"
							width="500"
						/>
						<div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
					</div>
					{/* <!-- Asymmetric Frame --> */}
					<div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 rounded-2xl -z-0"></div>
				</div>
				<div className="md:col-span-7">
					<h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight mb-8">
						Passionate about building intuitive,
						<span className="text-primary-dim">user-centric</span> software
						applications...
					</h2>
					<div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
						<p>
							With a strong background as a survey programmer, I specialize in
							transforming complex logic and data requirements into reliable,
							user-friendly digital solutions. My experience has shaped a
							detail-oriented mindset, with a focus on accuracy, performance,
							and seamless user experiences.
						</p>
						<p>
							As I expand into software development, I work with modern
							technologies such as React, Next.js, Laravel, and Flutter to build
							scalable and efficient applications. I aim to bridge the gap
							between data, functionality, and design—ensuring every product is
							not only technically robust but also intuitive to use.
						</p>
						<p>
							I believe every element should serve a purpose, whether developing
							survey systems or full-stack applications, with a consistent focus
							on delivering clean, performant, and impactful digital
							experiences.
						</p>
					</div>
					{/* <div className="mt-10 grid grid-cols-2 gap-8">
						<div>
							<div className="text-4xl font-extrabold text-on-surface tracking-tighter">
								40+
							</div>
							<div className="text-sm font-label uppercase tracking-widest text-primary font-bold mt-1">
								Apps Delivered
							</div>
						</div>
						<div>
							<div className="text-4xl font-extrabold text-on-surface tracking-tighter">
								5.0
							</div>
							<div className="text-sm font-label uppercase tracking-widest text-primary font-bold mt-1">
								Average Rating
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default About;
