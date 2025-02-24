import { Roboto } from "next/font/google";
import { PageContainer } from "./components/PageContainer";

export const fontRoboto = Roboto({
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    variable: '--font-roboto'
});

export const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <PageContainer>
            <main>
                {children}
            </main>
        </PageContainer>
    );
};