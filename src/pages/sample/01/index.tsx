import Main from '../../../components/Layout/Main';

export default function Index() {
	const handleClick = () => {
		alert('ok');
	};

	return (
		<Main>
			<h1>Index</h1>
			<p>
				<button onClick={handleClick}>実行</button>
			</p>
		</Main>
	);
}
