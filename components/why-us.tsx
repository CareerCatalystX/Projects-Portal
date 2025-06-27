"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GraduationCap, Users, Building2, TrendingUp, BookOpen, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SquishyCardProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  bgColor: string
  accentColor: string
  features: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
}

export default function Component() {
  const cardData: SquishyCardProps[] = [
    {
      title: "Colleges & Schools",
      subtitle: "Student-First Platform",
      description: "First ever student-first, mentor-backed growth platform designed for educational excellence.",
      icon: <GraduationCap className="w-8 h-8" />,
      bgColor: "bg-blue-500",
      accentColor: "text-blue-100",
      features: [
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Growth-Focused",
          description: "Student-centered approach",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Mentor Network",
          description: "Industry expert guidance",
        },
      ],
    },
    {
      title: "Students",
      subtitle: "Complete Journey",
      description: "End-to-end academic + industrial exposure for comprehensive career development.",
      icon: <BookOpen className="w-8 h-8" />,
      bgColor: "bg-green-500",
      accentColor: "text-green-100",
      features: [
        {
          icon: <GraduationCap className="w-5 h-5" />,
          title: "Academic Support",
          description: "Personalized learning paths",
        },
        {
          icon: <Building2 className="w-5 h-5" />,
          title: "Industry Ready",
          description: "Real-world experience",
        },
      ],
    },
    {
      title: "Companies",
      subtitle: "Smart Hiring",
      description: "More affordable than any job/hiring platform in India with pre-vetted talent.",
      icon: <Building2 className="w-8 h-8" />,
      bgColor: "bg-purple-500",
      accentColor: "text-purple-100",
      features: [
        {
          icon: <DollarSign className="w-5 h-5" />,
          title: "Cost Effective",
          description: "Most affordable in India",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Quality Talent",
          description: "Mentor-trained candidates",
        },
      ],
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-950">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold text-black mb-4">Bridging Education, Students & Industry</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            The first comprehensive platform designed to connect educational institutions, empower students, and help
            companies find the right talent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {cardData.map((card, index) => (
            <SquishyCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

const SquishyCard: React.FC<SquishyCardProps> = ({
  title,
  subtitle,
  description,
  icon,
  bgColor,
  accentColor,
  features,
}) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl ${bgColor} p-8`}
    >
      <div className="relative z-10 text-white">
        <div className="mb-3 flex items-center justify-between">
          <span className="block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
            For {title}
          </span>
          <div className="text-white/80">{icon}</div>
        </div>

        <motion.div
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-4 block origin-top-left"
        >
          <h3 className="font-bold text-2xl leading-tight mb-2">{subtitle}</h3>
          <p className="text-sm text-white/90 mb-4">{description}</p>
        </motion.div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="text-white/80 mt-0.5">{feature.icon}</div>
              <div>
                <h4 className="text-sm font-semibold">{feature.title}</h4>
                <p className="text-xs text-white/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Explore
      </button>
      <Background />
    </motion.div>
  )
}

const Background: React.FC = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  )
}
