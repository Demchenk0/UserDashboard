import React from 'react';
import styles from '../sidebar/Sidebar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
const SideBar = ({ children }) => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.box}>
				<div className={styles.link}>
          <Link href='/'>
            <div className={styles.iconActive}>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className={styles.bottom}></span>
          <Link href='/'>
            <div className={styles.icon}>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/customers'>
            <div className={styles.icon}>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className={styles.icon}>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className={styles.icon}>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
			</div>
			<main className={styles.mainbar}>{children}</main>
		</div>
	);
};

export default SideBar;
