import TeachingCard from "@/components/teaching/teaching-card";
import { Separator } from "@/components/ui/separator";
import { teachingData } from "@/constant/teachingData";
import { getAllTeachingExtensions } from "@/server-action/teaching";
import { Metadata } from "next";
import { Fragment } from "react";
import { GiTeacher } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Teaching | Portfolio",
  description: "My teaching experience",
};

const TeachingPage = async () => {
  const data = await getAllTeachingExtensions();

  return (
    <section className="container mx-auto p-4 min-h-screen max-h-full">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Teaching</h1>
      <div className="mt-6 space-y-10">
        {data?.length ? (
          data.map((data, index) => (
            <Fragment key={data._id}>
              <TeachingCard {...data} />
              {!(index + 1 === teachingData.length) ? <Separator /> : null}
            </Fragment>
          ))
        ) : (
          <div className="w-full flex justify-center items-center flex-col gap-2">
            <GiTeacher size={40} className="text-muted-foreground" />
            <small className="text-muted-foreground">
              No teaching experiences!
            </small>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeachingPage;
