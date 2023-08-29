import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
	const linkRows = [];
	for (let i = 1; i < 7; i++) {
		const id = ('00' + i).slice(-2);
		const tableRow = (
			<tr key={`tr-${id}`}>
				<td>
					<Link href={`/base/${id}`}>{id}</Link>
				</td>
				<td key={`sampleList${id}`}>
					<Link href={`/sample/${id}`}>{id}</Link>
				</td>
			</tr>
		);
		linkRows.push(tableRow);
	}

	return (
		<main className={styles.main}>
			<Image
				className={styles.logo}
				src="/next.svg"
				alt="Next.js Logo"
				width={450}
				height={92}
				priority
			/>
			<h2>Introduction to front-end by Next.js</h2>

			<Link href="/test/00">
				<h1 style={{ fontSize: '2em' }}>Go Test</h1>
			</Link>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>Base</th>
						<th>Sample</th>
					</tr>
				</thead>
				<tbody>{linkRows}</tbody>
			</table>
		</main>
	);
}
