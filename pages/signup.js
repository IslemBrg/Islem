import React from 'react'
import styles from '@/styles/Home.module.css'
import { AnimatePresence , motion} from 'framer-motion'
import Link from 'next/link';
import { useState } from 'react';

export default function signup() {
    const [EmptyMail, setEmptyMail] = useState(false)
    const [EmptyPass, setEmptyPass] = useState(false)
    const [InvPass2, setInvPass2] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setEmptyMail(false)
        setEmptyPass(false)
        setInvPass2(false)
        let ok = true
        const email = data.get('email')
        if (email == "") {setEmptyMail(true);ok=false}
        const pass = data.get("password")
        if (pass == "") {setEmptyPass(true);ok=false}
        const pass2 = data.get("confirm-password")
        if (pass2!=pass){setInvPass2(true);ok=false}

        if (ok) {
            const config={
                method:"POST",
                body:JSON.stringify({
                  email:email,
                  pass:pass
                })
              }
            const res = await fetch("http://127.0.0.1:3000/api/signup",config)
            const signup = await res.json()
            console.log(signup)
        }
    }
  return (
    <div className={styles.body}>
    <AnimatePresence>
        <motion.div
        initial={{ y: -50, opacity:0 }}
        animate={{ y: 0, opacity:1 }}
        exit={{ y: -50, opacity:0 }}
        transition={{ duration: 1, delay: 0.2 }}
        >
            <section>
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                                    {EmptyMail &&(
                                    <div className={styles.errorMessage}>
                                        <p style={{padding:'1px',fontSize:12,textAlign:'center'}}>Please enter an email!</p>
                                      </div>
                                    )}
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                    {EmptyPass && 
                                        <div className={styles.errorMessage}>
                                            <p style={{padding:'1px',fontSize:12,textAlign:'center'}}>Please enter a password!</p>
                                        </div>
                                    }
                                </div>
                                <div>
                                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                    {InvPass2 && 
                                        <div className={styles.errorMessage}>
                                            <p style={{padding:'1px',fontSize:12,textAlign:'center'}}>Passwords don't match!</p>
                                        </div>
                                    }
                                </div>
                                <button type="submit" style={{backgroundColor:"blue"}} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link href="login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    </AnimatePresence>
    </div>
  )
}
