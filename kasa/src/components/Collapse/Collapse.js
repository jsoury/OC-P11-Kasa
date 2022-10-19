import { useRef, useState, useEffect } from 'react'
import styles from './collapse.module.scss'
import arrowBack from '@/assets/images/components/Collapse/arrow-back.png'
import useWindowDimensions from '@/utils/hooks/useWindowDimensions'

const Collapse = ({ label, height, setHeight, maxHeight, children }) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef()

  const { width: windowWidth } = useWindowDimensions()

  useEffect(() => {
    if (contentRef.current && height) {
      height.push(contentRef.current.scrollHeight)
      setHeight(height)
    }
  }, [contentRef, setHeight, height, maxHeight])

  function toggleOpen() {
    setOpen(!open)
  }

  return (
    <div className={styles.collapse}>
      <button
        className={`${styles.collapse__button} ${open ? styles.collapse__button__open : null}`}
        onClick={toggleOpen}
      >
        {label}
        <img
          src={arrowBack}
          alt="arrow"
          className={open ? styles.collapse__arrow__open : styles.collapse__arrow}
        />
      </button>
      <div
        className={styles.collapse__contentParent}
        ref={contentRef}
        style={
          !open
            ? { height: '0px' }
            : {
                height:
                  maxHeight && windowWidth >= 756 ? maxHeight : contentRef.current.scrollHeight,
              }
        }
      >
        <div className={styles.collapse__content}>
          {children}
          <div style={{ height: '10px' }}></div>
        </div>
      </div>
    </div>
  )
}
export default Collapse
