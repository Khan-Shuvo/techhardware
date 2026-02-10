import { Box, CircuitBoard, Cpu, Fan, HardDrive, LucideIcon, MemoryStick, Monitor, Zap } from 'lucide-react';
import Card from '../Card';
import Link from 'next/link';
type Category = {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  productCount: number
}

export const categories: Category[] = [
  { id: "1", name: 'Graphics Cards', slug: 'graphics-cards', icon: Monitor, productCount: 8 },
  { id: "2", name: 'Processors', slug: 'processors', icon: Cpu, productCount: 6 },
  { id: "3", name: 'Motherboards', slug: 'motherboards', icon: CircuitBoard, productCount: 5 },
  { id: "4", name: 'Memory (RAM)', slug: 'memory', icon: MemoryStick, productCount: 6 },
  { id: "5", name: 'Storage', slug: 'storage', icon: HardDrive, productCount: 7 },
  { id: "6", name: 'Power Supplies', slug: 'power-supplies', icon: Zap, productCount: 4 },
  { id: "7", name: 'Cases', slug: 'cases', icon: Box, productCount: 4 },
  { id: "8", name: 'Cooling', slug: 'cooling', icon: Fan, productCount: 5 },
];

export default function Category() {
  return (
    <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
      {categories.map(item => (
        <Link href={'/shop'} key={item.id} className='hover:-translate-y-1.5 transition-transform duration-300' >
          <Card key={item.id} variant='category' title={item.name} icon={item.icon} count={item.productCount} />
        </Link>
      ))}

    </section>
  )
}
