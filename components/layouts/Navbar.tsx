"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	return (
		<nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/5">
			<div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
				{/* <!-- Brand Logo --> */}
				<div className="text-xl font-bold tracking-tighter text-primary font-headline">
					BudDev!
				</div>
				{/* <!-- Desktop Navigation Links --> */}
				<div className="hidden md:flex items-center gap-8">
					<a
						className="text-[#acabaa] hover:text-primary transition-colors duration-300 font-headline tracking-tight text-sm font-medium uppercase"
						href="#about"
					>
						About
					</a>
					<a
						className="text-[#acabaa] hover:text-primary transition-colors duration-300 font-headline tracking-tight text-sm font-medium uppercase"
						href="#skills"
					>
						Skills
					</a>
					<a
						className="text-[#acabaa] hover:text-primary transition-colors duration-300 font-headline tracking-tight text-sm font-medium uppercase"
						href="#projects"
					>
						Projects
					</a>
					<a
						className="text-[#acabaa] hover:text-primary transition-colors duration-300 font-headline tracking-tight text-sm font-medium uppercase"
						href="#contact"
					>
						Contact
					</a>
				</div>
				{/* <!-- Right Actions --> */}
				<div className="flex items-center gap-4">
					<div className="hidden md:flex items-center gap-4">
						<button className="bg-gradient-to-br from-[#007BFF] to-[#005eb9] text-white px-6 py-2.5 rounded-xl font-headline font-bold text-sm tracking-tight active:scale-95 transition-all shadow-[0_32px_64px_-15px_rgba(94,158,255,0.06)]">
							Hire Me
						</button>
					</div>
					{/* <!-- Mobile Menu Toggle --> */}
					<button
						className="md:hidden p-2 text-primary cursor-pointer active:scale-90 transition-transform"
						onClick={toggleMobileMenu}
					>
						<span className="material-symbols-outlined">
							{isMobileMenuOpen ? (
								<motion.span
									key="close"
									initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
									animate={{ opacity: 1, rotate: 0, scale: 1 }}
									exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
									transition={{ duration: 0.25, ease: "easeInOut" }}
								>
									close
								</motion.span>
							) : (
								<motion.span
									key="menu"
									initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
									animate={{ opacity: 1, rotate: 0, scale: 1 }}
									exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
									transition={{ duration: 0.25, ease: "easeInOut" }}
								>
									menu
								</motion.span>
							)}
						</span>
					</button>
				</div>
			</div>
			{/* <!-- Mobile Navigation Menu --> */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="absolute w-full bg-black/60 backdrop-blur-sm border-white/5 flex-col p-6"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							duration: 0.1,
							ease: "easeInOut",
						}}
					>
						<div className="flex flex-col gap-4 pb-3">
							<a
								className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
								href="#about"
								onClick={toggleMobileMenu}
							>
								About
							</a>
							<a
								className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
								href="#skills"
								onClick={toggleMobileMenu}
							>
								Skills
							</a>
							<a
								className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
								href="#projects"
								onClick={toggleMobileMenu}
							>
								Projects
							</a>
							<a
								className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
								href="#contact"
								onClick={toggleMobileMenu}
							>
								Contact
							</a>
						</div>
						<hr className="border-white/10" />
						<div className="flex items-center justify-between pt-3">
							<button
								className="bg-[#007BFF] text-white px-8 py-3 rounded-xl font-headline font-bold text-sm"
								onClick={toggleMobileMenu}
							>
								Hire Me
							</button>
						</div>
					</motion.div>
				)}

				{/* {isMobileMenuOpen && (
					<div className="md:hidden border">
						<input
							className="hidden peer"
							id="mobile-menu-toggle-nav"
							type="checkbox"
						/>
						<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] hidden peer-checked:block transition-opacity duration-300"></div>
						<div className="absolute top-full left-0 w-full bg-[#131313] border-b border-white/5 flex-col p-6 gap-6 hidden peer-checked:flex animate-in slide-in-from-top duration-300">
							<div className="flex flex-col gap-4">
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#about"
								>
									About
								</a>
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#skills"
								>
									Skills
								</a>
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#projects"
								>
									Projects
								</a>
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#contact"
								>
									Contact
								</a>
							</div>
							<hr className="border-white/10" />
							<div className="flex items-center justify-between">
								<button className="bg-[#007BFF] text-white px-8 py-3 rounded-xl font-headline font-bold text-sm">
									Hire Me
								</button>
							</div>
						</div>
					</div>
				)} */}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
