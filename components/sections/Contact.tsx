import React from "react";

const Contact = () => {
	return (
		<section
			className="py-32 px-8 md:px-12 bg-surface-container-low"
			id="contact"
		>
			<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
				<h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-12">
					Let's build your <span className="text-primary-dim italic">app</span>.
				</h2>
				<div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl mt-12">
					<a href="mailto:aribdmn99@gmail.com">
						<div className="flex flex-col items-center p-10 bg-surface-container rounded-3xl border border-outline-variant/10 hover:bg-primary transition-all group">
							<div className="w-12 h-12 bg-primary/10 group-hover:bg-primary-container rounded-full flex items-center justify-center text-primary mb-4 group-hover:text-primary">
								<span className="material-symbols-outlined" data-icon="mail">
									mail
								</span>
							</div>
							<span className="text-on-surface font-headline font-bold text-xl mb-1 group-hover:text-on-primary">
								aribdmn99@gmail.com
							</span>
							<span className="text-on-surface-variant text-sm font-label uppercase tracking-widest group-hover:text-on-primary">
								Email me anytime
							</span>
						</div>
					</a>
					<a href="/resume.pdf" download="Resume.pdf">
						<div className="flex flex-col items-center p-10 bg-surface-container rounded-3xl border border-outline-variant/10 hover:bg-primary transition-all group">
							<div className="w-12 h-12 bg-primary/10 group-hover:bg-primary-container rounded-full flex items-center justify-center text-primary mb-4 group-hover:text-primary">
								<span
									className="material-symbols-outlined"
									data-icon="description"
								>
									description
								</span>
							</div>
							<span className="text-on-surface font-headline font-bold text-xl mb-1 group-hover:text-on-primary">
								Download Resume
							</span>
							<span className="text-on-surface-variant text-sm font-label uppercase tracking-widest group-hover:text-on-primary">
								Available in PDF
							</span>
						</div>
					</a>
				</div>
				<div className="flex gap-6 mt-16">
					<a
						className="p-4 bg-surface-container-high rounded-full hover:bg-primary transition-all group"
						href="#"
					>
						<span
							className="material-symbols-outlined group-hover:text-on-primary"
							data-icon="public"
						>
							public
						</span>
					</a>
					<a
						className="p-4 bg-surface-container-high rounded-full hover:bg-primary transition-all group"
						href="https://github.com/Aribdmn/"
					>
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 fill-current group-hover:text-on-primary"
						>
							<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
						</svg>
					</a>
					<a
						className="p-4 bg-surface-container-high rounded-full hover:bg-primary transition-all group"
						href="https://www.linkedin.com/in/aribdmn99/"
					>
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 fill-current group-hover:text-on-primary"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
