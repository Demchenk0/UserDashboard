import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../../data/data.js';
import styles from './Customers.module.scss';

const customers = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h2>Customers </h2>
				<h2>Welcome Back, Clint</h2>
			</div>
			<div className={styles.box}>
				<div className={styles.box2}>
					<div className={styles.title}>
						<span>Name</span>
						<span className={styles.email}>Email</span>
						<span className={styles.last}>Last Order</span>
						<span className={styles.metod}>Method</span>
					</div>
					<ul>
						{data.map((order, id) => (
							<li kye={id} className={styles.item}>
								<div className={styles.boxicon}>
									<div className={styles.bgicon}>
										<BsPersonFill className={styles.icon} />
									</div>
                  <p className={styles.ordertext}>{order.name.first + '' + order.name.last}</p>
								</div>
                <p className={styles.email}>{order.name.first}@gmail.com</p>
                <p className={styles.date}>{order.date}</p>
                <div className={styles.method}>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default customers;
