import StudentInfo from "../studentInfo";

export default function MyshoppingsPage() {
  return (
    <div className='flex flex-col items-center justify-between p-24 '>
      <h1 className='underline underline-offset-8 text-xl'>My Shopping List</h1>

      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm mt-6'>
        <StudentInfo />
      </div>
    </div>
  );
}
