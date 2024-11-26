import { Button } from "@/components/ui/button";
import { extractFileId } from "@/lib/utils";
import { getCv } from "@/server-action/cv";
import { NotepadText } from "lucide-react";
import Link from "next/link";

const CVPage = async () => {
  const data = await getCv();
  const fileId = data ? extractFileId(data?.link) : "";

  return (
    <section className="container mx-auto p-4 h-screen">
      {fileId && fileId.trim() ? (
        <>
          <iframe
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            width="100%"
            height="100%"
            allow="autoplay"
          />
          <div className="flex justify-center items-center mt-6">
            <Button>
              <Link
                className="w-full h-full block"
                href={`https://drive.google.com/uc?export=download&id=${fileId}`}
                download={true}
              >
                Download CV
              </Link>
            </Button>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <NotepadText size={40} className="text-muted-foreground" />
          <small className="text-muted-foreground">No cv!</small>
        </div>
      )}
    </section>
  );
};

export default CVPage;
