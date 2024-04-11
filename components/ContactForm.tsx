'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ContactStoryblok } from '@/component-types-sb';
import { sendEmail } from '@/actions/send-email';
import { startTransition, useState } from 'react';
import { toast } from './ui/use-toast';

const phoneRegex = new RegExp(/^\+?[0-9]{1,15}$/);

const FormSchema = z.object({
  name: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  subject: z.string().min(3, {
    message: 'Subject must be at least 3 characters.',
  }),
  phoneNumber: z.string().regex(phoneRegex, {
    message: 'Please enter a valid phone number.',
  }),
});

const ContactForm = ({ formElements }: { formElements: ContactStoryblok }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<boolean | undefined>(false);
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [success, setSuccess] = useState<boolean | undefined>(true);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      sendEmail({values: data})
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
            toast({
              title: 'Something went wrong',
              variant: 'destructive'
            })
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
            toast({
              title: 'Sporočilo je bilo poslano. Hvala!',
              variant: 'success',
            })
          }
        })
        .catch(() => setError(true));

    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='text-left'>
              <FormLabel className='text-sm md:text-base'>
                {formElements.nameLabel}
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  autoComplete='name'
                  className='text-sm md:text-base'
                  placeholder={formElements.namePlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='text-left'>
              <FormLabel className='text-sm md:text-base'>
                {formElements.emailLabel}
              </FormLabel>
              <FormControl>
                <Input
                  autoComplete='email'
                  type='email'
                  className='text-sm md:text-base'
                  placeholder={formElements.emailPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phoneNumber'
          render={({ field }) => (
            <FormItem className='text-left'>
              <FormLabel className='text-sm md:text-base'>
                {formElements.phoneNumberLabel}
              </FormLabel>
              <FormControl>
                <Input
                  autoComplete='tel'
                  type='tel'
                  className='text-sm md:text-base'
                  placeholder={formElements.numberPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem className='text-left'>
              <FormLabel className='text-sm md:text-base'>
                {formElements.subjectLabel}
              </FormLabel>
              <FormControl>
                <Input
                  className='text-sm md:text-base'
                  autoComplete='subject'
                  type='text'
                  placeholder={formElements.subjectPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='text-left'>
              <FormLabel className='text-sm md:text-base'>
                {formElements.messageLabel}
              </FormLabel>
              <FormControl>
                <Textarea
                  className='text-sm md:text-base'
                  autoComplete='message'
                  placeholder={formElements.messagePlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
