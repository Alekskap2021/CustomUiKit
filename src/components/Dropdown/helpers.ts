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
      height: parentHeight,
      width: parentWidth,
      right,
      bottom,
      left: distanceToLeft,
      top: distanceToTop,
    } = triggerBtn.getBoundingClientRect();

    const { left: tooltipToLeft, right: tooltipRight } = tooltip.getBoundingClientRect();

    const clientW = document.documentElement.clientWidth;
    const clientH = document.documentElement.clientHeight;
    const distanceToRight = clientW - right;
    const distanceToBottom = clientH - bottom;

    //   Calc prefer sides
    const isOrientY = Math.max(clientW, clientH) === clientH;
    const isOrientX = Math.max(clientW, clientH) === clientW;
    const isLeftClipped = tooltipToLeft <= 0;
    const isRightClipped = clientW - tooltipRight <= 0;
    const isPreferTop = isOrientX && Math.max(distanceToBottom, distanceToTop) === distanceToTop;
    const isPreferBottom =
      isOrientX && Math.max(distanceToBottom, distanceToTop) === distanceToBottom;
    const isPreferLeft = isOrientY && Math.max(distanceToLeft, distanceToRight) === distanceToLeft;
    const isPreferRight =
      isOrientY && Math.max(distanceToLeft, distanceToRight) === distanceToRight;

    if (isPreferTop) {
      parentEl.classList.remove("button");
      parentEl.classList.add("top");
    }
    if (isPreferBottom) {
      parentEl.classList.add("bottom");
    }
    if (isPreferLeft) parentEl.classList.add("left");
    if (isPreferRight) parentEl.classList.add("right");

    if (isLeftClipped && isPreferTop) {
      tooltip.classList.add("clip-left");
    }
    if (isLeftClipped && isPreferBottom) {
      tooltip.classList.add("clip-left");
    }
    if (isRightClipped && isPreferTop) {
      tooltip.classList.add("clip-right");
    }
  } else {
    throw new Error(
      "Error in calcPreferSide func. Check that document object is defined and ref to DOM elements is exist"
    );
  }
}
