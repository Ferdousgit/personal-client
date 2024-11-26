import { formatDate } from "@/lib/date-formater";
import { TeachingExperience } from "@/type";
import Link from "next/link";

const TeachingCard = ({
  _id,
  about,
  course,
  department,
  designation,
  endDate,
  institution,
  startDate,
}: TeachingExperience) => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl font-bold">
        <Link href={`/teaching/${_id}`} className="text-primary underline">
          {designation}
        </Link>
      </h2>
      <div>
        <small className="text-muted-foreground">
          {formatDate(new Date(startDate))} -{" "}
          {endDate === "current" ? "Present" : formatDate(new Date(endDate))}
        </small>
        <small className="text-muted-foreground block">Course: {course}</small>
      </div>
      <h5>{department}</h5>
      <h6>{institution}</h6>
      <p className="mt-5">{about}</p>
    </div>
  );
};

export default TeachingCard;
