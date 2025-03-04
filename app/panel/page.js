import { auth } from '@/auth';
import React from 'react';
import bg_img from '@/public/assets/images/bg.jpg';
import Image from 'next/image';

const Home = async () => {
  const session = await auth();
  return (
    <section className={`relative min-h-screen w-full`}>
      <Image
        src={bg_img}
        alt=""
        priority
        className="fixed top-0 left-0 -z-10 w-screen h-screen object-cover"
      />
      <div className="container flex flex-col items-center justify-center w-full min-h-[80vh]">
        <div className="bg-white bg-opacity-70 rounded-md p-12 text-center shadow-lg">
          <h1 className="text-6xl tracking-wider font-extrabold text-primary-100">
            Welcome Back!
          </h1>
          <p className="pt-4 text-dark-100">{session?.user?.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
