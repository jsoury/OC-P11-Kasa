import { useRef, useState, useEffect } from "react";
import styles from "./collapse.module.scss";
import arrowPng from "../../assets/arrow_back_ios-24px 2.png";

function Collapse({ label, children }) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current.scrollHeight > maxHeight)
      setMaxHeight(contentRef.current.scrollHeight);
    console.log(maxHeight);
  }, [contentRef, maxHeight]);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.collapse}>
      <button className={styles.collapse__button} onClick={toggleOpen}>
        {label}{" "}
        <img
          src={arrowPng}
          alt="arrow"
          style={
            open ? { transform: "rotate(180deg)" } : { transform: "rotate(0)" }
          }
        />
      </button>
      <div
        className={styles.collapse__contentParent}
        ref={contentRef}
        style={open ? { height: maxHeight + "px" } : { height: "0px" }}
      >
        <div className={styles.collapse__content}>{children}</div>
      </div>
    </div>
  );
}
export default Collapse;
