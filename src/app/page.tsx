import { getBioGraphy } from "@/server-action/biography";
import { Frown, GraduationCap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Portfolio",
  description: "Introduction to my self",
};

const interests = [
  "Deep Learning",
  "Computer Vision",
  "Large Scale Data Management",
  "Cloud Computing",
  "Machine Learning",
  "Natural Language Processing",
];

const educations = [
  {
    id: crypto.randomUUID(),
    academy: "Khulna academy of Engineering and Technology(KUET)",
    degree: "M.Sc (Engg) in Computer Science and Engineering, At present",
  },
  {
    id: crypto.randomUUID(),
    academy: "Bangabandhu Sheikh Mujibur Rahman Science and Technology academy",
    degree: "B.Sc (Engg) in Computer Science and Engineering, 2018",
  },
  {
    id: crypto.randomUUID(),
    academy: "Shahid Smrity Collage",
    degree: "Higher Secondary School Certificate, 2013",
  },
  {
    id: crypto.randomUUID(),
    academy: "Baldia Secondary School",
    degree: "Secondary School Certificate, 2011",
  },
];

export default async function Home() {
  const user = await getBioGraphy();

  return (
    <section className="container mx-auto p-4 min-h-screen max-h-full">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-6">
        Biography
      </h1>
      {!user ? (
        <div className="w-full h-full flex justify-center items-center flex-col gap-2">
          <Frown className="text-muted-foreground" size={40} />
          <small>No biography exist!</small>
        </div>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: user.biography }} />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {user.interests.length ? (
              <div>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-6">
                  Interests
                </h2>
                <ul>
                  {user.interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {user.educations.length ? (
              <div>
                <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-6">
                  Education
                </h2>
                <div className="space-y-4">
                  {user.educations.map((education) => (
                    <div
                      key={education._id}
                      className="grid grid-cols-12 gap-2"
                    >
                      <GraduationCap className="h-8 w-8 col-span-2" />
                      <div className="col-span-10">
                        <h4 className="text-lg sm:text-xl font-semibold">
                          {education.degree}
                        </h4>
                        <small className="text-muted-foreground">
                          {education.institution}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
}
