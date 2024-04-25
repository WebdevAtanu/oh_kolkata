import "./style.css";
import "./phone.css";
import {Victoria} from "./moreRoute/Victoria.js";
export function Place(){
return(
<div>
	
	<div className="container popular">
		<div className="text-center">
			<h3 className="mt-5">Most popular places</h3>
			<hr></hr>
		</div>
		{/* place cards */}
		<div className="row g-3 pop_places">
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/victoria.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Victoria Memorial</h5>
							<p className="card-text">The Victoria Memorial is a large marble monument on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by the Government of India. It is dedicated to the memory of Queen Victoria, the Empress of India from 1876 to 1901. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/aquatica.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Aquatica Water Park</h5>
							<p className="card-text">Aquatica is Kolkata’s largest Water Theme Park & Resort & Banquet. Home to thrilling rides, attractions, live events & luxurious resort, Aquatica Banquet Resort & Water Park is the ultimate destination for thrill seekers featuring some of the Kolkata’s most popular roller coasters and waterpark park rides. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/stpaul.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">St. Paul's Cathedral</h5>
							<p className="card-text">St. Paul's Cathedral is a Church of North India cathedral of Anglican background in Kolkata. Noted for its Gothic architecture and dedicated to Paul the Apostle. It is the seat of the Diocese of Kolkata. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/belur.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Belur Math</h5>
							<p className="card-text">Belur Math is the headquarters of the Ramakrishna Math and Ramakrishna Mission, founded by Swami Vivekananda, the chief disciple of Ramakrishna Paramahamsa. It is located in Belur. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/birla.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Birla Mandir</h5>
							<p className="card-text">Birla Mandir is a Hindu temple on Asutosh Chowdhury Avenue, Ballygunge. It is dedicated to Vishnu avatars such as Rama and Krishna. This temple is open in the morning from 5.30 A.M. to 11 A.M. and in the evening from 4 .30 P.M. to 9 P.M. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/science.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Science City</h5>
							<p className="card-text">Science City is a science centre and science park in Kolkata. It is currently the largest science centre in the Indian subcontinent, containing a science museum, science park, and auditoriums. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/princep.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Prinsep Ghat</h5>
							<p className="card-text">Prinsep Ghat is one of the oldest recreational spots of Kolkata. People visit it in the evenings on weekends to go boating on the river, stroll along the bank and purchase food from stalls there. It has illuminated and landscaped gardens and pathways, fountains and renovated ghats. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-centerh-100">
					<div className="card">
						<img src="image/place/birla1.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">M.P. Birla Planetarium</h5>
							<p className="card-text">The Birla Planetarium (officially M. P. Birla Planetarium) is situated at Chowringhee Road adjacent to the Victoria Memorial, St. Paul's Cathedral and the Maidan in Central Kolkata, it is the largest planetarium in Asia and the second largest planetarium in the world. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/eco.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Eco Park</h5>
							<p className="card-text">Eco Park is an exception to the New Town of Kolkata, with its stunning green meadows, lush gardens, lakes and variety of trees. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/dakshineswar.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Dakshineswar Kali Temple</h5>
							<p className="card-text">Dakshineswar Kali Temple or Dakshineswar Kalibari is a Hindu navaratna temple in Dakshineswar, Kolkata. Situated on the eastern bank of the Hooghly River, the presiding deity of the temple is Bhavatarini (Kali), a form of Mahadevi or Parashakti Adya Kali, otherwise known as Adishakti Kalika. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/nicco.jpeg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Nicco Park</h5>
							<p className="card-text">Nicco Park is an amusement park located in Jheel Meel, Sector - IV of Bidhannagar. The park was created to attract tourists to the state by providing family-friendly recreation as well as educative entertainment. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/museum.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Indian Museum</h5>
							<p className="card-text">The Indian Museum is a massive museum in Central Kolkata. It is the ninth oldest museum in the world and the oldest and largest museum in India and Asia, by size of collection. It has rare collections of antiques, armour and ornaments, fossils, skeletons, mummies and Mughal paintings. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/Thakurbari.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Jorasanko Thakur Bari</h5>
							<p className="card-text">Jorasanko Thakur Bari in Jorasanko, North Kolkata, West Bengal, India, is the ancestral home of the Tagore family. It is the birthplace of poet Rabindranath Tagore and the host of the Rabindra Bharati University campus. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/fort.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Fort William</h5>
							<p className="card-text">Fort William is a fort built in Kolkata on the eastern banks of the River Hooghly, the major distributary of Ganges. The magnificent structure is embellished with hundreds of arched windows that overlook lush green gardens. Meticulous stonework adorns the surface of the building. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/marble palace.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Marble Palace</h5>
							<p className="card-text">The Marble palace near the Chorbagan in North Kolkata built in 1835 by Rajendra Mallick is famed for its art collection of masterpieces by Reuben and paintings by various renowned international artists such as Reynolds, Van Gogh and Rembrandt. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/rajbari.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Shobhabazar Rajbari</h5>
							<p className="card-text">The Shobhabazar Rajbari is one of the grandest Bengali style houses ever built. It was build by the Royal family of Shobhabazar in Kolkata, and the grandeur is only palpable to the eye. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-6 col-xs-12">
				<div className="container d-flex justify-content-center h-100">
					<div className="card">
						<img src="image/place/maidan.jpg" className="card-img-top" alt=""/>
						<div className="card-body">
							<h5 className="card-title">Maidan</h5>
							<p className="card-text">Also known as the Brigade Parade Ground, Maidan is the largest urban park in Kolkata. The humongous stretch of land includes the famous Eden Gardens, several football stadiums and the Race Course Kolkata. <span><a href="#" className="card-link">Know More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
							</svg></a></span></p>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
</div>
)
}