'use client'

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Skill', path: '#skill' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Education', path: '#education' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav style={{ backgroundColor: '#F9FAFB', padding: '1rem 0', position: 'sticky', top: 0, zIndex: 50, }} className="shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <ul className="flex list-none text-[18px] font-semibold hover:bg-gray-100">
            {navItems.map((item) => (
              <li key={item.name} className="px-[12px] py-[12px] hover:bg-gray-100">
                <a
                  href={item.path}
                  className={`px-8 py-8 text-sm no-underline text-[#000000] hover:text-[#3B9C9C] transition-colors duration-300 ${pathname === item.path ? 'border-b-2 border-[#3B9C9C]' : ''}`}
                  aria-current={pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}