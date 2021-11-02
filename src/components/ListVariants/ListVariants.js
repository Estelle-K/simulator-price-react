
const ListVariants = ({ variants }) => {

	return (
				!variants.length ? (
					<h1>No Runtime Found</h1>
				) : (
					variants.map((variant) => (
						console.log(variant)
					))
				)
			);
};

export default ListVariants;
