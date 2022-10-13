import { useRef, useState, useEffect } from "react";
import styles from "./collapse.module.scss";
import arrowPng from "../../assets/arrow_back_ios-24px 2.png";

const Collapse = ({ label, height, setHeight, maxHeight, children }) => {
  const [open, setOpen] = useState(false);
  //const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current) {
      height.push(contentRef.current.scrollHeight);
      setHeight(height);
    }
  }, [contentRef, setHeight, height]);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.collapse}>
      <button
        className={`${styles.collapse__button} ${
          open ? styles.collapse__button__open : null
        }`}
        onClick={toggleOpen}
      >
        {label}
        <img
          src={arrowPng}
          alt="arrow"
          className={
            open ? styles.collapse__arrow__open : styles.collapse__arrow
          }
        />
      </button>
      <div
        className={styles.collapse__contentParent}
        ref={contentRef}
        style={!open ? { height: "0px" } : { height: maxHeight + 20 }}
      >
        <div className={styles.collapse__content}>{children}</div>
      </div>
    </div>
  );
};
export default Collapse;
