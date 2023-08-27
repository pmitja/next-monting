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

const phoneRegex = new RegExp(
  /^\+?(386)?0([1-7][0-9]{7}|([347]0|[3457]1|6[4589]){6})$/
);

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

const ContactForm = () => {
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
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='text-left'>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Please enter your full name'
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
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='Please enter your email address'
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
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input
                  type='tel'
                  placeholder='Please enter your phone number'
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
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Please enter a subject for your message.'
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Please type your message here'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='rounded-full bg-red-600 px-7' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
