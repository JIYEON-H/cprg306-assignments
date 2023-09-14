import Link from "next/link";

const myName = "Jiyeon Heo";
const muCourse = "CPRG 306 F";
const myGitHub = "https://github.com/JIYEON-H/cprg306-assignments.git";

function StudentInfo() {
  return (
    <div>
      <p>Name: {myName}</p>
      <p>Course section: {muCourse}</p>
      <p>
        GitHub: <Link href={myGitHub}>{myGitHub}</Link>
      </p>
    </div>
  );
}

export default StudentInfo;
