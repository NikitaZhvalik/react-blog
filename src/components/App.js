import Navbar from './Navbar';
import Home from './Home';


function App() {
	return (
		<div className='app'>
			<Navbar />
			<main className='main'>
				<Home />
			</main>
		</div>
	);
}

export default App;