import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Link from "next/link";
import { getSocialMediaLinks } from "@/server-action/social-media";
import { Link2 } from "lucide-react";
import { getShortBio } from "@/server-action/biography";
import Icon from "./icon";
import Dropdown from "./dropdown";
import { cn, getSubString } from "@/lib/utils";

const Sidebar = async () => {
  const data = await getSocialMediaLinks();
  const bio = await getShortBio();

  return (
    <>
      {/* large screen */}
      <section className="hidden md:block md:col-span-3 border-r-2 overflow-y-auto overflow-x-hidden p-4 bg-inherit mt-16">
        <div className="mt-6 mb-4 space-y-6">
          <div
            className={cn({
              "flex justify-center items-center": !bio?.avatar,
            })}
          >
            <Avatar className={cn("h-40 w-40")}>
              <AvatarImage
                src={bio?.avatar ?? ""}
                alt="img"
                className="w-full h-full object-cover"
              />
              <AvatarFallback>F</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{bio?.fullName}</h1>
            <small className="text-muted-foreground">{bio?.shortBio}</small>
          </div>
          {data && data.length ? (
            <div className="flex flex-col justify-start gap-y-2">
              {data.map((data) => (
                <Link href={data.link} key={data.link}>
                  <div className="flex justify-start items-center gap-1 text-[16px]">
                    <Icon iconName={data.icon} />
                    <span className="text-muted-foreground">{data.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <Link2 className="text-muted-foreground" size={35} />
              <small className="text-muted-foreground">No links exist!</small>
            </div>
          )}
        </div>
      </section>
      {/* small screen */}
      <section className="w-full flex items-center justify-between gap-6 md:hidden mt-20">
        <div className="flex justify-center items-center gap-2">
          <Avatar>
            <AvatarImage
              src={bio?.avatar ?? ""}
              alt="img"
              className={"object-cover"}
            />
            <AvatarFallback>
              {getSubString(bio?.fullName ?? "", 1)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="hidden sm:block sm:text-lg font-bold m-0 p-0">
              {bio?.fullName}
            </h1>
            <h1 className="block sm:hidden text-md font-bold m-0 p-0">
              {getSubString(bio?.fullName ?? "", 10)}
            </h1>
            <small className="text-muted-foreground hidden sm:block sm:text-[12px] m-0 p-0">
              {bio?.shortBio}
            </small>
            <small className="text-muted-foreground sm:hidden block text-[10px] m-0 p-0">
              {getSubString(bio?.shortBio ?? "", 30)}
            </small>
          </div>
        </div>
        <Dropdown data={data} />
      </section>
    </>
  );
};

export default Sidebar;
