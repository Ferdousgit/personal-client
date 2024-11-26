import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SocialMediaLink } from "@/type";
import Link from "next/link";
import Icon from "./icon";
import { Link2 } from "lucide-react";

type Props = {
  data?: SocialMediaLink[];
};

const Dropdown = ({ data }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="text-[12px] sm:text-[14px]">
          Follow
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-56">
        <DropdownMenuGroup>
          {data?.length ? (
            data.map((data) => (
              <Link href={data.link} key={data.link}>
                <DropdownMenuItem className="flex justify-start items-center gap-1">
                  <Icon iconName={data.icon} />
                  <span className="text-muted-foreground">{data.label}</span>
                </DropdownMenuItem>
              </Link>
            ))
          ) : (
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <Link2 className="text-muted-foreground" size={30} />
              <small className="text-muted-foreground">No links exist!</small>
            </div>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
