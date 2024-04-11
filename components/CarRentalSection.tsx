import { CarCardStoryblok, CarRentalStoryblok } from "@/component-types-sb"
import CarRentalCard from "./CarRentalCard"
import { storyblokEditable } from '@storyblok/react/rsc';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function CarRentalSection({ blok }: { blok: CarRentalStoryblok }) {
  return (
    <section className="w-full py-12 md:py-16" {...storyblokEditable(blok)}>
      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{blok.title}</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {blok.text}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {blok.cards.map((car: CarCardStoryblok, index: number) => (
            <CarRentalCard
              key={index}
              name={car.name}
              type={car.type}
              doors={car.doors}
              price={car.price}
              imageUrl={car.imageUrl} />
            ))}
        </div>
        <div className="flex place-content-center items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant='secondary'
              className='w-fit px-6 py-3 text-sm md:px-6 md:py-4 md:text-base'
            >
              {blok.buttonText}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{blok.dialogTitle}</DialogTitle>
              <DialogDescription className="flex flex-col gap-4 mt-10">
                <div className="flex gap-2"><Phone /> {blok.phone}</div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog></div>
      </div>
    </section>
  )
}