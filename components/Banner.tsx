'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '@radix-ui/themes';
const Banner = () => {
   return (
      <motion.div
         className="mx-autoh-full]"
         initial={{ opacity: 0, translateY: -20 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ duration: 0.5, type: 'tween' }}
      >
         <Text className="text-2xl text-center" align={'center'}>
            Manage all your students notes in one place
         </Text>
      </motion.div>
   );
};

export default Banner;
