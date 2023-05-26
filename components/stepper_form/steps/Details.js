import React, { useContext } from "react";
import { StepperContext } from "./../../../modules/profile/contexts/StepperContext";
import CITIES from "data/locations";

export default function Details() {
	const { eventData, setEventData } = useContext(StepperContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEventData({ ...eventData, [name]: value });
	};
	console.log(eventData)
	return (
		<div className='flex flex-col mt-12'>
			<div className='w-full mx-2 flex-1'>
				{/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Event Type
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<select
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
						name='type'
						onChange={handleChange}
						value={eventData["type"] || null}
					>
						<option hidden value={null}>
							Event Type
						</option>
						<option value="nikaah">
							Nikaah
						</option>
						<option value="walima">
							Walima
						</option>
					</select>
				</div>
			</div>
			<div className='w-full mx-2 flex-1'>
				{/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Event Location
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<select
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
						name='eventLocation'
						onChange={handleChange}
						value={eventData["eventLocation"] || null}
					>
						<option hidden value={null}>
							Select Location
						</option>
						{CITIES.map((c, _i) => (
							<option key={_i} value={c}>
								{c}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='w-full mx-2 flex-1'>
				{/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Event Date
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<input
						type='date'
						onChange={handleChange}
						value={eventData["eventDate"] || ""}
						name='eventDate'
						placeholder='Event Date'
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
					/>
				</div>
			</div>
			<div className='w-full mx-2 flex-1'>
				{/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Venue
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<input
						onChange={handleChange}
						value={eventData["venue"] || ""}
						name='venue'
						placeholder='Venue'
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
					/>
				</div>
			</div>
		</div>
	);
}
