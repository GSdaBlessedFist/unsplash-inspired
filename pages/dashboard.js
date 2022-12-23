import Link from 'next/link';
import { useRouter } from 'next/router';
import cookieCutter from 'cookie-cutter';
import * as Cosmic from 'cosmicjs';
const api = Cosmic();

const bucket = api.bucket({
	slug: process.env.NEXT_PUBLIC_COSMIC_SLUG,
	read_key: process.env.NEXT_PUBLIC_COSMIC_READ_KEY,
	write_key: process.env.NEXT_PUBLIC_COSMIC_WRITE_KEY,
});

export const getStaticProps = async () => {
	const images = await bucket.media.find({}).props('imgix_url').limit(30);
	console.log(images);
	return {
		props: {
			images,
		},
	};
};

export default function Dashboard({ isLoggedIn, setIsLoggedIn, images }) {
	const router = useRouter();

	const logout = (e)=>{
		e.preventDefault();
		setIsLoggedIn(false)
		router.push("/")
		cookieCutter.set("UserLoggedIn",false)
	}
	return (
		<>
			<div data-test="dashboard">
				<div
					id="interface-row"
					className="mt-4 grid grid-cols-[164px_300px_1fr_100px_137px] grid-rows-[55px]"
				>
					<div className="relative flex justify-center items-center transform-origin rotate-[-35deg]">
						<Link id="logo-link" href="/" data-test="logo-link">
							{/*<Image src={logo} width={384} height={26} alt="logo"/>*/}
							<div
								id="logo"
								className=" desktop:text-2xl text-green-500 font-bold text-center"
							>
								&#60; IMGS+ &#62;
							</div>
						</Link>
					</div>

					<div className="my-auto w-full h-full">
						<form
							id="search-bar-group"
							className="SECTION h-full flex items-center border-green-400 flex-row rounded-xl pr-3"
						>
							<div
								id="magnifying-glass"
								className="mx-[16px] w-[24px] h-[24px]"
							>
								<div
									id="mg-ring"
									className="border-2 border-zinc-400 w-[15px] h-[15px] rounded-full"
								></div>
								<div
									id="mg-handle"
									className="w-[3.5px] h-[10px] origin-top-center -rotate-45 translate-x-[15px] -translate-y-[3px] bg-zinc-400"
								></div>
							</div>
							<input
								type="text"
								id="search-bar"
								data-test="search-bar"
								className="grow inline desktop:text-sm px-2 py-2"
								placeholder="Search by name  [Enter]"
							/>
						</form>
					</div>

					<div className="flex items-center justify-center dash text-gray-400/50">
						<em>add buttons for formatting</em>
					</div>
					<div className="flex items-center justify-center text-orange-500 text-xl">
						<button id="logout-link" data-test="logout-link" onClick={logout}>
							Log out
						</button>
					</div>

					<div className="h-[55px] w-[137px]">
						<button
							id="add-photo-button"
							data-test="add-photo-button"
							className="w-full h-full flex justify-center items-center bg-[#3DB46D] rounded-r-xl rounded-l-xl px-0 noto text-white drop-shadow-md"
						>
							Add a photo
						</button>
					</div>
				</div>

				{!images ? (
					'Loading...'
				) : (
					<div id="photo-gallery-container" data-test="photo-gallery-container" className="mt-10 h-5/6 flex justify-center items-start overflow-y-auto" >
						<div id="photo-area" className="w-full desktop:columns-4  gap-2 ">
							{images.media.map((image, index) => (
								<div className=" mb-2  object-cover" key={index}>
									<img src={image.imgix_url} data-test="image" alt="picture" />
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
