import React, { useContext } from "react";
import { StepperContext } from "./../../../modules/profile/contexts/StepperContext";
import CITIES from "data/locations";

export default function Account() {
	const { userData, setUserData } = useContext(StepperContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	console.log(userData);

	return (
		<div className='flex flex-col mt-12'>
			<div className='w-full mx-2 flex-1'>
				{/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Groom Name
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<input
						onChange={handleChange}
						value={userData["groom"] || ""}
						name='groom'
						placeholder='Groom Name'
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
					/>
				</div>
			</div>
			<div className='w-full mx-2 flex-1'>
				{/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Groom Location
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<select
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
						name='groomLocation'
						onChange={handleChange}
						value={userData["groomLocation"] || null}
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
          Bride Name
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<input
						onChange={handleChange}
						value={userData["bride"] || ""}
						name='bride'
						placeholder='Bride Name'
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
					/>
				</div>
			</div>
			<div className='w-full mx-2 flex-1'>
				{/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Bride Location
        </div> */}
				<div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
					<select
						className='bg-white p-1 px-2 appearance-none outline-none w-full text-gray-800'
						name='brideLocation'
						onChange={handleChange}
						value={userData["brideLocation"] || null}
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
		</div>
	);
}
