'use client';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

const ThemeWrapper = ({ children }: PropsWithChildren) => {
   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeWrapper;
