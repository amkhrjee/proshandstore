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
  sizeHandler: (value: number | number[]) => void;
  color: string;
}

// Stages: Start, Mid, Final

const Config: FC<ConfigProps> = ({ handler, sizeHandler, color }) => {
  // const [stage, setStage] = useState("start");
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
        <Button color="primary">Proceed to checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default Config;
