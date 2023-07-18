const StepperControl = ({ isEdit, handleClick, currentStep, steps }) => {
	return (
		<div className='container flex justify-between mx-md-2 mt-4 mb-8'>
			{/* back button */}
			<button
				onClick={() => handleClick()}
				className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
					currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
				}`}
			>
				Back
			</button>

			<div className='flex gap-2'>
				{(currentStep === 2 || currentStep === 3) && (
					<button
						onClick={() => handleClick("skip")}
						className='text-[#F85757] uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'
					>
						Skip for now
					</button>
				)}
				<button
					onClick={() => handleClick("next")}
					className='bg-[#F85757] text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'
				>
					{currentStep === steps.length
						? "Confirm"
						: isEdit
						? "Update"
						: "Next"}
				</button>
			</div>
		</div>
	);
};

export default StepperControl;
