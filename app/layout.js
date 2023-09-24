import Navbar from "./Components/Navbar";
import "./globals.css";

export const metadata = {
    title: "Credein",
    description: "Design's from heart",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
