"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <main>
      <header>
        <h1>Login Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} {user.uid}
            </p>
            <img
              src={user.photoURL}
              alt={user.displayName}
              className='W-8 h-8'
            />
            <button
              className='text-lg m-2 hover:underline bg-orange-600 border-2 border-orange-400 rounded-md'
              onClick={handleSignOut}
            >
              Sign out
            </button>
            <div>
              <Link href='/week10/shopping-list'>
                Continue to your Shopping List
              </Link>
            </div>
          </div>
        ) : (
          <button
            className='text-lg m-2 hover:underline bg-orange-600 border-2 border-orange-400 rounded-md'
            onClick={handleSignIn}
          >
            Sign In
          </button>
        )}
      </section>
    </main>
  );
}
