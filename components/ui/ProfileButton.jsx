import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
const ProfileButton = () => {
  const { data: session } = useSession();
  const useremail = session?.user.email;
  const firstTwoChar = useremail?.substring(0, 2);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {/* <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" /> */}
          <AvatarFallback>{firstTwoChar}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="#">
          <DropdownMenuItem>My Account</DropdownMenuItem>
        </Link>
        <Link href="#">
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>
        <div onClick={() => signOut()}>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
