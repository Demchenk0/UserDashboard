import React from 'react';
import styles from './Orders.module.scss';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../../data/data.js';

const orders = () => {
	return (
		<div className={styles.bg}>
			<div className={styles.boxtext}>
				<h2>Orders</h2>
				<h2>Welcome Back, Clint</h2>
			</div>
			<div className={styles.box}>
				<div className={styles.el}>
					<div className={styles.all}>
						<span>Order</span>
						<span className={styles.spanS}>Status</span>
						<span className={styles.spanLO}>Last Order</span>
						<span className={styles.spanM}>Method</span>
					</div>
					<ul>
						{data.map((order, id) => (
							<li key={id} className={styles.item}>
								<div className={styles.boxDiv}>
									<div className={styles.boxIcon}>
										<FaShoppingBag className={styles.icon} />
									</div>
									<div className={styles.boxMoney}>
										<p className={styles.moneyText}>
											${order.total.toLocaleString()}
										</p>
										<p className={styles.moneyName}>{order.name.first}</p>
									</div>
								</div>
								<p className={styles.pText}>
									<span
										style={{
											backgroundColor:
												order.status === 'Processing'
													? 'rgb(187, 247, 208)'
													: order.status === 'Completed'
													? 'rgb(191, 219, 254)'
													: 'rgb(254, 240, 138);',
											padding: '16px',
											borderRadius: '8px',
										}}
									>
										{order.status}
									</span>
									{/* <span
										style={
											order.status == 'Processing'
												? 'background-color: grey padding: 16px border-radius: 8px'
												: order.status == 'Completed'
												? 'background-color: green padding: 16px border-radius: 8px'
												: 'background-color: red, padding: 16px, border-radius: 8px'
										}
									>
										{order.status}
									</span> */}
								</p>
                <p className={styles.dateOrder}>{order.date}</p>
                <div className={styles.boxMethod}>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical/>
                </div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default orders;
