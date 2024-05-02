import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
// import { useState } from "react";

export default function Topbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuItems = ["Features", "About", "Tezpur University"];
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-bold text-inherit">🛒 Prosthetic Hand Store</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>Features</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>GitHub</NavbarItem>
        <NavbarItem>Tezpur University</NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
