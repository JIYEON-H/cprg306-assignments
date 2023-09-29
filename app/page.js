import Image from "next/image";
import StudentInfo from "./studentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>
        <h1 className='text-4xl'>CPRG 306: Web Development 2 - Assignments</h1>
        <div className='mt-6'>
          <StudentInfo />
        </div>
        <ul className='underline underline-offset-1 mt-6'>
          <li>
            <Link href='/week2'>Week 2</Link>
          </li>
          <li>
            <Link href='/week3'>Week 3</Link>
          </li>
          <li>
            <Link href='/week4'>Week 4</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
