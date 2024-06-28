'use client';
import Image from 'next/image';
import bg_img from '@/public/assets/images/bg.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/authContext';
import { InputPrimary } from '@/components/ui/Input';
import ButtonPrimary from '@/components/ui/ButtonPrimary';
import { register } from '@/actions/auth.action';

export default function Home() {
  const { loading, login, error, errors } = useContext(AuthContext);
  const [input, setinput] = useState({
    email: '',
    password: '',
  });

  function handleInput(e) {
    // clear validation errors onChange
    // let _errors = errors?.filter(
    //   (error: any) => !error.path.includes(e.target.name)
    // );
    // if (_errors && _errors?.length > 0) seterrors(_errors);
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    login(input);
  };

  return (
    <>
      <button
        onClick={() => {
          register();
        }}
      >
        sdfsdfsdf
      </button>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <Image
          src={bg_img}
          alt=""
          fill
          priority
          className="z-0 w-full h-full object-cover object-left-bottom lg:object-center brightness-90"
        />
        <div className="z-10 relative w-full px-8 py-12 m-auto bg-black/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl lg:max-w-xl text-white">
          <h1 className="text-3xl font-semibold text-center text-primary-100 uppercase">
            sign in
          </h1>
          <form onSubmit={(e) => submitHandler(e)} className="mt-6">
            <InputPrimary
              type="email"
              label="Email"
              name="email"
              value={input.email}
              onChange={handleInput}
              error={
                errors?.find((error) => error.path?.[0] == 'email')?.message
              }
              maxLength={100}
            />

            <InputPrimary
              type="password"
              label="Password"
              value={input.password}
              onChange={handleInput}
              name="password"
              error={
                errors?.find((error) => error.path?.[0] == 'password')?.message
              }
              maxLength={16}
            />
            <div className="flex flex-wrap justify-between">
              <p className="text-xs text-red-500">{error}</p>
              <a href="#" className="text-xs text-primary-100 hover:underline">
                Forget Password?
              </a>
            </div>
            <div className="mt-6">
              <ButtonPrimary
                type="submit"
                disabled={loading}
                buttonClass="w-full"
              >
                {loading && (
                  <span className="inline-block size-4 border-t-2 border-r-2 rounded-full bg-transparent animate-spin"></span>
                )}{' '}
                Login
              </ButtonPrimary>
            </div>
          </form>
        </div>{' '}
      </div>
    </>
  );
}
