import Head from "next/head";
import styles from "../styles/Home.module.css";
import { holidayList } from "../data/holidays";
import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {

	const [offset, setOffset] = useState(0);

	let todaysHolidayObjects = holidayList.filter(
		(holidayObject) => holidayObject.Day == moment().add(offset, 'd').format("MMM D")
	);
	let todaysHolidays = todaysHolidayObjects.map(
		(todayHolidayObject) => todayHolidayObject.Holiday
	);

	useEffect(() => {
		todaysHolidayObjects = holidayList.filter(
			(holidayObject) => holidayObject.Day == moment().add(offset, 'd').format("MMM D")
		);
		todaysHolidays = todaysHolidayObjects.map(
			(todayHolidayObject) => todayHolidayObject.Holiday
		);
	}, [offset])

	return (
		<div className={styles.container}>
			<Head>
				<title>Holiday Tracker</title>
				<meta name="description" content="Luke's holiday tracker" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.contentRow}>
				<button className={styles.button} onClick={() => {setOffset(offset-1)}}>-</button>
					<div>{moment().add(offset, 'd').format("MMM D")}</div>
					<button className={styles.button} onClick={() => {setOffset(offset+1)}}>+</button>
				</div>
				<div>{JSON.stringify(todaysHolidays)}</div>
			</main>
		</div>
	);
}
