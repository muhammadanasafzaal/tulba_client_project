import { BeatLoader } from "react-spinners";

const override = {
	position: "fixed",
	top: "48vh",
	left: "48vw",
	display: "block",
	zIndex: "9999999",
};

const Loader = ({ loading = false }) => {
	if (!loading) return <></>;
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				height: "100vh",
				width: "100vw",
				background: "rgba(0,0,0,0.1)",
				zIndex: 9999999,
			}}
		>
			<BeatLoader
				color='#f85757'
				loading={loading}
				cssOverride={override}
				size={30}
			/>
		</div>
	);
};

export default Loader;
