import React from 'react';
import { data } from '../../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';
import styles from './ResentOrders.module.scss';

const ResentOrders = () => {
	return (
		<div className={styles.box}>
			<h1>Resent Orders</h1>
			<ul>
				{data.map((order, id) => (
					<li key={id} className={styles.item}>
          <div className={styles.iconContainer}>
              <FaShoppingBag className={styles.icon} />
            </div>
            <div className={styles.boxtext}>
              <p className={styles.first}>${order.total}</p>
              <p className={styles.second}>{order.name.first}</p>
            </div>
            <p className={styles.third}>{order.date}</p>
          </li>
				))}
			</ul>
		</div>
	);
};

export default ResentOrders;
