import {ChangeEvent} from "react";
import {Button, Flex, TextField} from "@aws-amplify/ui-react";
import {Send} from "lucide-react";

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
    isBusy: boolean;
}

export function ChatInput({value, onChange, isBusy}: ChatInputProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <Flex direction="row" gap="0.5rem">
            <TextField
                label="Message"
                labelHidden
                placeholder="Ask anything"
                value={value}
                onChange={handleChange}
                isDisabled={isBusy}
                autoComplete="off"
                flex="1"
                inputStyles={{
                    borderRadius: "large",
                }}
            />
            <Button
                type="submit"
                variation="primary"
                isDisabled={isBusy}
                isLoading={isBusy}
                borderRadius="large"
            >
                <Send/>
            </Button>
        </Flex>
    );
}
