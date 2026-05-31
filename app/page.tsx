"use client";
import Navbar from "@/components/layouts/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
	return (
		<div>
			<Navbar />
			<main className="md:pt-24 pt-8">
				<Hero />
				<About />
				<Skills />
				<Projects />
			</main>
			<Contact />
		</div>
	);
}
