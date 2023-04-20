interface calcPreferSideProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  tooltipRef: React.RefObject<HTMLDivElement>;
  parentElRef: React.RefObject<HTMLDivElement>;
  //   classList: DOMTokenList;
}

export function calcPreferSide({
  btnRef,
  tooltipRef,
  parentElRef,
}: //   classList,
calcPreferSideProps) {
  if (document && btnRef.current && tooltipRef.current && parentElRef.current) {
    //   DOM elems
    const tooltip = tooltipRef.current;
    const triggerBtn = btnRef.current;
    const parentEl = parentElRef.current;

    //   Inirial coords
    const {
      right,
      bottom,
      left: distanceToLeft,
      top: distanceToTop,
    } = triggerBtn.getBoundingClientRect();

    const { left: tooltipToLeft, right: tooltipRight, width } = tooltip.getBoundingClientRect();

    const clientW = document.documentElement.clientWidth;
    const clientH = document.documentElement.clientHeight;
    const distanceToRight = clientW - right;
    const distanceToBottom = clientH - bottom;
    console.log(parentEl.getBoundingClientRect());

    //   Calc prefer sides
    const isLeftClipped = tooltipToLeft <= 0;
    const isRightClipped = clientW - tooltipRight <= 0;
    const isAlreadyClippedL = parentEl.classList.contains("clip-left");
    const isAlreadyClippedR = parentEl.classList.contains("clip-right");

    const isOrientY = Math.max(clientW, clientH) === clientH;

    const isPreferTop = Math.max(distanceToBottom, distanceToTop) === distanceToTop;
    const isPreferBottom = Math.max(distanceToBottom, distanceToTop) === distanceToBottom;
    const isPreferLeft = Math.max(distanceToLeft, distanceToRight) === distanceToLeft;
    const isPreferRight = Math.max(distanceToLeft, distanceToRight) === distanceToRight;

    if ((isLeftClipped || isAlreadyClippedL) && isPreferTop) return "top clip-left";
    if ((isLeftClipped || isAlreadyClippedL) && isPreferBottom) return "bottom clip-left";

    if ((isRightClipped || isAlreadyClippedR) && isPreferTop) return "top clip-right";
    if ((isRightClipped || isAlreadyClippedR) && isPreferBottom) return "bottom clip-right";

    if (isPreferTop) return "top";
    if (isPreferBottom) return "bottom";
    if (isPreferLeft) return "left";
    if (isPreferRight) return "right";
  } else {
    throw new Error(
      "Error in calcPreferSide func. Check that document object is defined and ref to DOM elements is exist"
    );
  }
}
