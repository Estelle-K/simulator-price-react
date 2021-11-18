import { useState } from 'react';
import ListFlavors from '../ListFlavors/ListFlavors';
import ListCart from '../ListCart/ListCart';
import './ListVariants.css';
import imgAdd from '../../assets/outline_add_white_24dp.png';

const ListVariants = ({ variants }) => {
	const [flavorsList, setFlavorsList] = useState([]);
	const [flavorName, setFlavorName] = useState('');
	const [variantName, setVariantName] = useState('');
	const [variantLogo, setVariantLogo] = useState('');
	const [variantId, setVariantId] = useState('');
	const [flavorPrice, setFlavorPrice] = useState(0);
	const [display, setDisplay] = useState(false);
	const [listCart, setListCart] = useState([]);

	return (
		<>
			<div className="columnRuntime">
				<div className="headerList alignElement sticky">Runtime</div>
				{!variants.length ? (
					<h2>No Runtime Found</h2>
				) : (
					variants.map((variant) => (
						<div key={variant.id} className="containElement">
							<img
								alt={`${variant.name}'s logo`}
								className="sizeImage"
								src={variant.logo}
							/>
							<span className="spaceElementVariant">
								{variant.name}
							</span>
							<span className="alignRight">
								<button
									type="button"
									onClick={() => {
										setVariantName(variant.name);
										setVariantLogo(variant.logo);
										setVariantId(variant.id);
										setFlavorsList(variant.flavors);
									}}
								>
									<img
										className="imgAdd"
										aria-label={`${variant.name}'s plan`}
										alt={`${variant.name}'s plan`}
										src={imgAdd}
									/>
								</button>
							</span>
						</div>
					))
				)}
			</div>
			<div className="columnPlan">
				{variantLogo ? (
					<div className="headerList sticky alignElement">
					<span className="alignLeft">Runtime</span>
						<img
							alt={`${variantLogo}'s logo`}
							className="sizeImage alignLeft"
							src={variantLogo}
						/>
						<span className="spaceElementVariant fontNormal">
							{variantName}
						</span>
					</div>
				) : (
					<div className="headerList sticky alignElement">Plan </div>
				)}
				<ListFlavors
					flavors={flavorsList}
					variantName={variantName}
					flavorPrice={flavorPrice}
					setFlavorPrice={setFlavorPrice}
					flavorName={flavorName}
					setFlavorName={setFlavorName}
					display={display}
					setDisplay={setDisplay}
					listCart={listCart}
					setListCart={setListCart}
					variantId={variantId}
					variantLogo={variantLogo}
				/>
			</div>
			<div className="columnCart">
				<div className="headerList sticky alignElement">Shopping Cart</div>
				<ListCart
					flavorName={flavorName}
					variantName={variantName}
					flavorPrice={flavorPrice}
					display={display}
					setDisplay={setDisplay}
					listCart={listCart}
					setListCart={setListCart}
					variantId={variantId}
				/>
			</div>
		</>
	);
};

export default ListVariants;
