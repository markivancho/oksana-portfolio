/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LinkedinIcon, InstagramIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function CoachPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Jane Doe</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#services" className="hover:text-blue-600">Services</a></li>
              <li><a href="#benefits" className="hover:text-blue-600">Benefits</a></li>
              <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Empowering Individuals and Organizations</h2>
          <p className="text-xl mb-8">ICF Certified Agile Coach & HR Business Partner</p>
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg?height=400&width=400" alt="Jane Doe" className="rounded-full mx-auto" width={300} height={300} />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                As a certified ICF Agile Coach and experienced HR Business Partner in the IT industry, I bring a unique blend of skills to help individuals and organizations reach their full potential.
              </p>
              <p className="text-lg mb-4">
                My approach combines agile methodologies with deep HR insights, enabling me to facilitate transformative sessions and provide strategic consulting to top managers.
              </p>
              <p className="text-lg">
                Whether you&quot;re an individual looking to advance your career or an organization aiming to optimize your workforce, I&quot;m here to guide you towards success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Companies</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Agile transformation consulting</li>
                  <li>Leadership team coaching</li>
                  <li>HR strategy development</li>
                  <li>Organizational culture workshops</li>
                  <li>Employee engagement programs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">For Individuals</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Career development coaching</li>
                  <li>Personal agility training</li>
                  <li>Leadership skills enhancement</li>
                  <li>Work-life balance optimization</li>
                  <li>Professional growth planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Coaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">For Companies</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Improved team productivity and efficiency</li>
                <li>Enhanced leadership capabilities</li>
                <li>Better alignment of HR strategies with business goals</li>
                <li>Increased employee engagement and retention</li>
                <li>Successful implementation of agile methodologies</li>
                <li>Improved organizational adaptability to change</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">For Individuals</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Accelerated career growth</li>
                <li>Enhanced self-awareness and emotional intelligence</li>
                <li>Improved decision-making skills</li>
                <li>Better work-life balance</li>
                <li>Increased job satisfaction and motivation</li>
                <li>Development of a growth mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <p className="italic mb-4">&quot;Oksana&quot;s coaching has been transformative for our organization. Her expertise in both agile methodologies and HR practices has helped us create a more dynamic and engaged workforce.&quot;</p>
                  <p className="font-semibold">- John Smith, CEO of Tech Innovators</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <p className="text-center mb-6">Ready to start your journey towards personal or organizational growth? Contact me today!</p>
            <div className="flex justify-center space-x-4 mb-8">
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <LinkedinIcon className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-pink-600 hover:text-pink-800">
                <InstagramIcon className="h-8 w-8" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <Button className="w-full" asChild>
              <a href="mailto:jane@example.com">
                <MailIcon className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Oksana Semeniv. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
