import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
    return (
        <Card className="w-full max-w-7xl mx-auto lg:mb-8 relative overflow-x-hidden border-0 shadow-lg shadow-blue-100">
            <CardContent className="p-8 relative z-10">
                <Image
                    src="/bgHome2.png"
                    alt="Footer Background"
                    fill
                    className="object-cover -z-10"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-1">
                        <div className="flex items-center -ml-4">
                            <Image src="/logo-master.png" alt="Logo" width={196} height={64} />
                        </div>
                        <p className="text-sm text-black">
                            One Platform. Infinite Opportunities.
                        </p>
                        <div className="flex space-x-2 pt-2">
                            <Link href="#" aria-label="Facebook">
                                <Image src={"/FB.png"} alt="FaceBook" width={30} height={30} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn">
                                <Image src={"/Linkedin.png"} alt="Linkedin" width={30} height={30} />
                            </Link>
                            <Link href="#" aria-label="Youtube">
                                <Image src={"/YT.png"} alt="Youtube" width={30} height={30} />
                            </Link>
                            <Link href="#" aria-label="Instagram">
                                <Image src={"/Insta.png"} alt="Instagram" width={30} height={30} />
                            </Link>
                            <Link href="#" aria-label="Discord">
                                <Image src={"/Discord.png"} alt="Discord" width={30} height={30} />
                            </Link>
                            <Link href="#" aria-label="Gmail">
                                <Image src={"/Gmail.png"} alt="Gmail" width={30} height={30} />
                            </Link>
                            <Link href="#" aria-label="X">
                                <Image src={"/X.png"} alt="X" width={30} height={30} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                About Us
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Services
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Portfolio
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Blog
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Help Center
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                FAQ
                            </Link>
                            <Link href="#" className="text-sm text-black hover:text-foreground transition-colors max-w-fit">
                                Documentation
                            </Link>
                        </nav>
                    </div>

                </div>

                {/* Contact Info & Copyright */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 mt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center space-x-2 text-sm text-black">
                            <Mail className="h-4 w-4" />
                            <span>support@careercatalystx.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-black">
                            <Phone className="h-4 w-4" />
                            <span>+91 8168975398</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-black">
                            <MapPin className="h-4 w-4" />
                            <span>Jammu, (J&K UT)</span>
                        </div>
                    </div>
                    <p className="text-sm text-black">© 2025 CareerCatalystX. All rights reserved.</p>
                </div>
            </CardContent>
        </Card>
    )
}
