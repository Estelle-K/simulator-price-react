import { useState, useEffect } from 'react';
import ListVariants from '../ListVariants/ListVariants.js';

const FetchData = () => {
	const [instances, setInstances] = useState([]);
	const [variants, setVariants] = useState([]);
	const [flavors, setFlavors] = useState([]);

	useEffect(() => {
		requestInstances();
	}, [variants]);

	async function requestInstances() {
		const response = await fetch(
			'https://api.clever-cloud.com/v2/products/instances'
		);
		const json = await response.json();
		setInstances(json);
		getVariants();
	}

	function getVariants() {
		let variants = instances.map(instance => {
			let flavors = instance.flavors.map(flavor => {
			  return {
				flavor_name: flavor.name,
				cpus: flavor.cpus,
				gpus: flavor.gpus,
				ram: flavor.mem,
				price: flavor.price * 41.904,
			  };
			});
			return {
			  name: instance.variant.name,
			  logo: instance.variant.logo,
			  id: instance.variant.id,
			  flavors: flavors,
			};
		  });
		setVariants(variants);
		setFlavors(flavors);
	}

	return <ListVariants variants={variants} />;
};

export default FetchData;
