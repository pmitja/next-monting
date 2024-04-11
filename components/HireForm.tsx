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
import { HireFormStoryblok } from '@/component-types-sb';
import { sendEmail } from '@/actions/send-email';

const phoneRegex = new RegExp(/^\+?[0-9]{1,15}$/);

const FormSchema = z.object({
  name: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
  text: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  phoneNumber: z.string().regex(phoneRegex, {
    message: 'Please enter a valid phone number.',
  }),
  subject: z.string(),
});

const HireForm = ({ formElements }: { formElements: HireFormStoryblok }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      text: '',
      subject: 'Ponudba',
    },
  });

  return (
    <Form {...form}>
      <form action={sendEmail} className='space-y-6'>
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
                {formElements.phoneLabel}
              </FormLabel>
              <FormControl>
                <Input
                  autoComplete='tel'
                  type='tel'
                  className='text-sm md:text-base'
                  placeholder={formElements.phonePlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='text'
          render={({ field }) => (
            <FormItem className='text-left'>
              <FormLabel className='text-sm md:text-base'>
                {formElements.textLabel}
              </FormLabel>
              <FormControl>
                <Textarea
                  className='text-sm md:text-base'
                  autoComplete='message'
                  placeholder={formElements.textPlaceholder}
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

export default HireForm;
