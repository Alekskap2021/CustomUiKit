import { getSizesAndCoords } from "./GetSizesAndCoords";

interface calcPreferSideProps {
  btnRef: React.RefObject<HTMLButtonElement>;
  tooltipRef: React.RefObject<HTMLDivElement>;
}

export function calcPreferSide({ btnRef, tooltipRef }: calcPreferSideProps) {
  if (document && btnRef.current && tooltipRef.current) {
    //   DOM elems refs
    const tooltip = tooltipRef.current;
    const triggerBtn = btnRef.current;
    const tooltipArrow = tooltip.querySelector("svg") || null;

    //   Initial coords
    const {
      triggerToLeft,
      triggerToRight,
      triggerToBottom,
      triggerToTop,
      triggerToDocumentLeft,
      triggerToDocumentTop,
      tooltipH,
      tooltipW,
      triggerW,
      triggerH,
    } = getSizesAndCoords(triggerBtn, tooltip);

    //   Calc prefer sides
    const isPreferTop = Math.max(triggerToBottom, triggerToTop) === triggerToTop;
    const isPreferBottom = Math.max(triggerToBottom, triggerToTop) === triggerToBottom;
    // const isPreferLeft = Math.max(distanceToLeft, distanceToRight) === distanceToLeft;
    // const isPreferRight = Math.max(distanceToLeft, distanceToRight) === distanceToRight;

    //  Calc is tooltip is clipped by left/right sides
    // const isLeftClipped = triggerToLeft <= tooltipW + 20;
    // const isRightClipped = triggerToRight <= tooltipW + 20;
    const isLeftClipped =
      tooltipW > triggerW ? (triggerToLeft > (tooltipW - triggerW) / 2 ? false : true) : false;

    const isRightClipped =
      tooltipW > triggerW ? (triggerToRight > (tooltipW - triggerW) / 2 ? false : true) : false;

    if (isLeftClipped) {
      if (tooltipW > triggerW) {
        tooltip.style.left = `${triggerToDocumentLeft}px`;
        tooltipArrow.style.left = `${triggerW / 2}px`;
      } else {
        tooltip.style.left = `${triggerToLeft + triggerW / 2}px`;
        tooltip.style.transform = `translateX(-50%)`;
      }
    } else if (isRightClipped) {
      if (tooltipW > triggerW) {
        tooltip.style.right = `${triggerToRight}px`;
        tooltipArrow.style.left = `${tooltipW - triggerW + triggerW / 2}px`;
      } else {
        tooltip.style.right = `${triggerToRight + triggerW / 2}px`;
        tooltip.style.transform = `translateX(50%)`;
      }
    } else {
      tooltip.style.left = `${triggerToDocumentLeft + triggerW / 2}px`;
      tooltip.style.transform = `translateX(-50%)`;
      tooltipArrow.style.left = `50%`;
    }

    // const isOrientY = Math.max(clientW, clientH) === clientH;

    if (isPreferTop) {
      tooltip.style.top = `${triggerToDocumentTop - tooltipH - 10}px`;
      tooltipArrow.style.bottom = `0px`;
      tooltipArrow.style.top = `unset`;
      tooltipArrow.style.transform = `translate(-50%, 90%) rotate(180deg)`;
    }
    if (isPreferBottom) {
      tooltip.style.top = ` ${triggerToDocumentTop + triggerH + 10}px`;
      tooltipArrow.style.top = `0px`;
      tooltipArrow.style.bottom = `unset`;
      tooltipArrow.style.transform = `translate(-50%, -90%)`;
    }
    // if (isPreferLeft) return "left";
    // if (isPreferRight) return "right";
  } else {
    throw new Error(
      "Error in calcPreferSide func. Check that document object is defined and ref to DOM elements is exist"
    );
  }
}
