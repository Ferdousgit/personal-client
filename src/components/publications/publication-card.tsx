import Link from "next/link";
import { Button } from "../ui/button";
import { Publication } from "@/type";
import { formatDate } from "@/lib/date-formater";

const PublicationCard = ({
  _id,
  about,
  downloadPdf,
  publicationDate,
  citation,
  downloadSlide,
  title,
  viewLink,
}: Publication) => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl font-bold">
        <Link href={`/publications/${_id}`} className="text-primary underline">
          {title}
        </Link>
      </h2>
      <p>{formatDate(new Date(publicationDate))}</p>
      {about ? <p>{about}</p> : null}
      {citation ? <p>Recommended citation: {citation}</p> : null}
      <div className="flex items-center gap-4">
        {viewLink ? (
          <Button variant={"default"}>
            <a href={viewLink} target="_blank">
              Visit publication
            </a>
          </Button>
        ) : null}
        {downloadPdf ? (
          <Button variant={"default"}>
            <a href={downloadPdf} download>
              Download Paper
            </a>
          </Button>
        ) : null}
        {downloadSlide ? (
          <Button variant={"secondary"}>
            <a href={downloadSlide} download>
              Download Slides
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default PublicationCard;
