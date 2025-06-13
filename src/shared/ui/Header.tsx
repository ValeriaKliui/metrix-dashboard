'use client'

import { useTheme } from '@emotion/react';
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function Header() {
    const theme = useTheme();

    return (
        <header>
            <Container maxWidth="xl" disableGutters sx={{ px: '84px', py: '16px' }}>
                <Image src="/logo.svg" alt="logo" width={43} height={43} />
            </Container>
        </header>)
}
