import Link from 'next/link';
import Layout from '../components/Layout';
import UseStateSample from '../components/UseStateSample';
import Image from '../static/Image';

export default () => (
	<Layout header="Next" title="Top Page" footer="Hivelocity.inc">
			<p>Welcome to next.js!</p>
			<Image fname="bst.png" size="250" />
			<hr/>
			<UseStateSample />
			<Link href="./other">
			  <button>Go to Other &gt;&gt;</button>
			</Link>
	</Layout>
);
