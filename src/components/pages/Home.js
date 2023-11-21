import React from "react";
import './home.css'
function Home() {
	return (
		<div
		>
			<center><h1>Home service at your doorstep</h1>
			<br></br>
			</center>
			<h1>Most Booked Services</h1>

			<div className="service-div-main">
				<div className="book-servive">
					<div className="service-card">
						<img height={230} src="./img/bathroom.jpeg" alt="loading"></img>
						<h2>Intense Bathroom Cleaning</h2>
						<h2>Price : ₹750</h2>
						 <h2>★4.5(1.2M)</h2>
							<br />
						 <button>Go</button>

					</div>
					<div className="service-card">
						<img height={230} src="./img/tap.jpeg" alt="loading"></img>
						<h2>Tap Cleaning</h2>
						<h2>Price : ₹100</h2>
						 <h2>★4.8(1.7M)</h2>
						<br />
						 <button>Go</button>

					</div>
					<div className="service-card">
						<img height={230} src="./img/sofa.jpeg " alt="loading"></img>
						<h2>Sofa Cleaning</h2>
						<h2>Price : ₹729</h2>
						 <h2>★4.85(1.56M)</h2>
						<br />
						 <button>Go</button>
						 

					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Home;

