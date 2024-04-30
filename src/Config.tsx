import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Radio,
  RadioGroup,
  Slider,
  Spacer,
  cn,
} from "@nextui-org/react";
import { FC } from "react";

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
  color: string;
}

const Config: FC<ConfigProps> = ({ handler, color }) => {
  return (
    <Card className="p-4 mr-4 h-4/5">
      <CardHeader className="text-2xl font-bold">
        Customize your Prosthetic Hand
      </CardHeader>
      <CardBody className="p-16">
        <Slider
          size="lg"
          step={0.5}
          color="foreground"
          label="Arm Length (in centimeters)"
          showSteps={true}
          maxValue={10}
          minValue={0}
          defaultValue={0.6}
          className="max-w"
        />
        <Spacer y={16} />
        <RadioGroup
          //   className="text-black"
          label="Color of Material"
          orientation="horizontal"
          onValueChange={handler}
          defaultValue={color}
        >
          <CustomRadio value="pink">Pink</CustomRadio>
          <CustomRadio value="teal">Teal</CustomRadio>
          <CustomRadio value="yellow">Yellow</CustomRadio>
          <CustomRadio value="white">White</CustomRadio>
          <CustomRadio value="gray">Gray</CustomRadio>
        </RadioGroup>
      </CardBody>
      <CardFooter className="justify-center">
        <Button color="primary">Proceed to checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default Config;
