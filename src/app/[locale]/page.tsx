import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Header, LogoutButton, Sidebar, ChatArea, ChatBox } from "~/app/[locale]/_components";
import { createClient } from "~/lib/supabase/server";
import { redirect } from "~/i18n/routing";
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
    const t = await getTranslations({ locale, namespace: "HomePage" });

    const logoutButtonHandler = async () => {
        "use server";
        const supabase = await createClient();
        const { error } = await supabase.auth.signOut({ scope: 'local' });
        if (error) {
            console.error('error', error);
            return;
        }

        redirect({ href: '/login', locale });
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Header>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <span>User Dashboard</span>
                    <LogoutButton onClick={logoutButtonHandler} variant="contained" color="primary">
                        {t("logout")}
                    </LogoutButton>
                </Box>
            </Header>
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Sidebar />
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <ChatArea />
                    <ChatBox />
                </Box>
            </Box>
        </Box>
    );
}
