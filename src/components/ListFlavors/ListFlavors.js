import { useContext } from 'react';
import TotalContext from '../../TotalContext';
import './ListFlavors.css';
import imgAdd from '../../assets/outline_add_white_24dp.png';

const ListFlavors = ({
	flavors,
	variantName,
	flavorPrice,
	setFlavorPrice,
	flavorName,
	setFlavorName,
	display,
	setDisplay,
	listCart,
	setListCart,
	variantId,
	variantLogo,
}) => {
	const [total, setTotal] = useContext(TotalContext);

	const randomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	return (
		<>
			{!flavors.length ? (
				<h3>No Plan Selected</h3>
			) : (
				<div style={{ overflowX: 'auto' }}>
					<table id="plan">
						<thead>
							<tr>
								<th className="spaceElementFlavors" scope="col">
									Plan
								</th>
								<th scope="col" className="alignRightElement">
									CPUs
								</th>
								<th scope="col" className="alignRightElement">
									GPUs
								</th>
								<th scope="col" className="alignRightElement">
									RAM
								</th>
							</tr>
						</thead>
						{flavors.map((flavor) => (
							<tbody key={flavor.flavor_name}>
								<tr>
									<td
										data-label="Plan"
										className="spaceElementFlavors colorElement"
									>
										{flavor.flavor_name}
									</td>
									<td
										data-label="CPUs"
										className="alignRightElement"
									>
										{flavor.cpus}
									</td>
									<td
										data-label="GPUs"
										className="alignRightElement"
									>
										{flavor.gpus}
									</td>
									<td
										data-label="RAM"
										className="alignRightElement"
									>
										 {flavor.ram < 1024 ? flavor.ram + 'MB' : flavor.ram / 1024 + 'Go'}
									</td>
									<td>
										<div
											key={flavor.flavor_name}
											className="containElement"
										>
											<span className="alignRight">
												<button
													type="button"
													onClick={() => {
														setFlavorName(
															flavor.flavor_name
														);
														setFlavorPrice(
															flavor.price
														);
														setDisplay(true);
														setListCart([
															...listCart,
															{
																variantName:
																	variantName,
																variantLogo:
																	variantLogo,
																variantId:
																	variantId +
																	randomNumber(
																		1,
																		100
																	),
																flavorName:
																	flavor.flavor_name,
																flavorPrice:
																	flavor.price,
															},
														]);
														const addPrice =
															total +
															flavor.price;
														setTotal(addPrice);
													}}
												>
													<img
														className="imgAdd"
														aria-label={`${flavor.flavor_name}'s plan`}
														alt={`${flavor.flavor_name}'s plan`}
														src={imgAdd}
													/>
												</button>
											</span>
										</div>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			)}
		</>
	);
};

export default ListFlavors;
