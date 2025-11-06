import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='container mx-auto mt-4 max-w-7xl border-t border-gray-400 p-10'>
      <div className='font-main flex flex-col'>
        <div className='flex justify-between'>
          <p> © 2025 ORION REMODELING & HANDYMAN LLC. All rights reserved.</p>
          <Link href='tel:7324927646'>(732) 492-7646</Link>
          <Link href='mailto:orionremodeling2024@gmail.com'>Email Us</Link>
        </div>
        <p className='font-main'></p>
      </div>
    </footer>
  );
}
