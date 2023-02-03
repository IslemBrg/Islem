import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
        </AnimatePresence>
      </div>
    </div>
  )
}
