import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

import Heading from '@/components/heading';

interface ServiceDetailProps {
  cards: {
    title: string;
    detail: string;
    className?: string;
  }[];
  overline: string;
  headingText: string;
}

export default function ServiceDetails({
  cards,
  overline,
  headingText,
}: ServiceDetailProps) {
  return (
    <section className='container mx-auto max-w-6xl p-4'>
      <Heading overline={overline} headingText={headingText} />
      <div className='font-main'>
        <div className='grid w-full snap-x snap-mandatory auto-cols-max grid-flow-col gap-2 overflow-x-auto overflow-y-hidden p-0 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-3 lg:gap-8 lg:overflow-visible'>
          {cards.map((card, i) => (
            <Card key={i} className={`w-full ${card.className}`}>
              <CardHeader className='flex'>
                <CardTitle className='text-xl font-bold'>
                  <span className='text-orion text-xs font-bold'>0{i + 1}</span>{' '}
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className='max-w-xs'>
                <CardContent className='tracking-wide'>
                  {card.detail}
                </CardContent>
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
