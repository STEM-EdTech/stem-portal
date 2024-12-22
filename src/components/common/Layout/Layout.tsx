import { Roboto } from "next/font/google";
import { PageContainer } from "./components/PageContainer";

const inter = Roboto({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
});

export const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <PageContainer className={inter.className}>
            <main>
                {children}
            </main>
        </PageContainer>
    );
};