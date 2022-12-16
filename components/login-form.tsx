import {useState,useRef} from "react";

interface userValues {
	username: string;
	password: string;
}

export default function LoginForm(){
	const buttonRef = useRef();
	const [combination,setCombination] = useState([]);

	const gatherLogInformation = (e)=>{
		e.preventDefault();
		e.target.disabled = true;
		let option = e.target.getAttribute('data-string');
		setCombination(combination=>[...combination,option])
		if(combination.length === 4){
			console.log(combination)
		}
	}
	
	return (<>
		<div className="h-1/2 inset-96 transform-origin translate-y-1/2 flex flex-col justify-center items-center ">
			<div id="text-over-form" className="relative top-3 right-44 bg-transparent text-green-500 font-bold text-6xl">&#60; IMGS+ &#62;</div>
			<div id="login-wrapper" className="SECTION w-1/3 h-4/5 flex flex-column justify-center items-center rounded-lg">
				<form id="login-form" method="GET" action="" data-test="login-form" className=" flex flex-col items-center">
					<input type="text" id="username-input" data-test="username-input" className="SECTION border-4 w-3/5 text-3xl text-center p-4 rounded-xl" placeholder="Who are you?"/>
					<div id="pick-combination-message" className="text-lg text-center p-4">Please enter your combination.</div>
					<div id="buttons-group" data-test="login-buttons-group" className="flex gap-x-0 w-4/5 text-center ">
						<button id="button-1" ref={buttonRef} data-string="opTion-1" data-test="login-button" onClick={gatherLogInformation} className="grow h-28 border-t-4 border-l-4 border-r-1 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">b33p</button>
						<button id="button-2" ref={buttonRef} data-string="0pt10nII" data-test="login-button" onClick={gatherLogInformation} className="grow h-28 border-t-4 border-l-2 border-r-1 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">bo0p</button>
						<button id="button-3" ref={buttonRef} data-string="OptIon3" data-test="login-button" onClick={gatherLogInformation} className="grow h-28 border-t-4 border-l-2 border-r-1 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">bOp 3</button>
						<button id="button-4" ref={buttonRef} data-string="OPti0n4" data-test="login-button" onClick={gatherLogInformation} className="grow h-28 border-t-4 border-l-2 border-r-4 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">MF'r</button>
					</div>
					
				</form>
			</div>
		</div>
	</>)
}