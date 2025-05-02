import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { Option } from "@/data/doshaQuestions";

type QuestionFieldProps = {
  id: number;
  question: string;
  options: Option[];
};

export const QuestionField = ({
  id,
  question,
  options,
}: QuestionFieldProps) => {
  const { control } = useFormContext();

  return (
    <Card>
      <CardContent>
        <FormLabel>{question}</FormLabel>
        <FormField
          name={id.toString()}
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="mt-4">
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    {options.map((option, index) => (
                      <div
                        className="flex items-center space-x-2 mt-2"
                        key={index}
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value={option.value}
                              id={`${id}-${option.value}`}
                            />
                          </FormControl>
                          <Label htmlFor={`${id}-${option.value}`}>
                            {option.label}
                          </Label>
                        </FormItem>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};
