import '../styles/index.scss';
import '../styles/reset.scss';

const Header = () => {
	return (
		<header className='header'>
			<h1>LiftLogix</h1>
			<nav>
				<ul className='nav-list'>
					<li>Home</li>
					<li>Log</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
