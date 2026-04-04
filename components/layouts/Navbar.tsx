"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	const list = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<>
			<nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/5">
				<div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
					{/* <!-- Brand Logo --> */}
					<div className="text-xl font-bold tracking-tighter text-primary font-headline">
						<a href="#hero">BudDev!</a>
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
							className="md:hidden p-2 text-primary cursor-pointer active:scale-90 transition-transform touch-manipulation pointer-events-auto relative z-[999]"
							onClick={toggleMobileMenu}
							type="button"
						>
							<span className="material-symbols-outlined">
								{isMobileMenuOpen ? "close" : "menu"}
							</span>
						</button>
					</div>
				</div>
			</nav>

			{/* <!-- Mobile Navigation Menu --> */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="fixed top-[65px] w-full z-40 bg-surface/60 backdrop-blur-xl border-b border-white/5 flex-col p-6"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							duration: 0.1,
							ease: "easeInOut",
						}}
					>
						<motion.ul
							initial="hidden"
							animate="visible"
							variants={list}
							className="flex flex-col gap-4 pb-3"
						>
							<motion.li variants={item}>
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#about"
									onClick={toggleMobileMenu}
								>
									About
								</a>
							</motion.li>
							<motion.li variants={item}>
								{" "}
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#skills"
									onClick={toggleMobileMenu}
								>
									Skills
								</a>
							</motion.li>
							<motion.li variants={item}>
								{" "}
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#projects"
									onClick={toggleMobileMenu}
								>
									Projects
								</a>
							</motion.li>

							<motion.li variants={item}>
								{" "}
								<a
									className="text-[#acabaa] hover:text-primary font-headline font-medium uppercase text-sm"
									href="#contact"
									onClick={toggleMobileMenu}
								>
									Contact
								</a>{" "}
							</motion.li>
						</motion.ul>
						<hr className="border-white/10" />
						<motion.ul initial="hidden" animate="visible" variants={list}>
							<motion.li variants={item}>
								<div className="flex items-center justify-between pt-3">
									<button
										className="bg-[#007BFF] text-white px-8 py-3 rounded-xl font-headline font-bold text-sm"
										onClick={toggleMobileMenu}
									>
										Hire Me
									</button>
								</div>{" "}
							</motion.li>
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
