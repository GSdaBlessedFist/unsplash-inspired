import {useState,useEffect,useRef} from "react";
import {DebounceInput} from 'react-debounce-input';
import gsap from 'gsap';
import users from "../sample-user-database" assert {type:"json"};


export default function LoginForm({isLoggedIn,setIsLoggedIn,onChange}){

	const buttonRef = useRef([]);
		  buttonRef.current = [];
	const buttons = buttonRef.current;
	function addButtonsRefs(thisbutton){
		if(thisbutton && !buttons.includes(thisbutton)){
	      buttons.push(thisbutton);
	    }
	}

	const newButtonRef = useRef();
	
	const [uiMessage,setUIMessage] = useState("Please FIRST enter your email.");
	const [email,setEmail] = useState("testuser@testuser.com");// testuser@testuser.com
	const [combination,setCombination] = useState([]);
	const [loginInfo,setLoginInfo] = useState({
		user: "",
		email:"",
		comboStr:"",
		isLoggedIn:false
	})
	const [userExists,setUserExists] = useState();
	const [loginAttempt,setLoginAttempt] = useState(1);
	const KEYSTONE = process.env.NEXT_PUBLIC_COMBINATION_KEYSTONE;

	const updateEmail = (e)=>{
		e.preventDefault();
		setEmail(e.target.value);
	}
	const checkIfUserExists = async(email)=>{
		const results = await users.find((user)=> user.email === email)
		setUserExists(false)
		if(!results){
			//change message
			console.log("%cUSER DOES NOT EXIST","font-size:1.25rem;font-weight:bold;color:red")	
			let tl = gsap.timeline({})
				tl.set(newButtonRef.current,{transformOrigin:"center"})
				  .to(newButtonRef.current,{borderColor:"rgb(187 247 208)",scale:1.25,duration:.15})
				tl.to(newButtonRef.current,{borderColor:"rgb(34 197 94)",scale:1,duration:.35})
		}else{
			setUserExists(true)
			//console.log(results)
			setUIMessage("Now, please enter the combination.")
			console.log("%cUSER EXIST","font-size:1.25rem;font-weight:bold;color:green")
		}
		
	}

	const updateCombination = (e)=>{
		e.preventDefault();
		e.target.disabled = true;
		setCombination([...combination,e.target.getAttribute('data-string')])
	}
	const checkCombination = async(combination)=>{
		if(combination.length===4){
			let comboArr = Array.from(combination.join(""))
			comboArr.splice(5,1);
			let comboStr = comboArr.join('');
			const results = await users.find((user)=> user.email === email)
			//console.log("Results string: "+ results.comboStr + "|" + "Entered combo string: " + comboStr)
			if(results.comboStr !== comboStr){
				let failAttemptMessageArr = ["Nope, you lose", "Sorry, please try again","Nuh-uh-uha"];
				let pickFailAttemptMessage = ()=> failAttemptMessageArr[Math.floor(Math.random()*failAttemptMessageArr.length)]
				console.log("%c%o","font-size:1.15rem;color:orange;",pickFailAttemptMessage())
				loginAttemptTracker()
				buttons.forEach((btn)=>{btn.disabled = false})
				setCombination([])
			}else{
				setIsLoggedIn(true)
				console.log("%cWELCOME %o","color:yellow;font-size:1.34rem;", email.split("@")[0])
			}
			// console.log("%cComboStr: %o","color:orange;",comboStr)
			// console.log("%cResults: %o","color:orange",results)
		}
	}
	const loginAttemptTracker = ()=>{
		if(loginAttempt === 3){
			setUIMessage("Third try, I'm sorry. Come back in like...30min")
			console.log("%cThird try, I'm sorry. Come back in like...30min","font-size:1.35rem;color:red;")
		}else{
			setLoginAttempt(loginAttempt=> loginAttempt + 1)
			

		}
		//console.log(loginAttempt)
	}
	
	useEffect(()=>{
		//console.log("%cEmail: %s","font-size:1.2rem;color:#0096FF;", email);
		//console.log("%cCombination: %s","font-size:1.2rem;color:aqua;",combination);
		if(email) checkIfUserExists(email)
		if(userExists) checkCombination(combination)
	},[email,combination])

		//console.log(loginInfo);
	return (<>
		<div className="h-1/2 inset-96 transform-origin translate-y-1/2 flex flex-col justify-center items-center ">
			<div id="text-above-form" className="relative top-3 right-44 bg-transparent text-green-500 font-bold text-6xl">&#60; IMGS+ &#62;</div>
			<div id="login-wrapper" className="SECTION 2xl:w-[600px] sm:w-[360px] h-4/5 flex flex-column justify-center items-center rounded-lg">
		{/*<div id="login-wrapper" className="SECTION w-1/3 h-4/5 flex flex-column justify-center items-center rounded-lg">*/}
			
				<form id="login-form" method="GET" action="" data-test="login-form" className=" flex flex-col items-center">
					<div className="w-4/5 flex BLUE">
						
						{/*EMAIL INPUT*/}
						<DebounceInput 
							type="text" 
							id="email-input" 
							data-test="email-input" 
							debounceTimeout={1500}
							onChange={updateEmail} 
							className="SECTION border-4 w-4/5 desktop:text-2xl text-center p-2 rounded-xl" 
							placeholder="Email address please" 
							value={email}/>
						
						{/*NEW BUTTON*/}
						<div className="w-[100px] flex justify-center items-center">
							<button id="new-user" data-test="new-button" ref={newButtonRef} className="flex justify-center items-center w-5/6 h-5/6 bg-transparent text-white rounded-xl border-t-4 border-l-4 border-r-4 border-b-2 border-green-500 hover:border-t-4 hover:border-l-4 hover:border-r-4 hover:border-b-2  hover:border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">NEW</button>
						</div>
					</div>


					{/*COMBO BUTTONS*/}
					<div id="pick-combination-message" data-test="ui-message" className="text-lg text-center p-4">{uiMessage}</div>

					<div id="buttons-group" data-test="login-buttons-group" className="flex gap-x-0 w-4/5 text-center ">
						<button id="button-1" ref={addButtonsRefs} data-string="opTion1" data-test="login-button" onClick={updateCombination} className="grow h-28 border-t-4 border-l-4 border-r-1 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">b33p</button>
						<button id="button-2" ref={addButtonsRefs} data-string="0pt10nII" data-test="login-button" onClick={updateCombination} className="grow h-28 border-t-4 border-l-2 border-r-1 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">bo0p</button>
						<button id="button-3" ref={addButtonsRefs} data-string="OptIon3" data-test="login-button" onClick={updateCombination} className="grow h-28 border-t-4 border-l-2 border-r-1 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">bOp 3</button>
						<button id="button-4" ref={addButtonsRefs} data-string="OPti0n4" data-test="login-button" onClick={updateCombination} className="grow h-28 border-t-4 border-l-2 border-r-4 border-b-2 rounded-xl border-green-500 transition hover:shadow-[inset_0_5px_10px_#22c55e]">MF&apos;r</button>
					</div>
					
				</form>
				
			</div>
		</div>
	</>)
}