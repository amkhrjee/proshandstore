import { Avatar, Chip, Link, Spacer } from "@nextui-org/react";
import { FC } from "react";

interface MemberProps {
  imgSrc: string;
  profileSrc: string;
  name: string;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default"
    | undefined;
  role: string;
}

const Member: FC<MemberProps> = ({ imgSrc, profileSrc, name, color, role }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar size="lg" alt={name} src={imgSrc} />
      <Spacer y={2} />
      <Link href={profileSrc} isExternal showAnchorIcon size="sm">
        {name}
      </Link>
      <Spacer y={2} />
      <Chip color={color}>{role}</Chip>
    </div>
  );
};

export default Member;
