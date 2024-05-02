import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Chip,
  Radio,
  RadioGroup,
  Slider,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  cn,
} from "@nextui-org/react";
import { FC, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

console.log(firebaseConfig);

// console.log(typeof import.meta.env.VITE_API_KEY);
// let hell = "hell";
// console.log(hell);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// @ts-expect-error shutup typescript
export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </Radio>
  );
};

interface ConfigProps {
  handler: (value: string) => void;
  sizeHandler: (value: number | number[]) => void;
  color: string;
  size: number;
}

// Stages: Start, Mid, Final

const Config: FC<ConfigProps> = ({ handler, sizeHandler, color, size }) => {
  const [stage, setStage] = useState("start");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  switch (stage) {
    case "start":
      return (
        <Card className="p-4 mr-4 h-4/5">
          <CardHeader className="text-2xl font-bold">
            Customize your Prosthetic Hand
          </CardHeader>
          <CardBody className="p-16 mt-16">
            <Slider
              size="lg"
              step={5}
              color="foreground"
              label="Arm Length (in centimeters)"
              showSteps={true}
              maxValue={45}
              minValue={30}
              defaultValue={0.6}
              className="max-w"
              onChangeEnd={sizeHandler}
            />
            <Spacer y={16} />
            <RadioGroup
              label="Color of Material"
              orientation="horizontal"
              onValueChange={handler}
              defaultValue={color}
            >
              <CustomRadio value="gray">Gray</CustomRadio>
              <CustomRadio value="pink">Pink</CustomRadio>
              <CustomRadio value="blue">Blue</CustomRadio>
              <CustomRadio value="white">White</CustomRadio>
            </RadioGroup>
          </CardBody>
          <CardFooter className="justify-center">
            <Button onClick={() => setStage("mid")} color="primary">
              Proceed to checkout
            </Button>
          </CardFooter>
        </Card>
      );
    case "mid":
      return (
        <Card className="p-4 mr-4 h-4/5">
          <CardHeader className="text-2xl font-bold">
            <Button
              isIconOnly
              variant="ghost"
              onClick={() => setStage("start")}
            >
              ◀
            </Button>
            <Spacer x={2} />
            Add Order Details
          </CardHeader>
          <CardBody>
            <div className="flex">
              <Input
                type="text"
                label="First Name"
                className="max-w-xs"
                onChange={(e) => setFirstName(e.target.value)}
                defaultValue={firstName}
              />
              <Spacer x={2} />
              <Input
                type="text"
                label="Last Name"
                className="max-w-xs"
                onChange={(e) => setLastName(e.target.value)}
                defaultValue={lastName}
              />
            </div>
            <Spacer y={2} />
            <div className="flex">
              <Input
                type="email"
                label="Email"
                defaultValue={email}
                description="We'll never share your email with anyone else."
                className="max-w-xs"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Spacer x={2} />
              <Input
                type="numeric"
                label="Mobile No."
                startContent="+91"
                description="We'll contact you on this number."
                className="max-w-xs"
                onChange={(e) => setMobile(e.target.value)}
                defaultValue={mobile}
              />
            </div>
            <Spacer y={2} />
            <Input
              type="text"
              label="Address"
              description="Your order will be delivered here."
              className="w-5/6"
              onChange={(e) => setAddress(e.target.value)}
              defaultValue={address}
            />
            <Spacer y={4} />
            <div className="text-xl font-semibold">🧾 Order Summary</div>
            <Spacer y={2} />

            <Table aria-label="Order Summary">
              <TableHeader>
                <TableColumn>ITEM</TableColumn>
                <TableColumn>SIZE</TableColumn>
                <TableColumn>COLOR</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Prosthetic Hand</TableCell>
                  <TableCell>{size}</TableCell>
                  <TableCell>{color}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardBody>
          <CardFooter className="justify-center">
            <Button
              isLoading={isLoading}
              onPress={async () => {
                setIsLoading(true);
                try {
                  const document = await addDoc(collection(db, "Orders"), {
                    FirstName: firstName,
                    LastName: lastName,
                    Email: email,
                    Mobile: mobile,
                    Address: address,
                    HandColor: color,
                    HandSize: size,
                    isDone: false,
                  });
                  console.log("Data Added! ID:", document.id);
                  setOrderId(document.id);
                  setIsLoading(false);
                  setStage("final");
                } catch (e) {
                  console.error(e);
                }
              }}
              color="primary"
            >
              {isLoading ? <>Processing Order</> : <>Confirm Order</>}
            </Button>
          </CardFooter>
        </Card>
      );
    case "final":
      return (
        <Card className="p-4 mr-4 h-4/5">
          <ConfettiExplosion />
          <CardBody className="text-center flex flex-col  justify-center text-4xl font-bold">
            Thank you for ordering with us!
            <Spacer y={2} />
            <h1 className="text-sm">
              Your Order ID is <Chip>{orderId}</Chip>
            </h1>
          </CardBody>
          <CardFooter>
            <Button onPress={() => setStage("start")}>
              ◀ Go Back to Home
            </Button>
          </CardFooter>
        </Card>
      );
  }
};

export default Config;
