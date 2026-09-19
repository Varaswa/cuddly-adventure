import type { ReactNode } from 'react'

export type TopicIconName =
  | 'lama'
  | 'haltung'
  | 'zucht'
  | 'verein'
  | 'weide'
  | 'stall'
  | 'fuetterung'
  | 'pflege'
  | 'gesundheit'
  | 'recht'

const paths: Record<TopicIconName, ReactNode> = {
  lama: (
    <>
      <path d="M5 19c1.2-3.5 2-7 4.5-9.2C11.2 8.4 13 8 14.5 9.2c1.2 1 1.6 2.8 2 4.6" />
      <path d="M9.5 10.5c.4-2 1.4-4.4 3.6-5.2 1.4-.5 2.7.6 2.4 2.1-.2 1-.9 1.7-1.8 2.2" />
      <path d="M16.8 12.2c.7.2 1.7.1 2.4-.6" />
    </>
  ),
  haltung: (
    <>
      <path d="M4 14.5 12 8l8 6.5" />
      <path d="M6.5 13v6.5h11V13" />
      <path d="M12 8V5.5" />
    </>
  ),
  zucht: (
    <>
      <circle cx="8.5" cy="9" r="2.4" />
      <circle cx="15.5" cy="15" r="2.4" />
      <path d="M10.4 10.6 13.6 13.4" />
    </>
  ),
  verein: (
    <>
      <circle cx="12" cy="8" r="2.4" />
      <path d="M7 18c.4-2.8 2.3-4.2 5-4.2s4.6 1.4 5 4.2" />
      <circle cx="6.2" cy="9.2" r="1.8" />
      <circle cx="17.8" cy="9.2" r="1.8" />
    </>
  ),
  weide: (
    <>
      <path d="M4 17.5c2.2-1.6 3.6-4.4 4.2-7.2C9 7.2 11 5 12.2 5c.6 2.4-.2 5.2-1.6 7.3" />
      <path d="M12 17.5c1.8-2 3.8-3.2 6.8-3.6" />
      <path d="M4.5 19h15" />
    </>
  ),
  stall: (
    <>
      <path d="M5 19V10l7-5 7 5v9" />
      <path d="M10 19v-6h4v6" />
    </>
  ),
  fuetterung: (
    <>
      <path d="M5 16.5c0-4 3.1-7.5 7-7.5s7 3.5 7 7.5" />
      <path d="M8 16.5h8v3H8z" />
      <path d="M12 5.5v3.5" />
    </>
  ),
  pflege: (
    <>
      <path d="M8 7.5c0-1.4 1.1-2.5 2.4-2.5 1 0 1.8.5 2.1 1.3.3-.8 1.1-1.3 2.1-1.3 1.3 0 2.4 1.1 2.4 2.5 0 3.2-4.5 6.4-4.5 6.4S8 10.7 8 7.5Z" />
      <path d="M7 18.5h10" />
    </>
  ),
  gesundheit: (
    <>
      <path d="M9 4.5h6v4.5h4.5v6H15V19.5H9v-4.5H4.5v-6H9z" />
    </>
  ),
  recht: (
    <>
      <path d="M12 4.5v15" />
      <path d="M5.5 8.5h13" />
      <path d="M7 8.5 5 14.5h4L7 8.5Z" />
      <path d="M17 8.5 15 14.5h4L17 8.5Z" />
    </>
  ),
}

export default function TopicIcon({ name }: { name: TopicIconName }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-salbei/15 text-salbei">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {paths[name]}
      </svg>
    </span>
  )
}
