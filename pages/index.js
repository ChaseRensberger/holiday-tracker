import Head from "next/head";
import styles from "../styles/Home.module.css";
import { holidayList } from "../data/holidays";
import moment from "moment";

export default function Home() {
	const todaysHolidayObjects = holidayList.filter(
		(holidayObject) => holidayObject.Day == moment().format("MMM D")
	);
	const todaysHolidays = todaysHolidayObjects.map(
		(todayHolidayObject) => todayHolidayObject.Holiday
	);

	return (
		<div className={styles.container}>
			<Head>
				<title>Holiday Tracker</title>
				<meta name="description" content="Luke's holiday tracker" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div>{moment().format("MMM D")}</div>
				<div>{JSON.stringify(todaysHolidays)}</div>
			</main>
		</div>
	);
}
