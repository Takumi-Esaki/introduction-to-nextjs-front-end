import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export type Props = {
	children?: React.ReactNode;
};

export default function Main(p: Readonly<Props>) {
	return (
		<main className={styles.main}>
			<div>
				<header>
					{p.children}
					<Link className={styles.link} href="/">
						Go Back
					</Link>
				</header>
			</div>
		</main>
	);
}
