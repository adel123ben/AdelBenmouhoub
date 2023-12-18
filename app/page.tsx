import Cards from "@/components/CardJob"
import { BouncyCardsFeatures } from "@/components/Features"
import Example from "@/components/Landing"
import Landingue from "@/components/Landing"
import MobilMenue from "@/components/MobilMenue"
import { ModeToggle } from "@/components/ModeToggle"
import NewFeed from "@/components/NewFeed"
import NewNavbar from "@/components/NewNav"
import { HoverImageLinks } from "@/components/choix"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SheetFooter } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="">
     <NewNavbar />
     <NewFeed />
     <Cards />
     <BouncyCardsFeatures />
     <Footer />
    </div>
  )
}
