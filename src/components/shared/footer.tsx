import { getShortBio } from "@/server-action/biography";
import { getSocialMediaLinks } from "@/server-action/social-media";
import Link from "next/link";
import Icon from "./sidebar/icon";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Footer = async ({ className }: Props) => {
  const bio = await getShortBio();
  const data = await getSocialMediaLinks();

  return (
    <footer
      className={cn(
        "text-muted-foreground mt-20 bg-muted shadow-lg container mx-auto p-4",
        className
      )}
    >
      {/* <h2 className="text-xl text-muted">Sitemap</h2> */}
      <div className="flex items-center gap-2">
        <p className="font-bold uppercase text-[14px]">FOLLOW:</p>
        {data &&
          data.length &&
          data.slice(0, 2).map((data) => (
            <Link href={data.link} key={data.link}>
              <div className="flex justify-start items-center gap-1 text-[16px]">
                <Icon iconName={data.icon} />
                <span className="text-muted-foreground">{data.label}</span>
              </div>
            </Link>
          ))}
      </div>
      <p className="text-muted-foreground text-[14px] mt-6">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold">by {bio?.fullName}</span>. All rights
        reserved.
      </p>
      <small className="text-muted-foreground">
        Developed by:{" "}
        <Link
          href={"https://www.linkedin.com/in/tanvinbd"}
          target="_blank"
          className="font-semibold"
        >
          A. N. M. Tanvin Ahmed
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
