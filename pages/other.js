import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
	<Layout header="Other" title="Other page" footer="Taka Harada">
	  <p>This is Other page.</p>
		<hr/>
		<div>
		  <Link href="/">
			  <button>&lt;&lt; Back to Top</button>
			</Link>
		</div>
	</Layout>
)
