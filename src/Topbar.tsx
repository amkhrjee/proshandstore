import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spacer,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import Member from "./Member";

export default function Topbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBlurred
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">🛒 Prosthetic Hand Store</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarItem className="cursor-pointer" onClick={onOpen}>
            Members
          </NavbarItem>
          <NavbarItem>
            <Link
              href="https://github.com/amkhrjee/proshandstore"
              isExternal
              showAnchorIcon
            >
              GitHub
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="https://www.tezu.ernet.in/" isExternal showAnchorIcon>
              Tezpur University
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem onClick={onOpen}>Members</NavbarMenuItem>
          <NavbarMenuItem>
            {" "}
            <Link
              href="https://github.com/amkhrjee/proshandstore"
              isExternal
              showAnchorIcon
            >
              GitHub
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="https://www.tezu.ernet.in/" isExternal showAnchorIcon>
              Tezpur University
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Project Members & Participants
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 justify-between text-center">
                <Member
                  imgSrc="https://i.ibb.co/94YXBMG/index1.jpg"
                  color="primary"
                  name="Dr. Nayan Moni Kalita"
                  profileSrc="http://agnigarh.tezu.ernet.in/~nkakoty"
                  role="Project Guide"
                />
                <Spacer y={2} />
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
                  <Member
                    imgSrc="https://i.ibb.co/KN48pXh/1713849714221.jpg"
                    color="secondary"
                    name="Kumar Yogesh"
                    profileSrc="https://www.linkedin.com/in/kumar-yogesh-2389872ba/"
                    role="Electronics & Software"
                  />
                  <Member
                    imgSrc="https://i.ibb.co/0YDSQw5/potrait.jpg"
                    color="secondary"
                    name="Aniruddha M"
                    profileSrc="https://www.linkedin.com/in/amkhrjee/"
                    role="Software & Web"
                  />
                  <div className="col-span-2 md:col-span-1">
                    <Member
                      imgSrc="https://media.licdn.com/dms/image/C4E03AQE6qYHbr36jYw/profile-displayphoto-shrink_400_400/0/1657976189663?e=1720051200&v=beta&t=rlrPa4crHOzxZHeYW0qCCT8M2d77chYIuOaqpjZo_c0"
                      color="secondary"
                      name="Ritish Kumar Das"
                      profileSrc="https://www.linkedin.com/in/ritish-kumar-das-17a629245/"
                      role="Electronics & ML"
                    />
                  </div>
                </div>
                <Spacer y={1} />
                <p>
                  Special Thanks to our friends at Mechanical Engineering
                  Department, <Link href="#">Aman Uddin</Link> &{" "}
                  <Link href="https://www.instagram.com/sivam.karmakar/">
                    Sivam Karmakar
                  </Link>
                  , for help with SolidWorks
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
