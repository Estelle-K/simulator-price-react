import { useContext } from 'react';
import TotalContext from '../../TotalContext';
import imgRemove from '../../assets/outline_remove_white_24dp.png';

const ListCart = ({
	flavorName,
	variantName,
	flavorPrice,
	setFlavorName,
	setVariantName,
	setFlavorPrice,
	setDisplay,
	display,
	listCart,
	setListCart,
	variantId,
}) => {
	const [total, setTotal] = useContext(TotalContext);

	const handleRemove = (variantId, flavorPrice) => {
		const newListCart = listCart.filter(
			(elem) => elem.variantId !== variantId
		);
		if (!newListCart.length) {
			setDisplay(false);
			setTotal(0);
			setListCart([]);
		} else {
			const removePrice = total - flavorPrice;
			setTotal(removePrice);
			setListCart(newListCart);
		}
	};

	return (
		<>
			{!display ? (
				<h3>Cart Empty</h3>
			) : (
				listCart &&
				listCart.map((cart, index) => (
					<div key={index} className="containElementCart borderElement">
						<img
							alt={`${cart.variantLogo}'s logo`}
							className="sizeImage"
							src={cart.variantLogo}
						/>
						<div>
							<span>{cart.variantName}</span>
							<div>
								Plan :{' '}
								<span className="colorElement">
									{cart.flavorName}
								</span>
								<div>
									Prix :{' '}
									<span className="boldElement">
										{cart.flavorPrice.toFixed(2)} €
									</span>
								</div>
							</div>
						</div>

						<span className="alignRight">
							<button type="button"
								onClick={() => {
									handleRemove(
										cart.variantId,
										cart.flavorPrice
									);
								}}
							>
								<img
										className="imgRemove"
										aria-label={`${cart.variantName}'s plan`}
										alt={`${cart.variantName}'s plan`}
										src={imgRemove}
									/>
							</button>
						</span>
					</div>
				))
			)}
		</>
	);
};

export default ListCart;
