import PublicationButtons from "@/components/publications/publication-buttons";
import { formatDate } from "@/lib/date-formater";
import { getSinglePublication } from "@/server-action/publication";
import { Scroll } from "lucide-react";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const data = await getSinglePublication(params.id);

  return (
    <section className="container mx-auto p-4 min-h-screen max-h-full">
      {data ? (
        <>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            {data.title}
          </h1>
          <p>{formatDate(new Date(data.publicationDate))}</p>
          {data.about ? <p>{data.about}</p> : null}
          {data.citation ? <p>{data.citation}</p> : null}
          {data.description ? (
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          ) : null}
          <PublicationButtons {...data} />
        </>
      ) : (
        <div className="h-[60vh] w-full flex justify-center items-center flex-col gap-2">
          <Scroll className="text-muted-foreground" size={40} />
          <small className="text-muted-foreground">No publication found!</small>
        </div>
      )}
    </section>
  );
};

export default page;
