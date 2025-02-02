import React from 'react';
import {  useSelector } from 'react-redux';
import { formatDate, formatter, shorten } from 'src/urlConfig';
import Card from '../../../components/Card';
import Layout from '../../../components/Layout';
import '../ActiveOrders/style.css'

export default function Orders(props) {
	const order = useSelector((state) => state.order);

	return (
		<Layout>
			<h1 style={{ margin: '3rem', color: '#d16767' }}>COMMANDES DEJA LIVRÉES</h1>
			{order.orders &&
				order.orders.map((orderItem, index) => (
					<Card
						style={{
							margin: '60px auto',
							color: 'white',
							background: '#23242D'
						}}
						key={index}
						headerLeft={`NUMÉRO DE COMMANDE - ${orderItem._id}`}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: '30px 20px',
								alignItems: 'center',
								fontSize: '18px'
							}}
						>
							<div>
								<div className="title">Articles</div>
								{orderItem.items.map((item, index) => (
									<div className="value" key={index}>
										{shorten(item.productId.name, 55)}
									</div>
								))}
							</div>
							<div>
								<span className="title">Facture</span>
								<br />
								<span className="value">{formatter.format(orderItem.totalAmount)}</span>
							</div>
							<div>
								<span className="title">Type de Paiement</span> <br />
								<span className="value">{orderItem.paymentType}</span>
							</div>
							<div>
								<span className="title">Status de Paiement</span> <br />
								<span className="value">{orderItem.paymentStatus}</span>
							</div>
						</div>
						<div
							style={{
								boxSizing: 'border-box',
								padding: '100px',
								display: 'flex',
								alignItems: 'center'
							}}
						>
							<div className="orderTrack textCenter">
								{ orderItem.orderStatus[3].date &&
									`Commande livrée le ${formatDate(orderItem.orderStatus[3].date)}`}
							</div>		

						</div>
					</Card>
				))}
		</Layout>
	);
}