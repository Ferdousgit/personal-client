import { formatDate } from "@/lib/date-formater";
import { getTeachingExperience } from "@/server-action/teaching";
import { GiTeacher } from "react-icons/gi";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const data = await getTeachingExperience(params.id);

  return (
    <section className="container mx-auto p-4 space-y-3 min-h-screen max-h-full">
      {data ? (
        <>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
            {data.designation}
          </h2>
          <div>
            <small className="text-muted-foreground">
              {formatDate(new Date(data.startDate))} -{" "}
              {data.endDate === "current"
                ? "Present"
                : formatDate(new Date(data.endDate))}
            </small>
            <small className="text-muted-foreground block">
              Course: {data.course}
            </small>
          </div>
          <h5>{data.department}</h5>
          <h6>{data.institution}</h6>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </>
      ) : (
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <GiTeacher size={40} className="text-muted-foreground" />
          <small className="text-muted-foreground">
            Teaching experience not found!
          </small>
        </div>
      )}
    </section>
  );
};

export default page;
