import React from 'react'
import styles from '@/styles/Home.module.css'
import { AnimatePresence, motion } from 'framer-motion'

export default function About() {
  return (
    <div className={styles.body}>
        <AnimatePresence>
          <motion.div
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            exit={{ x: -1500 }}
            transition={{ duration: 0.5 ,delay: 0.2}}
          >
            <h1 className={styles.title} style={{marginTop:"200px"}}>My name is Islem Bargaoui</h1>
          </motion.div>
          <motion.div
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            exit={{ x: 1500 }}
            transition={{ duration: 0.5 ,delay: 0.2}}
          >
            <h2 className={styles.description}>i study software engineering at ISTIC</h2>
          </motion.div>
          <br/>
          <br/>
          <motion.div
            initial={{ y: -50, opacity:0}}
            animate={{ y: 0, opacity:1 }}
            exit={{ y: -50, opacity:0 }}
            transition={{ duration: 0.5 ,delay: 1}}
          >
            <h1 style={{textAlign:"center",fontSize:"1.3rem"}}>Highly motivated in learning more and new dev technologies and expanding my current knowledge.</h1>
          </motion.div>
        </AnimatePresence>
    </div>
  )
}
