import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

export default function Home() {
  
  return (
    <div className={styles.body}>
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            exit={{ x: -1500 }}
            transition={{ duration: 0.5 ,delay: 0.2}}
          >
            <h1 className={styles.title} style={{marginTop:"200px"}}>Welcome to my sample web app!</h1>
          </motion.div>
          <motion.div
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            exit={{ x: 1500 }}
            transition={{ duration: 0.5 ,delay: 0.2}}
          >
            <h2 className={styles.description}>Done by Me, Islem Bargaoui (Retr0)</h2>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity:0}}
            animate={{ y: 0, opacity:1 }}
            exit={{ y: -50, opacity:0 }}
            transition={{ duration: 0.5 ,delay: 1}}
          >
          <div id="text" style={{fontSize:30,marginTop:100,display: "flex",flexDirection:"column", justifyContent: "space-around", alignItems: "center"}}>
          <h3>Website built using</h3>
          <Typewriter
            options={{
              strings: ['Next.Js','Tailwindcss','Node.js'],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              delay:30
            }}
          />
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
