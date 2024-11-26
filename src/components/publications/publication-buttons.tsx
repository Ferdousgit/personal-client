"use client";
import { Button } from "../ui/button";
import { Publication } from "@/type";

const PublicationButtons = ({
  viewLink,
  downloadSlide,
  downloadPdf,
}: Publication) => {
  return (
    <div className="flex items-center gap-4 mt-6">
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
  );
};

export default PublicationButtons;
