import Navbar from "@/app/navigation/navBar";
import Footer from "@/app/footer/footer";
import styles from "@/app/about/page.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Learn how Save Point started and our mission to build intelligent, connected software and IoT systems for businesses across New Zealand.",
	alternates: {
		canonical: "/about",
	},
};

export default function About() {
	return (
		<main>
			<Navbar />

			<div className={styles.hero}>
				<h1 className={styles.heroTitle}>About Us</h1>
			</div>

			<div className={styles.content}>
				{/* Origin story */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>
						How Save Point started
					</h2>
					<div className={styles.sectionBody}>
						<p>
							Save Point started as a tiny startup by a
							Software Engineering student. Logan saw a
							major failure in business software that
							exists today and witnessed various ways
							businesses and their staff could better enjoy
							their day-to-day work rather than being
							brought down by slow, uncooperative software.
						</p>
						<p>
							This led to rigorous marketing and plenty of
							demotivating failures on the way to building
							the company Save Point is today. But there
							was another issue out there.
						</p>
						<p>
							The software wasn&apos;t the only problem —
							so were the devices and connecting systems it
							ran on. This led to a big expansion in
							research and exploration into computing and
							devices. Not only did Logan move into an
							amazing software space helping companies
							better produce their products and services
							through their in-house technology, he also
							changed how companies today use devices and
							systems.
						</p>
						<p>
							That&apos;s when Save Point earned its true
							name — the one place where systems, software
							and devices all work in one cohesive space,
							making businesses their own Save Point.
						</p>
					</div>
				</div>

				{/* Two col — mission + values */}
				<div className={styles.grid2}>
					<div className={styles.section}>
						<h2 className={styles.sectionTitle}>
							Our Mission
						</h2>
						<div className={styles.sectionBody}>
							<p>
								Save Point&apos;s mission is to build
								intelligent, connected systems with our
								clients.
							</p>
							<p>
								We strive to create a cohesive experience
								for your business — at the front with your
								customers, and behind the scenes with your
								staff. There&apos;s no single right way of
								doing things, so we work with you, using
								our expertise and experience, to build
								your ideal workflow. Your biggest concerns
								are ours, and we&apos;ll do our best to
								work through them with you.
							</p>
						</div>
					</div>

					<div className={styles.section}>
						<h2 className={styles.sectionTitle}>
							Our Values
						</h2>
						<div className={styles.sectionBody}>
							<h3 className={styles.subHeadPart}>
								Strong Documentation & Future-Proofing
							</h3>
							<p>
								We believe that even after you&apos;ve
								worked with Save Point, there should be
								no reason your systems shouldn&apos;t
								keep working without us. Depending on
								your package and needs, we put
								everything in your facility and make as
								much information about your system
								available to you — so even without Save
								Point, your systems will work as well as
								they did with us.
							</p>
							<p>
								* Disclaimer: Some services, depending on
								contract, may require continued service
								with Save Point. See our{" "}
								<Link href="/legal">
									<u>Legal page.</u>
								</Link>
							</p>
							<h3 className={styles.subHeadPart}>
								Communication & Availability
							</h3>
							<p>
								At Save Point, communication and
								availability to you are priorities we
								take seriously.
							</p>
							<p>
								Depending on contract constraints, we
								maintain strong ongoing communication
								throughout our work together. We
								prioritise your calendar availability
								over ours, and we&apos;ll work around
								your schedule to make sure our services
								stay on track.
							</p>
							<p>
								* Disclaimer: Dependent on contract
								constraints and when both parties are in
								agreement. See our{" "}
								<Link href="/legal">
									<u>Legal page.</u>
								</Link>
							</p>
							<h3 className={styles.subHeadPart}>
								Privacy & Transparency
							</h3>
							<p>
								Privacy & Transparency is something that
								isn&apos;t talked about enough in
								today&apos;s world.
							</p>
							<p>
								At Save Point, we only take, share, or
								sell information if our contract with
								you allows it. If it does, we tell you
								exactly what we&apos;re taking, storing,
								or selling, and how it&apos;s being
								stored or sold, per the agreement. We
								aren&apos;t here to take, use, or steal
								anything that isn&apos;t ours, and we
								hold our clients to the same standard.
							</p>
							<p>
								* Disclaimer: Dependent on contract
								constraints and when both parties are in
								agreement. See our{" "}
								<Link href="/legal">
									<u>Legal page.</u>
								</Link>
							</p>
						</div>
					</div>
				</div>

				{/* Team */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>The Team</h2>
					<div className={styles.sectionBody}>
						<p>
							Save Point started off with just one member
							— Logan.
						</p>
						<p>
							Now Save Point is a bigger — but still small
							— group of like-minded individuals with a
							passion for technology. We contract and
							outsource work when agreed upon, if a
							project requires a larger team. Save Point
							is a well-equipped team, ready to bring our
							expertise into action for every project.
						</p>
						<p>
							* Disclaimer: Dependent on contract
							constraints and when both parties are in
							agreement. See our{" "}
							<Link href="/legal">
								<u>Legal page.</u>
							</Link>
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
