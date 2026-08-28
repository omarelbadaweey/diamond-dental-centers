'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

function Back() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="group flex w-fit items-center justify-center gap-2 rounded-xl border-2 bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-amber-400 border-amber-400 hover:bg-amber-100/70 hover:shadow-md active:translate-x-0 mr-4 cursor-pointer"
    >
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 text-amber-600 group-hover:text-amber-700" />
      <span>رجوع</span>
    </button>
  )
}

export default Back