import BlurText from "../BlurText";

const Hero = () => {
	return (
		<section
			className="relative min-h-[819px] flex items-center px-8 md:px-12 w-full mx-auto overflow-hidden"
			id="hero"
		>
			<div className="relative z-10 w-full max-w-7xl mx-auto">
				<span className="inline-block text-primary font-headline font-bold tracking-widest uppercase text-xs mb-4">
					Ariyanto Budiman
				</span>
				<h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
					Software{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
						Developer
					</span>
				</h1>
				<p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
					Crafting high-performance mobile experiences with Flutter &amp; React
					Native. I transform complex ideas into seamless digital realities.
				</p>
				<div className="flex flex-wrap gap-4">
					<a
						className="group bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(169,199,255,0.2)] transition-all"
						href="#projects"
					>
						View Projects
						<span
							className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
							data-icon="arrow_forward"
						>
							arrow_forward
						</span>
					</a>
					<a
						className="px-8 py-4 rounded-xl border border-outline-variant/30 text-on-surface font-headline font-bold hover:bg-surface-container-highest transition-colors"
						href="#contact"
					>
						Get in Touch
					</a>
				</div>
			</div>
			{/* <!-- Decorative Background Element --> */}
			<div className="absolute -right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
		</section>
	);
};

export default Hero;
