"use client";

import {useFormStatus} from "react-dom";
import {Button} from "./ui/button";

function SubmitButton({children, pendingText = "Please wait..."}) {
  const {pending} = useFormStatus();

  return (
    <Button className="btn-primary" type="submit" disabled={pending}>
      {pending ? pendingText : children}
    </Button>
  );
}

export default SubmitButton;
