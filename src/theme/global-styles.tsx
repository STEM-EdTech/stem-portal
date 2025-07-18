import { Global, css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = () => {
    return (
        <Global
            styles={css`
                html, body, div, span, applet, object, iframe,
                h1, h2, h3, h4, h5, h6, p, blockquote, pre,
                a, abbr, acronym, address, big, cite, code,
                del, dfn, em, img, ins, kbd, q, s, samp,
                small, strike, strong, sub, sup, tt, var,
                b, u, i, center,
                dl, dt, dd, ol, ul, li,
                fieldset, form, label, legend,
                table, caption, tbody, tfoot, thead, tr, th, td,
                article, aside, canvas, details, embed, 
                figure, figcaption, footer, header, hgroup, 
                menu, nav, output, ruby, section, summary,
                time, mark, audio, video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font: inherit;
                    font-size: 100%;
                    font-weight: 500;
                    vertical-align: baseline;
                }
                article, aside, details, figcaption, figure, 
                footer, header, hgroup, menu, nav, section {
                    display: block;
                }
                body {
                    line-height: 1;
                    overflow: hidden;
                    width: 100%;
                }
                ol, ul {
                    list-style: none;
                }
                blockquote, q {
                    quotes: none;
                }
                blockquote:before, blockquote:after,
                q:before, q:after {
                    content: '';
                    content: none;
                }
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }
                html {
                    color: ${theme.palette.text.primary};
                    overflow: hidden;
                    width: 100%;
                }
                body, main {
                    background-color: ${theme.palette.background.default};
                }

                a {
                    color: ${theme.palette.primary.main};
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }

                h1, h2, h3, h4, h5, h6 {
                    color: ${theme.palette.text.primary};
                }
            `}
        />
    );
};