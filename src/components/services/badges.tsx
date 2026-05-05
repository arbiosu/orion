import { Badge } from '@/components/ui/badge';

interface BadgeListProps {
  badges: {
    text: string;
    className: string;
  }[];
}

export default function BadgeList({ badges }: BadgeListProps) {
  return (
    <div className='mx-auto flex max-w-6xl flex-row flex-wrap justify-center gap-2 p-8'>
      {badges.map((badge, i) => (
        <Badge key={i} className={badge.className}>
          {badge.text}
        </Badge>
      ))}
    </div>
  );
}
