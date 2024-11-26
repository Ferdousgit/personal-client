import PublicationCard from "@/components/publications/publication-card";
import { Separator } from "@/components/ui/separator";
import { publicationData } from "@/constant/publicationsData";
import { getAllPublications } from "@/server-action/publication";
import { getSocialMediaLinks } from "@/server-action/social-media";
import { ScrollText } from "lucide-react";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Publication | Portfolio",
  description: "Introduction to my self",
};

const PublicationsPage = async () => {
  const data = await getAllPublications();
  const social = await getSocialMediaLinks();

  let scholar;
  if (social?.length) {
    scholar = social.find((d) => d.label.toLowerCase() === "google scholar");
  }

  return (
    <section className="container mx-auto p-4 min-h-screen max-h-full">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
        Publications
      </h1>
      {scholar ? (
        <p>
          You can also find my articles on my{" "}
          <a
            href={scholar.link}
            target="_blank"
            className="text-primary underline"
          >
            Google Scholar profile
          </a>
          .
        </p>
      ) : null}
      <div className="mt-6 space-y-10">
        {data?.length ? (
          data.map((data, index) => (
            <Fragment key={data._id}>
              <PublicationCard {...data} />
              {!(index + 1 === publicationData.length) ? <Separator /> : null}
            </Fragment>
          ))
        ) : (
          <div className="w-full flex justify-center items-center flex-col gap-2">
            <ScrollText className="text-muted-foreground" size={40} />
            <small className="text-muted-foreground">No publications!</small>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsPage;
