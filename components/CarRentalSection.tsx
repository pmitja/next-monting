import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rent a Car</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our wide range of cars available for rent. Perfect for your next road trip or daily commute.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="flex flex-col rounded-xl border border-gray-100 shadow-sm overflow-hidden dark:border-gray-800">
            <Image alt="Car" className="aspect-[1.6] object-cover min-w-full" height="250" src="/porsche.jpg" width="400" />
            <div className="p-4 flex-1">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold tracking-tighter">Toyota Corolla</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Midsize Car • 4 doors</p>
                <p className="text-2xl font-bold">$79.99/day</p>
              </div>
              <Button size="sm">Book Now</Button>
            </div>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 shadow-sm overflow-hidden dark:border-gray-800">
            <Image alt="Car" className="aspect-[1.6] object-cover min-w-full" height="250" src="/porsche.jpg" width="400" />
            <div className="p-4 flex-1">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold tracking-tighter">Nissan Altima</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Midsize Car • 4 doors</p>
                <p className="text-2xl font-bold">$89.99/day</p>
              </div>
              <Button size="sm">Book Now</Button>
            </div>
          </div>
          <div className="flex flex-col rounded-xl border border-gray-100 shadow-sm overflow-hidden dark:border-gray-800">
            <Image alt="Car" className="aspect-[1.6] object-cover min-w-full" height="250" src="/porsche.jpg" width="400" />
            <div className="p-4 flex-1">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold tracking-tighter">Honda Accord</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Midsize Car • 4 doors</p>
                <p className="text-2xl font-bold">$99.99/day</p>
              </div>
              <Button size="sm">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}