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
					<div className="flex flex-col items-center p-10 bg-surface-container rounded-3xl border border-outline-variant/10">
						<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
							<span className="material-symbols-outlined" data-icon="mail">
								mail
							</span>
						</div>
						<span className="text-on-surface font-headline font-bold text-xl mb-1">
							aribdmn99@gmail.com
						</span>
						<span className="text-on-surface-variant text-sm font-label uppercase tracking-widest">
							Email me anytime
						</span>
					</div>
					<div className="flex flex-col items-center p-10 bg-surface-container rounded-3xl border border-outline-variant/10">
						<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
							<span className="material-symbols-outlined" data-icon="call">
								call
							</span>
						</div>
						<span className="text-on-surface font-headline font-bold text-xl mb-1">
							+62 896-1234-5678
						</span>
						<span className="text-on-surface-variant text-sm font-label uppercase tracking-widest">
							Available Mon-Fri
						</span>
					</div>
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
						href="#"
					>
						<span
							className="material-symbols-outlined group-hover:text-on-primary"
							data-icon="hub"
						>
							hub
						</span>
					</a>
					<a
						className="p-4 bg-surface-container-high rounded-full hover:bg-primary transition-all group"
						href="#"
					>
						<span
							className="material-symbols-outlined group-hover:text-on-primary"
							data-icon="terminal"
						>
							terminal
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
