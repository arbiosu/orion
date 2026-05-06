import Link from 'next/link';
import { Button } from '../ui/button';
import { FileText, PhoneCall } from 'lucide-react';

export default function ServiceButtons() {
  return (
    <div className='font-main flex flex-wrap gap-4'>
      <Button asChild size={'lg'} className='bg-orion font-semibold'>
        <Link href='/#quoteForm'>
          <FileText />
          Free Estimate
        </Link>
      </Button>
      <Button asChild size={'lg'} variant={'secondary'}>
        <Link href='tel:+17324927646'>
          <PhoneCall />
          (732) 492-7646
        </Link>
      </Button>
    </div>
  );
}
