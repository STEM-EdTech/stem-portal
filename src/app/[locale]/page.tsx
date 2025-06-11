import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Sidebar, ChatArea, ChatBox, AppBar } from "~/app/[locale]/_components";
import { Box } from "@mui/material";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("HomePage");

    return {
        title: t("seo__title"),
        description: t("seo__description")
    };
}

export default async function Home({ params }: NextPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <AppBar />
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Sidebar />
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <ChatArea messages={[]} />
                    <ChatBox />
                </Box>
            </Box>
        </Box>
    );
}
