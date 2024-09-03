import Button, { ButtonProps } from "../button/Button";
import { ShadowProps } from "../components";

interface DropDownButtonProps extends ButtonProps<void> {
  displayedId: string;
}

export default function DropDownButton(props: DropDownButtonProps) {
  let shadowStyle: ShadowProps = {
    size: props.shadow?.size,
    color: props.shadow?.color,
  };

  function displayDropDownContent() {
    const DropDownContent = document.getElementById(props.displayedId);

    if (DropDownContent?.classList.contains("DropDownContentHidden")) {
      DropDownContent?.classList.remove("DropDownContentHidden");
      DropDownContent?.classList.add("DropDownContentShow");
    } else {
      DropDownContent?.classList.remove("DropDownContentShow");
      DropDownContent?.classList.add("DropDownContentHidden");
    }

    props.onClick();
  }

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <Button
        text={props.text}
        ariaLabel={props.ariaLabel}
        size={props.size}
        color={props.color}
        variant={props.variant}
        onClick={displayDropDownContent}
        className={props.className}
        radius={props.radius}
        shadow={shadowStyle}
        key={props.key}
      />
    </div>
  );
}
