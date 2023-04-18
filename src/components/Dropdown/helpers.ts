export function calcPreferSide(
  btnRef: React.RefObject<HTMLButtonElement>,
  tooltipRef: React.RefObject<HTMLDivElement>
) {
  if (document && btnRef.current && tooltipRef.current) {
    const {
      width: parentWidth,
      height: parentHeight,
      right,
      bottom,
      left: distanceToLeft,
      top: distanceToTop,
    } = btnRef.current.getBoundingClientRect();

    const clientW = document.documentElement.clientWidth;
    const clientH = document.documentElement.clientHeight;
    const distanceToRight = clientW - right;
    const distanceToBottom = clientH - bottom;

    const isDropdownActive = btnRef.current
      .closest(".dropdown")
      ?.classList.contains("dropdown_active");
    const isOrientY = Math.max(clientW, clientH) === clientH;
    const isOrientX = Math.max(clientW, clientH) === clientW;
    const isPreferTop = isOrientX && Math.max(distanceToBottom, distanceToTop) === distanceToTop;
    const isPreferBottom =
      isOrientX && Math.max(distanceToBottom, distanceToTop) === distanceToBottom;
    const isPreferLeft = isOrientY && Math.max(distanceToLeft, distanceToRight) === distanceToLeft;
    const isPreferRight =
      isOrientY && Math.max(distanceToLeft, distanceToRight) === distanceToRight;

    if (isPreferTop && !isDropdownActive) {
      tooltipRef.current.style.cssText += `
	  	top: -20%;
  	  	left: 50%;
  	  	transform: translate(-50%, -100%);
	  `;
    }

    if (isPreferBottom && !isDropdownActive) {
      tooltipRef.current.style.cssText += `
	      bottom: -20%;
  		  left: 50%;
  		  transform: translate(-50%, 100%);
		`;
    }

    if (isPreferLeft && !isDropdownActive) {
      tooltipRef.current.style.cssText += `
	      left: -10%;
  		  top: 50%;
  		  transform: translate(-100%, -50%);
	    `;
    }

    if (isPreferRight && !isDropdownActive) {
      tooltipRef.current.style.cssText += `
	        right: -10%;
  	        top: 50%;
  	        transform: translate(100%, -50%);
		  `;
    }

    console.log("isOrientY", isOrientY);
    console.log("isOrientX", isOrientX);
    console.log("isPreferTop", isPreferTop);
    console.log("isPreferBottom", isPreferBottom);
    console.log("isPreferLeft", isPreferLeft);
    console.log("isPreferRight", isPreferRight);
  } else {
    throw new Error(
      "Error in calcPreferSide func. Check that document object is defined and ref to DOM elements is exist"
    );
  }
}
