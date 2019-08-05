import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

export default () => (
  <App msg="Hello App." />
);
// import Link from 'next/link';
// import Layout from '../components/Layout';
// import UseStateSample from '../components/UseStateSample';
// import Image from '../static/Image';
// import Welcome from '../components/Welcome';
// import Calc from '../components/Calc';
// import Rect from '../components/Rect';
// import App from '../components/App';
//
// export default () => (
// 	<Layout header="Next" title="Top Page" footer="Hivelocity.inc">
// 			<p>Welcome to next.js!</p>
// 			<Image fname="bst.png" size="250" />
//       <App />
// 			<hr/>
// 			<Calc number="100" style={msg} />
// 			<Calc number="200" style={msg} />
// 			<Calc number="300" style={msg} />
// 			<Rect x="100" y="100" w="100" h="100" c="cyan"/>
// 			<Rect x="150" y="150" w="100" h="100" c="magenta"/>
// 			<UseStateSample />
// 			<Link href="./other">
// 			  <button>Go to Other &gt;&gt;</button>
// 			</Link>
// 	</Layout>
// );
