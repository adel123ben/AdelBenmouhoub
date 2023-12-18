/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j0HO9xyRkba
 */
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Footer from "./footer"

export default function Cards() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 mt-[-250px]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold">Project 1</h3>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Project 1"
                    className="w-full h-64 object-cover"
                    height="200"
                    src="https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/6101f640be8b14a59ab21ed8_Project%20List%20Image%20Frame%20-%20Grumble.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <p className="mt-4 text-gray-700 dark:text-gray-200">Description for project 1...</p>
                  <Button className="mt-4">View project</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold">Project 1</h3>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Project 1"
                    className="w-full h-64 object-cover"
                    height="200"
                    src="https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f57928f9c1e059254de_Project%20List%20Image%20Frame%20-%20Job%20Card.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <p className="mt-4 text-gray-700 dark:text-gray-200">Description for project 1...</p>
                  <Button className="mt-4">View project</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold">Project 2</h3>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Project 2"
                    className="w-full h-64 object-cover"
                    height="200"
                    src="https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f9f743b67201879170a_Project%20List%20Image%20Frame%20-%20SJ.png"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <p className="mt-4 text-gray-700 dark:text-gray-200">Description for project 2...</p>
                  <Button className="mt-4">View project</Button>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
        
        
      </main>
      
    </div>
  )
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
