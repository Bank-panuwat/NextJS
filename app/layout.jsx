import '@styles/globals.css';
import Nav from '@components/Nav';
// import Feed from '@components/Feed'



export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => (
    <html lang='en'>
        <body>

            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
                {children}
                {/* <Feed /> */}
                
            </main>

        </body>
    </html>
);

export default RootLayout;
