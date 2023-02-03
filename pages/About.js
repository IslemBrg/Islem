import React from 'react'
import styles from '@/styles/Home.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

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
          <motion.div
            initial={{ y: -50, opacity:0}}
            animate={{ y: 0, opacity:1 }}
            exit={{ y: -50, opacity:0 }}
            transition={{ duration: 1 ,delay: 1}}
          >
          <div style={{marginTop:100, display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
          <Link href="/Islem Bargaoui CV.pdf" target="_blank">
            <button button type="button" style={{backgroundColor:"#0077b5",fontSize:16}}className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Preview My Resume</button>
          </Link>
          <br/>
          <a href="/Islem Bargaoui CV.pdf" download="Islem Bargaoui (CV)">
            <button button type="button" style={{backgroundColor:"#0077b5",fontSize:16}} className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download My Resume</button>
          </a>
          </div>
          </motion.div>
        </AnimatePresence>
    </div>
  )
}
