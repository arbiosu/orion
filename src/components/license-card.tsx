import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { BadgeCheck, Building2 } from 'lucide-react';

export default function LicenseCard() {
  return (
    <Card className='mx-auto max-w-md rounded-xl border-2 border-zinc-300 shadow-sm'>
      <CardHeader className='border-b border-zinc-300 pb-2'>
        <div className='flex items-center gap-3'>
          <Building2 className='h-8 w-8 text-amber-700' />
          <CardTitle className='text-xl font-bold tracking-wide'>
            CONTRACTOR LICENSE
          </CardTitle>
        </div>
        <p className='mt-1 text-xs tracking-wider uppercase'>
          NEW JERSEY DIVISION OF CONSUMER AFFAIRS
        </p>
      </CardHeader>

      <CardContent className='space-y-4 py-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-[10px] uppercase'>License Holder</p>
            <p className='font-semibold'>Orion Remodeling and Handyman LLC</p>
          </div>
          <div>
            <p className='text-[10px] uppercase'>License No.</p>
            <p className='font-semibold'>#13VH13063800</p>
          </div>

          <div>
            <p className='text-[10px] uppercase'>Issued</p>
            <p className='font-medium'>02/12/2024</p>
          </div>
          <div>
            <p className='text-[10px] uppercase'>Type</p>
            <p className='font-medium'>Home Improvement Contractor</p>
          </div>
        </div>
        <Link href='/orion-handyman-license.pdf' target='_blank'>
          <div className='flex items-center gap-2 rounded-md border border-dashed border-amber-700/60 bg-white p-3 text-sm text-amber-900'>
            <BadgeCheck className='h-4 w-4' />
            Verified & in good standing
          </div>
        </Link>
      </CardContent>

      <CardFooter className='border-t border-zinc-300 pt-3'>
        <p className='text-[10px] tracking-widest uppercase'>
          Authorized Contractor
        </p>
      </CardFooter>
    </Card>
  );
}
