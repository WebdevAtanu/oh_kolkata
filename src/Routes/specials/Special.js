import "./style.css";
import "./phone.css";
import {Card} from "./Card.js";
export function Special(){
return(
<div>
	<div className="container special mt-4">
		<div className="text-center">
			<h3 className="mt-5">Why Kolkata is special</h3>
		</div>
		<hr></hr>
		<div className="row g-1">
			<Card img="image/special/dhunuchi.jpg" h5="Dhunuchi Naach" p="Dhunachi is a Bengali incense burner (commonly used in conjunction with Indian frankincense or dhuno for traditional ceremonies) used for one of the stages during arti (ritualised worship). It is often used following the arti with the pradip (a lamp with an odd number of wicks)."/>

			<Card img="image/special/college.jpeg" h5="College Street" p="The College Street is famous for its small and big book stores, which gives it the nickname Boi Para (Colony of Books). People from the whole city and different parts of the state flock the innumerable book stores along the side-walk for books."/>

			<Card img="image/special/bosonto.jpeg" h5="Bosonto Utsav" p="Dol Utsav which is known as Basanta Utsav is celebrated in a different way making it a unique cultural festival which makes it a special. The Holi or the Basanta Utsav at the Kolkata make you feel romantic, pleasant, and very special."/>

			<Card img="image/special/food.jpg" h5="Food" p="Dacre Lane. Dacre Street, also known as Decker's Lane, is one of Kolkata's most well-known food districts and has everything you could possibly desire to try. You may get everything here, from Punjabi to Chinese to iconic Bengali delicacies."/>

			<Card img="image/special/durga.jpeg" h5="Durga Puja" p="Durga Puja is an annual festival celebrated magnificently marking the worship of the Hindu mother goddess Durga.This festival is the biggest festival in Kolkata."/>

			<Card img="image/special/kumor.jpeg" h5="Kumortuli" p="Kumortuli is a traditional potters' quarter in northern Kolkata. The city is renowned for its sculpting prowess. It not only manufactures clay idols for various festivals but also regularly exports them."/>

			<Card img="image/special/howrah.jpeg" h5="Howrah Bridge" p="The Howrah Bridge is a balanced steel bridge over the Hooghly River. The bridge was originally named the New Howrah Bridge but now It is popularly known as the Howrah Bridge."/>

			<Card img="image/special/sarobor.jpeg" h5="Rabindra Sarobar" p="Rabindra Sarobar (formerly known as Dhakuria Lake) is an artificial lake, garden and park in South Kolkata. The name also refers to the area surrounding the lake."/>

			<Card img="image/special/tram.jpeg" h5="Kolkata Tram" p="The tram system in Kolkata, operated by West Bengal Transport Corporation (WBTC) after Calcutta Tramways Company (CTC) was dissolved, is the oldest tram network operating in India, and oldest operating tramway in Asia."/>

			<Card img="image/special/station.jpeg" h5="Howrah Railway Station" p="Howrah railway station (also known as Howrah Junction) is a railway station located in the city of Howrah. It is the largest and busiest railway complex in India as well as one of the busiest and largest train stations in the world"/>

			<Card img="image/special/football.jpg" h5="Football" p="Football has always been the major sport in Bengal because of the culture and history, the two old clubs East Bengal and Mohun Bagan are the oldest clubs in India, and Mohun Bagan being a club, even older than clubs like Chelsea and Real Madrid."/>

		</div>
	</div>
</div>
)
}