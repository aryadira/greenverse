import { Button } from "../components/parts";
import { Link } from "react-router-dom";
import transition from "../components/transition/transition";

const SignUp = () => {
  return (
    <div className='mx-auto max-w-screen min-h-screen text-black md:px-10 px-3 mb-[100px] mt-20'>
      <div className='flex'>
        <div className='mx-auto flex items-center flex-col'>
          <div className='mt-[60px] mb-[40px] text-center'>
            <div className='font-HaasMd md:text-[56px] text-4xl mb-3 flex  items-center gap-3 title text-center'>
              <svg className='w-[42px] md:w-[72px] h-[72px]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 68 68' fill='none'>
                <path
                  d='M33.61 0L35.28 14.81C36.29 23.82 43.4 30.92 52.41 31.94L67.22 33.61L52.41 35.28C43.4 36.29 36.3 43.4 35.28 52.41L33.61 67.22L31.94 52.41C30.93 43.4 23.82 36.3 14.81 35.28L0 33.61L14.81 31.94C23.82 30.93 30.92 23.82 31.94 14.81L33.61 0Z'
                  fill='black'
                />
              </svg>
              Join <span className={`font-HaasMd `}>Greenverse</span>
            </div>
            <p className='sm:text-lg text-md text-center text-[#767676] leading-8'>Let's Join us! before exploring Greenverse further</p>
          </div>
          <form className='w-[370px]'>
            <div className='flex flex-col gap-6'>
              <div>
                <label htmlFor='email' value='Nama Lengkap' />
                <input placeholder='Fullname' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>
              <div>
                <label htmlFor='email' value='Masukkan Username' />
                <input placeholder='Username' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>
              <div>
                <label htmlFor='email' value='Enter your email address' />
                <input placeholder='example@example.com' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>

              <div>
                <label htmlFor='email' value='Enter your password' />
                <input placeholder='Password' className='input-primary px-5 py-4 rounded-lg w-full' />
              </div>
            </div>
            <div className='grid space-y-[14px] mt-[30px] w-full text-center'>
              <Link to='/' className='w-full'>
                <Button className='w-full bg-[#313A36] text-white hover:bg-[#0f231a]'>
                  <span className='text-base text-white'>Go Sign Up!</span>
                </Button>
              </Link>
              <Link to='/signin'>
                <button type='button'>
                  <span className='text-base text-gray-700 hover:underline'>Already have an account? just log in!!</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default transition(SignUp);
