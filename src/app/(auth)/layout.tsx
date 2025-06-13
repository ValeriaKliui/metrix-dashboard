import Header from "@/shared/ui/Header";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Stack >            <Header />
            <Container component='main' maxWidth={false} sx={{ height: '100%', bgcolor: 'primary.900' }}>
                {children}
            </Container>
        </Stack>
    );
}