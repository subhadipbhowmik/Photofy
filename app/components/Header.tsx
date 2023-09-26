"use client";
import React from "react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import app from "./../Shared/firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";

function Header() {
  const { data: session } = useSession();

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  //   useEffect(() => {
  //     saveUserInfo();
  //   }, [session, saveUserInfo]);

  //   const saveUserInfo = async () => {
  //     if (session?.user) {
  //       // add your code here
  //       await setDoc(doc(db, "user", session.user.email), {
  //         userName: session.user.name,
  //         email: session.user.image,
  //         userImage: "USA",
  //       });
  //     }
  //   };

  console.log(session);
  return (
    <div className="flex gap-3 items-center p-6 md:gap-2">
      {/* logo  */}
      <Image
        src="/logo.png"
        alt="photofy"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />

      {/* buttons  */}

      <button className="bg-black text-white p-2 rounded-full px-4">
        Home
      </button>
      <button className="font-semibold p-2 rounded-full px-4">Home</button>
      <button className="font-semibold p-2 rounded-full px-4">Create</button>

      <div className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500 md:hidden" />
        <input
          className="bg-transparent outline-none"
          type="text"
          placeholder="search"
        />
      </div>
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />

      {session?.user ? (
        <Image
          src={session?.user?.image}
          alt="photofy"
          width={50}
          height={50}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        />
      ) : (
        <button
          onClick={() => signIn()}
          className="font-semibold p-2 rounded-full px-4"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Header;
