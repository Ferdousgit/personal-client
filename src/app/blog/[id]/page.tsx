import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/date-formater";
import { getSingleBlog } from "@/server-action/blog";
import { Calendar, NotebookPen } from "lucide-react";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const data = await getSingleBlog(params.id);

  return (
    <section className="container mx-auto p-4 min-h-screen max-h-full">
      {data ? (
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-primary">
            {data?.title}
          </h2>
          {data?.blog.trim() ? (
            <small className="text-muted-foreground">{data.readingTime}</small>
          ) : null}
          <p className="flex items-center gap-1 font-bold">
            <Calendar className="w-4 h-4" />
            <span>Published: {formatDate(new Date(data.publicationDate))}</span>
          </p>
          {data.blog.trim() ? (
            <div dangerouslySetInnerHTML={{ __html: data.blog }} />
          ) : (
            <p>{data.about}</p>
          )}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <NotebookPen size={40} className="text-muted-foreground" />
          <small className="text-muted-foreground">Blog not found!</small>
        </div>
      )}
      {data?.viewLink ? (
        <div className="mt-6">
          <Link
            className={buttonVariants()}
            href={data.viewLink}
            target="_blank"
          >
            Visit blog
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default page;
