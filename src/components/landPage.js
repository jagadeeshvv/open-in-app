
// import { useRef, useState } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState(null);

//   const toggleSignInform = () => {
//     setIsLogin(!isLogin);
//     setError(null);
//   };

//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtonClick = () => {
//     if (!isLogin) {
//       createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           navigate('/')
//         })
//         .catch((error) => {
//           setError(error.message);
//         });
//     } else {
//       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
//         .then((userCredential) => {
//           const user = userCredential.user;
//           navigate('/main');
//         })
//         .catch((error) => {
//           setError(error.message);
//         });
//     }
//   };

//   return (
//     <div style={{ backgroundImage: `url('https://i.ibb.co/yWJ18Yg/Left-side.png')`, height: "100vh", width: "100%", backgroundRepeat: "no-repeat" }}>
//       <div>
//         <img src="https://i.ibb.co/Bf5QnR8/Ellipse-111.png" width="80.15px" height="80.15px" className="absolute top-[54.32px] left-[61.03px]" />
//         <img src="https://i.ibb.co/7tPNGYy/Vector-7.png" className=" w-[82.82px] h-[22.04px]  absolute left-[59.03px] top-[83.71px]" />
//         <p className="font-bold text-[72px] text-white font-montserrat w-[205px] h-[88px] leading-[87.7px]  absolute top-[300.37px] left-[196.33px]">BASE</p>
//         <ul className="flex justify-between w-[299px] h-[48px] absolute top-[650px] left-[144.5px]">
//           <li><img src="https://i.ibb.co/9HxLh68/Vector.png" /></li>
//           <li><img src="https://i.ibb.co/C0GRZ8n/Vector-1.png" /></li>
//           <li><img src="https://i.ibb.co/F6LSjkf/carbon-logo-linkedin.png" /></li>
//           <li><img src="https://i.ibb.co/wKwzHJ1/carbon-logo-discord.png" /></li>
//         </ul>
//       </div>
//       <p className="font-montserrat font-bold  text-[36px] absolute  top-[150.32px] left-[850.18px]">{isLogin ? "Sign In" : 'Sign Up'}</p>
//       <p className="font-lato  font-normal text-[16px] leading-[19.2px] text-black absolute  top-[200.11px] left-[850.18px]">{isLogin ? "Sign In" : 'Sign Up'} to your account</p>
//       <button className="flex font-montserrat font-normal text-[12px] leading-[14.63px] align-middle w-[197.6px] height-[32.93px] absolute top-[240.51px] left-[850.18px] gap-3 text-[#858585]  bg-[#FFFFFF]  rounded-lg p-2">
//         <img src="https://i.ibb.co/YTqFsWp/google-icon-1.png" />
//         {isLogin ? "Sign In" : 'Sign Up'} with Google
//       </button>
//       <button className="flex font-montserrat font-normal text-[12px] leading-[14.63px] align-middle w-[197.6px] height-[32.93px] absolute top-[240.51px] left-[1070.22px] gap-3 text-[#858585] bg-[#FFFFFF] rounded-lg p-2">
//         <img src="https://i.ibb.co/TvjtjjH/apple-1.png" />
//         {isLogin ? "Sign In" : 'Sign Up'} with Apple
//       </button>
//       <div className="w-[422.64px] height-[347.8px] absolute top-[300.88px] left-[850.18px] rounded-[20px]   bg-[#FFFFFF] p-4">
//         <form onSubmit={(e) => e.preventDefault()}>
//           {!isLogin && <input type="text" placeholder="Full name " className="w-[356.77px] h-[43.91px] bg-[#F5F5F5] rounded-[10px] p-2 m-1 outline-none font-lato font-normal" />}
//           <p className="font-lato font-normal text-[16px] leading-[19.2px] m-2 ">Email address</p>
//           <input type="text" placeholder="johndoe@gmail.com " className="w-[356.77px] h-[43.91px] bg-[#F5F5F5] rounded-[10px] p-2 m-1 outline-none font-lato font-normal" ref={email} />
//           <p className="font-lato font-normal text-[16px] leading-[19.2px] m-2 ">Password</p>
//           <input type="password" placeholder="Password" className="w-[356.77px] h-[43.91px] bg-[#F5F5F5] rounded-[10px] p-2 m-1 outline-none font-lato font-normal" ref={password} />
//           <a href="#" className="font-lato font-normal text-[#346BD4] text-[16px] leading-[19.2px] m-1 p-2">Forgot password?</a>
//           <p className="text-red-700">{error}</p>
//           <button className="w-[356.77px] h-[43.91px]  bg-[#605BFF] rounded-[10px] font-montserrat font-bold text-[#FFFFFF] text-[16px]  align-middle p-2 m-1" onClick={handleButtonClick}>
//             {isLogin ? "Sign In" : 'Sign Up'}
//           </button>
//         </form>
//       </div>
//       <p className="font-lato font-normal text-[16px] leading-[19.2px] align-middle text-[#858585] absolute top-[620px] left-[920px] cursor-pointer" onClick={toggleSignInform}>
//         {isLogin ? <span>Don’t have an account? <a href="#" className="text-[#346BD4]">Register here</a></span> : "Already have an account"}
//       </p>
//     </div>
//   );
// };

// export default LandingPage;


import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  const toggleSignInform = () => {
    setIsLogin(!isLogin);
    setError(null);
    email.current.value = ""; // Clear email input
    password.current.value = ""; // Clear password input
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    if (!isLogin) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          toggleSignInform()
          navigate('/');
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/main');
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div style={{ backgroundImage: `url('https://i.ibb.co/yWJ18Yg/Left-side.png')`, height: "100vh", width: "100%", backgroundRepeat: "no-repeat" }}>
      <div>
        <img src="https://i.ibb.co/Bf5QnR8/Ellipse-111.png" width="80.15px" height="80.15px" className="absolute top-[54.32px] left-[61.03px]" />
        <img src="https://i.ibb.co/7tPNGYy/Vector-7.png" className=" w-[82.82px] h-[22.04px]  absolute left-[59.03px] top-[83.71px]" />
        <p className="font-bold text-[72px] text-white font-montserrat w-[205px] h-[88px] leading-[87.7px]  absolute top-[300.37px] left-[196.33px]">BASE</p>
        <ul className="flex justify-between w-[299px] h-[48px] absolute top-[650px] left-[144.5px]">
          <li><img src="https://i.ibb.co/9HxLh68/Vector.png" /></li>
          <li><img src="https://i.ibb.co/C0GRZ8n/Vector-1.png" /></li>
          <li><img src="https://i.ibb.co/F6LSjkf/carbon-logo-linkedin.png" /></li>
          <li><img src="https://i.ibb.co/wKwzHJ1/carbon-logo-discord.png" /></li>
        </ul>
      </div>
      <p className="font-montserrat font-bold  text-[36px] absolute  top-[150.32px] left-[850.18px]">{isLogin ? "Sign In" : 'Sign Up'}</p>
      <p className="font-lato  font-normal text-[16px] leading-[19.2px] text-black absolute  top-[200.11px] left-[850.18px]">{isLogin ? "Sign In" : 'Sign Up'} to your account</p>
      <button className="flex font-montserrat font-normal text-[12px] leading-[14.63px] align-middle w-[197.6px] height-[32.93px] absolute top-[240.51px] left-[850.18px] gap-3 text-[#858585]  bg-[#FFFFFF]  rounded-lg p-2">
        <img src="https://i.ibb.co/YTqFsWp/google-icon-1.png" />
        {isLogin ? "Sign In" : 'Sign Up'} with Google
      </button>
      <button className="flex font-montserrat font-normal text-[12px] leading-[14.63px] align-middle w-[197.6px] height-[32.93px] absolute top-[240.51px] left-[1070.22px] gap-3 text-[#858585] bg-[#FFFFFF] rounded-lg p-2">
        <img src="https://i.ibb.co/TvjtjjH/apple-1.png" />
        {isLogin ? "Sign In" : 'Sign Up'} with Apple
      </button>
      <div className="w-[422.64px] height-[347.8px] absolute top-[300.88px] left-[850.18px] rounded-[20px]   bg-[#FFFFFF] p-4">
        <form onSubmit={(e) => e.preventDefault()}>
          {!isLogin && <input type="text" placeholder="Full name " className="w-[356.77px] h-[43.91px] bg-[#F5F5F5] rounded-[10px] p-2 m-1 outline-none font-lato font-normal" />}
          <p className="font-lato font-normal text-[16px] leading-[19.2px] m-2 ">Email address</p>
          <input type="text" placeholder="johndoe@gmail.com " className="w-[356.77px] h-[43.91px] bg-[#F5F5F5] rounded-[10px] p-2 m-1 outline-none font-lato font-normal" ref={email} />
          <p className="font-lato font-normal text-[16px] leading-[19.2px] m-2 ">Password</p>
          <input type="password" placeholder="Password" className="w-[356.77px] h-[43.91px] bg-[#F5F5F5] rounded-[10px] p-2 m-1 outline-none font-lato font-normal" ref={password} />
          <a href="#" className="font-lato font-normal text-[#346BD4] text-[16px] leading-[19.2px] m-1 p-2">Forgot password?</a>
          <p className="text-red-700">{error}</p>
          <button className="w-[356.77px] h-[43.91px]  bg-[#605BFF] rounded-[10px] font-montserrat font-bold text-[#FFFFFF] text-[16px]  align-middle p-2 m-1" onClick={handleButtonClick}>
            {isLogin ? "Sign In" : 'Sign Up'}
          </button>
        </form>
      </div>
      <p className="font-lato font-normal text-[16px] leading-[19.2px] align-middle text-[#858585] absolute top-[620px] left-[920px] cursor-pointer" onClick={toggleSignInform}>
        {isLogin ? <span>Don’t have an account? <a href="#" className="text-[#346BD4]">Register here</a></span> : "Already have an account"}
      </p>
    </div>
  );
};

export default LandingPage;
