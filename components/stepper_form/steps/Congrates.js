import { StepperContext } from "modules/profile/contexts/StepperContext";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { api } from "services/api";
import Loader from "utils/Loader";

export default function Congrates() {
	const [loading, setLoading] = useState(true);
	const [success, setSuccess] = useState(false);
	const { userData, eventData } = useContext(StepperContext);

	const addWedding = async () => {
		try {
			const userRes = await api.post("/api/v1/weddings", userData);

			const weddingId = userRes.data?.data?.id;
			const eventRes = await api.post(
				`/api/v1/weddings/${weddingId}/weddingEvents`,
				eventData
			);
			console.log(userRes, eventRes);

			eventRes.data.status === "success" && setSuccess(true);
		} catch (error) {
			if (error.response && error.response.data.message) {
				toast.error(error.response.data.message);
			} else {
				toast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		addWedding();
	}, []);

	if (loading) return <Loader loading={loading} />;

	return (
		<div className='container md:mt-10'>
			<div className='flex flex-col items-center'>
				<div className='text-[#F85757]'>
					<svg
						className='w-24 h-24'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0001.414 0l4-4z'
							clipRule='evenodd'
						></path>
					</svg>
				</div>
				<div
					onClick={addWedding}
					className='mt-3 text-xl font-semibold text-gray-500'
				>
					{success ? "Your account has been created." : "Something went wrong"}
				</div>
				<Link href='/' className='mt-10'>
					<button className='h-10 px-5 text-[#F85757] transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-[#F85757] hover:text-white'>
						Close
					</button>
				</Link>
			</div>
		</div>
	);
}
