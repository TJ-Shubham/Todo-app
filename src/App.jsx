import Footer from "./components/Footer"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { ThemeProvider } from "./contexts/ThemeProvider"
import { TodosProvider } from "./contexts/TodosProvider"

function App() {
  
  return (
    <ThemeProvider>
      <TodosProvider>
        <main className="bg-light-blue w-full min-h-screen dark:bg-dark-blue font-josefin-sans">
          <section className="grid min-h-screen grid-rows-[1fr_auto] bg-no-repeat bg-contain bg-hero-mobile-light dark:bg-hero-mobile-dark md:bg-hero-desktop-light dark:md:bg-hero-desktop-dark" >
            <div className="w-10/12 mx-auto py-12 md:mx-auto md:w-6/12 md:py-24">
              <Header />
              <TodoInput />
              <TodoList />
            </div>
            <Footer />
          </section>
        </main>
      </TodosProvider>
    </ThemeProvider>
  )
}

export default App
