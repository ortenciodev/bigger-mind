'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2800)
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2.5
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-900"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-100" />
          <div className="absolute inset-0 bg-gradient-hero" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'backOut' }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-lg">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path
                      d="M8 22L18 12L22 16L18 20L26 28L22 32L12 22L8 22Z"
                      fill="white"
                      fillOpacity="0.9"
                    />
                    <path
                      d="M36 22L26 32L22 28L26 24L18 16L22 12L32 22L36 22Z"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl"
                />
              </div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h1 className="text-3xl font-display font-bold text-white tracking-wide mb-1">
                  BIGGER MIND
                </h1>
                <p className="text-sm text-white/40 tracking-[0.25em] uppercase font-medium">
                  Digital Solutions
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-64 flex flex-col items-center gap-3"
            >
              <div className="w-full h-0.5 bg-dark-400 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <p className="text-xs text-white/30 font-mono">
                {progress < 100 ? 'Inicializando...' : 'Pronto'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
