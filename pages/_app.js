import '@/styles/globals.scss';
import SideBar from '../components/sidebar/Sidebar';

export default function App({ Component, pageProps }) {
	return (
		<SideBar > 
			<Component {...pageProps} />
		</SideBar>
	);
}
 